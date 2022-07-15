require('./bootstrap');

window.Vue = require('vue').default;

import '@/plugins'
import '@/assets/css/app.css'

import App from '@/components/App'
import router from '@/routers/index'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')