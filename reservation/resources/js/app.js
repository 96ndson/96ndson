// require('./bootstrap');

window.Vue = require('vue').default;
import App from '@/components/App';
import router from '@/routers/index';
import '@/plugins';
import '@/assets/css/home.css';
import $ from "jquery";
global.$ = $;

new Vue({
  router,
  render: (h)=> h(App),
}).$mount('#app');
