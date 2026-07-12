import { useHead } from '@unhead/vue';
import { seoConfig, defaultSEO } from '@/variables/seo';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useSEO(_routeName?: string) {
  const currentRoute = useRoute();

  const seoData = computed(() => {
    const routeName = (currentRoute.name as string) || '';
    const data = seoConfig[routeName] || defaultSEO;
    return {
      title: data.title,
      meta: [
        {
          name: 'description',
          content: data.description,
        },
        {
          name: 'keywords',
          content: (data.keywords || defaultSEO.keywords)?.join(', '),
        },
        {
          property: 'og:title',
          content: data.title,
        },
        {
          property: 'og:description',
          content: data.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: data.title,
        },
        {
          name: 'twitter:description',
          content: data.description,
        },
      ],
    };
  });

  useHead(seoData);
}
