import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/pnpm-lock.yaml',
      '**/CHANGELOG.en-US.md',
      'docs/components.d.ts',
      'ssr-testing/cases/*',
      'docs/.vitepress/i18n/*',
      'docs/.vitepress/cache/*',
      'docs/.vitepress/crowdin/*',
      '!docs/.vitepress/crowdin/en-US',
      '!**/.*',
    ],
  },
]
