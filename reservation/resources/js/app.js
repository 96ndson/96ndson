// require('./bootstrap');

window.Vue = require('vue').default;
import App from '@/components/App';
import router from '@/routers/index';
import store from "@/store";
import '@/plugins';
import '@/assets/css/home.css';

new Vue({
  router,
  store,
  render: (h)=> h(App),
}).$mount('#app');
