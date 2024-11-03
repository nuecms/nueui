
const endingSlashRE = /\/$/;

export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}


export function createGitHubUrl(
  docsRepo: string,
  docsDir: string,
  docsBranch: string,
  path: string,
  folder = 'examples/',
  ext = '.vue'
) {
  const base = isExternal(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`
  return `${base.replace(endingSlashRE, '')}/edit/${docsBranch}/${docsDir ? `${docsDir.replace(endingSlashRE, '')}/` : ''
    }${folder || ''}${path}${ext || ''}`
}
