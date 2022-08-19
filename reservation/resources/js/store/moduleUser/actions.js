import {LoginService} from '@/services';

export default {
   async login({commit}, {password = '', email = ''}) {
    let data = {
      email: email,
      password: password
    };
    return await LoginService.login(data)
      .then(result => {
        commit('SET_USER_INFO',result.data.user);
        commit('SET_LOGIN_INFO',result.data);
        return {
          ok: true,
          error: null,
          data: result.data
        }
      })
      .catch(error => {
        return {
          ok: false,
          error: error.response
        }
      });
  },
  async checkLogin({commit, dispatch}) {
    try {
      let tokenLocal = localStorage.getItem('ACCESS_TOKEN');
      let userObj = parseJwt(tokenLocal)
      if (userObj) {
        let resultUser = await dispatch('getUserById', userObj.id)
        if (resultUser.ok) {
          let data = {
            user: resultUser.data,
            token: tokenLocal
          }
          commit('SET_LOGIN_INFO', data);
          return {
            ok: true,
            error: null
          }
        }
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message
      }
    }
  },
  async checkLogout({commit}){
    commit('SET_LOGOUT');
  },
}
