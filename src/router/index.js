// src/router/index.ts ou index.js
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import FooterLayout from "@/layouts/FooterLayout.vue";

const routes = [
  {
    path: "/",
    component: FooterLayout,
    children: [
      {
        path: "",
        component: () => import("@/components/Login.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: MainLayout,
    children: [
      {
        path: "",
        component: () => import("@/components/PagInicial.vue"),
      },
    ],
  },
  {
    path: "/cep",
    component: MainLayout,
    children: [
      {
        path: "",
        component: () => import("@/components/CepPag.vue"),
      },
    ],
  },
  {
    path: "/crud",
    component: MainLayout,
    children: [
      {
        path: "",
        component: () => import("@/components/Crud.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
