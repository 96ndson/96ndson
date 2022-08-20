import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/stores/common'
import authUser from '@/stores/authUser'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    authUser,
  }
})

export default store
