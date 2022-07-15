require('./bootstrap');

window.Vue = require('vue').default;

import '@/plugins'
import '../css/app.css'

import App from '@/components/App'
import router from '@/routers/index'
import store from '@/store'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')