import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/search/:query',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/SearchView.vue'),
  },
  {
    path: '/popular',
    name: 'popular',
    component: () => import(/* webpackChunkName: "popular" */ '@/views/PopularView.vue'),
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import(/* webpackChunkName: "latest" */ '@/views/LatestView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
