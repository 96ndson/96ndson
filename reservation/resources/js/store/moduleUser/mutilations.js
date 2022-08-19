import Vue from "vue"
export default {
  SET_USER_INFO(state, user) {
    Vue.set(state.users, user.id, user)
  },
  SET_LOGIN_INFO(state, data) {
    localStorage.setItem('ACCESS_TOKEN', data.access_token)
    state.ACCESS_TOKEN = data.access_token;
    state.currenUser = data.user
  },
  SET_LOGOUT(state){
    state.currenUser = null;
    state.ACCESS_TOKEN = '';
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
