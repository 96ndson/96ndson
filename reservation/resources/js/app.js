require('./bootstrap');

window.Vue = require('vue').default;
import App from '@/components/App'
import router from '@/routers/index'
import BootstrapVue from 'bootstrap-vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

library.add(far, fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
