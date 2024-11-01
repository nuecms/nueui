import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('nueui/package.json')

export const ja = defineConfig({
  lang: 'ja',
  description: 'Vite と Vue で動作する静的サイトジェネレータ',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ja/guide/': { base: '/ja/guide/', items: sidebarGuide() },
      '/ja/reference/': { base: '/ja/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/nuecms/nueui/edit/main/docs/:path',
      text: 'このページを GitHub で編集'
    },

    footer: {
      message: 'MIT ライセンスでリリースされています。',
      copyright: '© 2019 - 現在 Terry Cai'
    },

    outline: { label: 'ページナビゲーション' },

    docFooter: {
      prev: '前へ',
      next: '次へ'
    },

    lastUpdated: {
      text: '最終更新日',
    },

    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替え',
    darkModeSwitchTitle: 'ダークモードに切り替え',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップに戻る',
    langMenuLabel: '言語'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Руководство',
      link: '/ja/guide/what-is-vitepress',
      activeMatch: '/ja/guide/'
    },
    {
      text: 'Справочник',
      link: '/ja/reference/site-config',
      activeMatch: '/ja/reference/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Изменения',
          link: 'https://github.com/nuecms/nueui/blob/main/CHANGELOG.md'
        },
        {
          text: 'Вклад',
          link: 'https://github.com/nuecms/nueui/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Введение',
      collapsed: false,
      items: [
        { text: 'Что такое VitePress?', link: 'what-is-vitepress' },
        { text: 'Первые шаги', link: 'getting-started' },
        { text: 'Маршрутизация', link: 'routing' },
        { text: 'Развёртывание', link: 'deploy' }
      ]
    },
    {
      text: 'Написание',
      collapsed: false,
      items: [
        { text: 'Расширения Markdown', link: 'markdown' },
        { text: 'Обработка ресурсов', link: 'asset-handling' },
        { text: 'Метаданные', link: 'frontmatter' },
        { text: 'Использование Vue в Markdown', link: 'using-vue' },
        { text: 'Интернационализация', link: 'i18n' }
      ]
    },
    {
      text: 'Настройка',
      collapsed: false,
      items: [
        { text: 'Пользовательская тема', link: 'custom-theme' },
        {
          text: 'Расширение темы по умолчанию',
          link: 'extending-default-theme'
        },
        {
          text: 'Загрузка данных в режиме реального времени',
          link: 'data-loading'
        },
        { text: 'Совместимость с SSR', link: 'ssr-compat' },
        { text: 'Подключение к CMS', link: 'cms' }
      ]
    },
    {
      text: 'Экспериментально',
      collapsed: false,
      items: [
        { text: 'Режим MPA', link: 'mpa-mode' },
        { text: 'Генерация карты сайта', link: 'sitemap-generation' }
      ]
    },
    { text: 'Конфигурация и API', base: '/ja/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Справочник',
      items: [
        { text: 'Конфигурация сайта', link: 'site-config' },
        { text: 'Конфигурация метаданных', link: 'frontmatter-config' },
        { text: 'jantime API', link: 'jantime-api' },
        { text: 'Командная строка', link: 'cli' },
        {
          text: 'Тема по умолчанию',
          base: '/ja/reference/default-theme-',
          items: [
            { text: 'Обзор', link: 'config' },
            { text: 'Навигация', link: 'nav' },
            { text: 'Сайдбар', link: 'sidebar' },
            { text: 'Главная страница', link: 'home-page' },
            { text: 'Подвал', link: 'footer' },
            { text: 'Макет', link: 'layout' },
            { text: 'Значки', link: 'badge' },
            { text: 'Страница команды', link: 'team-page' },
            {
              text: 'Предыдущая и следующая страницы',
              link: 'prev-next-links'
            },
            { text: 'Ссылка для редактирования', link: 'edit-link' },
            { text: 'Последнее обновление', link: 'last-updated' },
            { text: 'Поиск', link: 'search' },
            { text: 'Carbon Ads (реклама)', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  ja: {
    placeholder: 'Поиск в документации',
    translations: {
      button: {
        buttonText: 'Поиск',
        buttonAriaLabel: 'Поиск'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Сбросить поиск',
          resetButtonAriaLabel: 'Сбросить поиск',
          cancelButtonText: 'Отменить поиск',
          cancelButtonAriaLabel: 'Отменить поиск'
        },
        startScreen: {
          recentSearchesTitle: 'История поиска',
          noRecentSearchesText: 'Нет истории поиска',
          saveRecentSearchButtonTitle: 'Сохранить в истории поиска',
          removeRecentSearchButtonTitle: 'Удалить из истории поиска',
          favoriteSearchesTitle: 'Избранное',
          removeFavoriteSearchButtonTitle: 'Удалить из избранного'
        },
        errorScreen: {
          titleText: 'Невозможно получить результаты',
          helpText: 'Вам может потребоваться проверить подключение к Интернету'
        },
        footer: {
          selectText: 'выбрать',
          navigateText: 'перейти',
          closeText: 'закрыть',
          searchByText: 'поставщик поиска'
        },
        noResultsScreen: {
          noResultsText: 'Нет результатов для',
          suggestedQueryText: 'Вы можете попытаться узнать',
          reportMissingResultsText:
            'Считаете, что поиск даёт ложные результаты？',
          reportMissingResultsLinkText: 'Нажмите на кнопку «Обратная связь»'
        }
      }
    }
  }
}
