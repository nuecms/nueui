import mdContainer from 'markdown-it-container'
import createDemoContainer from '../plugins/demo'
import { ApiTableContainer } from '../plugins/api-table'
import type { MarkdownRenderer } from 'vitepress'

export const mdPlugin = (md: MarkdownRenderer) => {
  // md.use(headers)
  // md.use(externalLinkIcon)
  // md.use(tableWrapper)
  // md.use(tooltip)
  // md.use(tag)
  md.use(mdContainer, 'demo', createDemoContainer(md))
  md.use(ApiTableContainer)
}
