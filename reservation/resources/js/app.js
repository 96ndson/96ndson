// require('./bootstrap');

window.Vue = require('vue').default;
import App from '@/components/App';
import router from '@/routers/index';
import store from "@/stores";
import '@/plugins';
import '@/assets/css/home.css';

import { ApiService } from '@/services';


ApiService.init()
ApiService.setHeader()

new Vue({
  router,
  store,
  render: (h)=> h(App),
}).$mount('#app');
