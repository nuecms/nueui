import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { pt } from './pt'
import { ja } from './ja'
import { es } from './es'
import { ko } from './ko'

export default (env) => {
  return {
    ...shared(env),
    locales: {
      root: { label: 'English', ...en },
      zh: { label: '简体中文', ...zh },
      pt: { label: 'Português', ...pt },
      ja: { label: '日本語', ...ja },
      es: { label: 'Español', ...es },
      ko: { label: '한국어', ...ko }
    }
  }
}
