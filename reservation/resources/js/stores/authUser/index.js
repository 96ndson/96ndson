const state = {
  user: null,
  token: ''
}

const getters = {
  getUser(state) {
    return state.user
  },

  getUserName(state) {
    return state.user.name.toLowerCase();
  },

  getToken(state) {
    return state.token
  }
}



const actions = {
  actionSetToken({commit}, payload) {
    commit('setToken', payload)
  },

  actionSetUser({commit}, payload) {
    commit('setUser', payload)
  }
}

const mutations = {
  setToken(state, data) {
    state.token = data
  },

  setUser(state, data) {
    state.user = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
