import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { search as ptSearch } from './pt'
import { search as jaSearch } from './ja'
import { search as esSearch } from './es'
import { search as koSearch } from './ko'

export const shared = defineConfig({
  title: 'NueUI',

  rewrites: {
    'en/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://ui.nuecms.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/nueui-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/nueui-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'NueUI | A Nuxt UI library' }],
    ['meta', { property: 'og:site_name', content: 'NueUI' }],
    ['meta', { property: 'og:image', content: 'https://ui.nuecms.com/nueui-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://ui.nuecms.com/' }],
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-01N8HFE4NE',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-01N8HFE4NE');
      `,
    ],

    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: '/nueui-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuecms/nueui' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'N5BJZE25C1',
        apiKey: '87da9a1ba26a2ca02c457887a53b115d',
        indexName: 'nueui',
        locales: {
          ...zhSearch,
          ...ptSearch,
          ...jaSearch,
          ...esSearch,
          ...koSearch
        }
      }
    },

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
