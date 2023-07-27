// @/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 基础页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeIndex',
    component: () => import('@renderer/views/Home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
