import fs from 'fs'
import path from 'path'
import { docRoot } from '../utils/paths'

export const languages = ['en', 'zh-CN']

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0]
