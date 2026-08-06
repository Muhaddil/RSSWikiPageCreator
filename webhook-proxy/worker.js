const DEFAULT_ALLOWED = 'https://data.royalspacesociety.com';
const WINDOW_MS = 60 * 1000; // 60s
const MAX_REQUESTS_PER_WINDOW = 100; // por IP
const MAX_PAYLOAD_BYTES = 7000;

function corsHeaders(allowedOrigin) {
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function respond(data, status, corsOrigin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(corsOrigin || '*'),
    },
  });
}

function stripTrailingSlash(u) {
  return u.endsWith('/') ? u.slice(0, -1) : u;
}

function isAllowedOrigin(origin, allowedList) {
  if (!origin) return false;
  let normalizedOrigin;
  try {
    normalizedOrigin = new URL(stripTrailingSlash(origin)).origin;
  } catch {
    return false;
  }
  return allowedList.some((allowed) => {
    try {
      return new URL(allowed).origin === normalizedOrigin;
    } catch {
      return false;
    }
  });
}

export default {
  async fetch(request, env) {
    const origin = (request.headers.get('Origin') || request.headers.get('Referer') || '').trim();
    const allowedList = (env.ALLOWED_ORIGINS || DEFAULT_ALLOWED)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const allowedHere = isAllowedOrigin(origin, allowedList);
    const corsOrigin = allowedHere ? origin : (allowedList[0] || '*');

    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(corsOrigin) });
    }

    // Bloquear origen no permitido / ausente
    if (!origin || !allowedHere) {
      return respond({ error: 'Origen no permitido' }, 403, corsOrigin);
    }

    if (request.method !== 'POST') {
      return respond({ error: 'Método no permitido' }, 405, corsOrigin);
    }

    // Rate limiting por IP
    const ip =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
      'unknown';

    if (env.RATE_LIMIT_KV) {
      try {
        const key = `rl:${ip}`;
        const now = Date.now();
        const raw = await env.RATE_LIMIT_KV.get(key);
        let count = 0;
        let windowStart = now;

        if (raw) {
          const [c, w] = raw.split(',');
          count = parseInt(c || '0', 10);
          windowStart = parseInt(w || '0', 10);
        }

        if (now - windowStart > WINDOW_MS || windowStart === 0) {
          count = 0;
          windowStart = now;
        }

        if (count >= MAX_REQUESTS_PER_WINDOW) {
          return respond({ error: 'Demasiadas peticiones. Inténtalo más tarde.' }, 429, corsOrigin);
        }

        await env.RATE_LIMIT_KV.put(key, `${count + 1},${windowStart}`, { expirationTtl: Math.ceil(WINDOW_MS / 1000) * 2 });
      } catch {
        // Si el binding KV está mal configurado, seguimos sin rate limiting,
        // nunca dejamos caer la Worker.
      }
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return respond({ error: 'JSON inválido' }, 400, corsOrigin);
    }

    if (!body || (!body.content && !body.embeds)) {
      return respond({ error: 'Payload inválido: se espera content o embeds' }, 400, corsOrigin);
    }

    if (JSON.stringify(body).length > MAX_PAYLOAD_BYTES) {
      return respond({ error: 'Payload demasiado grande' }, 413, corsOrigin);
    }

    if (!env.DISCORD_WEBHOOK) {
      return respond({ error: 'Webhook no configurado en el Worker' }, 500, corsOrigin);
    }

    const webhookResponse = await fetch(env.DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text();
      return respond({ error: `Error del webhook: ${webhookResponse.status} ${text}` }, webhookResponse.status, corsOrigin);
    }

    return respond({ ok: true }, 200, corsOrigin);
  },
};