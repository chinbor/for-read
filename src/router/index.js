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
    components: {
      notbackstage: Home 
    }
  },
  {
    path: '/page/:page',
    components: {
      notbackstage: Home 
    }
  },
  {
    path: '/archives',
    components: {
      notbackstage: Archives
    }
  },
  {
    path: '/categories',
    components: {
      notbackstage: Categories
    }
  },
  {
    path: '/tags',
    components: {
      notbackstage: Tags
    }
  },
  {
    path: '/about',
    components: {
      notbackstage: About
    }
  },
  {
    path: '/backstage',
    components: {
      backstage: Backstage
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router
