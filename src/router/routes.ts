import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/IndexPage.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('@/pages/AdminLoginPage.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    meta: { requiresAuth: false },
    component: () => import('@/pages/AdminPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
