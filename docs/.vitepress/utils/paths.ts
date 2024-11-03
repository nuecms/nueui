import { resolve } from 'path'


export const REPO_OWNER = 'element-plus'
export const REPO_NAME = 'element-plus'
export const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
export const REPO_BRANCH = 'dev'

export const projRoot = resolve(__dirname, '..', '..', '..')


export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const vpRoot = resolve(docRoot, '.vitepress')


