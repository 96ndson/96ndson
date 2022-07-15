window.Vue = require('vue').default;
import App from '@/components/App';
import router from '@/routers/index';
import '@/plugins';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

new Vue({
  router,
  render: (h)=> h(App),
}).$mount('#app');
