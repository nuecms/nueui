

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

const MAIN_FILE_NAME = 'App.vue'

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source)
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  const isPreview = location.host.startsWith('preview')
  let link = `https://element-plus.run/`
  if (isPreview) {
    const pr = location.host.split('-', 2)[1]
    link = `${link}?pr=${pr}`
  }

  return {
    encoded,
    link,
  }
}
