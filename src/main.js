import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Menu,
  MenuItem,
  Row,
  Col,
  Image,
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Button,
  Pagination,
  Link,
  Calendar,
  Autocomplete
} from 'element-ui';
import { link } from 'fs';
// import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false;

// register all components
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Card);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Link);
Vue.use(Calendar);
Vue.use(Autocomplete);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
