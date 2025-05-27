// src/router/index.ts ou index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import PagInicial from '@/components/PagInicial.vue'
import CepPag from '@/components/CepPag.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: PagInicial },
  { path: '/cep', component: CepPag }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
