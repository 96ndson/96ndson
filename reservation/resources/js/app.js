// require('./bootstrap');

window.Vue = require('vue').default;
import App from '@/components/App';
import router from '@/routers/index';
import '@/plugins';
import '@/validator';
import '@/assets/css/app.css'

new Vue({
  router,
  render: (h)=> h(App),
}).$mount('#app');
