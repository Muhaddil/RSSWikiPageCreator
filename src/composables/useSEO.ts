import { useHead } from '@unhead/vue';
import { seoConfig, defaultSEO } from '@/variables/seo';
import { computed } from 'vue';

export function useSEO(routeName: string) {
  const seoData = computed(() => {
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
        // Open Graph
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
        // Twitter Card
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
