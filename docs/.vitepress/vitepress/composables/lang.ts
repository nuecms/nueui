import { computed } from 'vue'
import { useData } from 'vitepress'

export const useLang = () => {
  return computed(() => {
    const { lang } = useData()
    return lang.value
  })
}
