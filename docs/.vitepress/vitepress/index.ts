


import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'


import 'element-plus/theme-chalk/src/var.scss'

import './styles/app.scss'

import type { Component } from 'vue'


export default VPApp

export const globals: [string, Component][] = [
  ['Demo', VPDemo]
]
