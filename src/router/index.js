// src/router/index.ts ou index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import PagInicial from '@/components/PagInicial.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: PagInicial },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
