import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由懒加载（优化性能）
const Home = () => import('views/home/Home');
const About = () => import('views/about/About');
const Backstage = () => import('views/backend-system/Backstage');
const Tags = () => import('views/tags/Tags');
const Archives = () => import('views/archives/Archives');
const Categories = () => import('views/categories/Categories');


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/archives',
    component: Archives
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/tags',
    component: Tags
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/backstage',
    component: Backstage
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
