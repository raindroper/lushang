import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' },
  },
  {
    path: '/news',
    name: 'News',
    meta: { title: '新闻中心' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/News.vue'),
  },
  {
    path: '/meeting',
    name: 'Meeting',
    meta: { title: '走进大会' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Meeting.vue'),
  },
  {
    path: '/news/list',
    name: 'NewsList',
    meta: { title: '新闻中心' },
    component: () => import('../views/NewsList.vue'),
  },
  {
    path: '/news/detail',
    name: 'NewsDetail',
    meta: { title: '新闻中心' },
    component: () => import('../views/NewsDetail'),
  },
  {
    path: '/guest',
    name: 'Guest',
    meta: { title: '嘉宾风采' },
    component: () => import('../views/Guest'),
  },
];

const router = new VueRouter({
  base: '/cycxdh/',
  routes,
});

export default router;
