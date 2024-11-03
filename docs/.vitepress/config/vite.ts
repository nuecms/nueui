import path from 'path'
import Inspect from 'vite-plugin-inspect'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { loadEnv } from 'vitepress'
import {
  projRoot,
} from '../utils/paths'
import { MarkdownTransform } from '../plugins/markdown-transform'



import type { Plugin, UserConfig } from 'vitepress'

type ViteConfig = Required<UserConfig>['vite']
type ResolveOptions = Required<ViteConfig>['resolve']
type AliasOptions = Required<ResolveOptions>['alias']


const optimizeDeps = [
  // element-plus, @vueuse/core, @element-plus/icons-vue
  // '@vueuse/core',
  // '@element-plus/icons-vue',
  // 'element-plus/es',
]


const alias: AliasOptions = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, '../vitepress')}/`,
  }
]

export const getViteConfig = ({ mode }: { mode: string }): ViteConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    css: {
      preprocessorOptions: {
        // scss: { api: 'modern-compiler' },
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    server: {
      host: true,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      vueJsx(),

      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
          ElementPlusResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),

      MarkdownTransform(),
      Inspect()
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
}
