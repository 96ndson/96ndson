const state = {
  user: null,
  token: ''
}

const getters = {
  getUser(state) {
    return state.user || JSON.parse(localStorage.getItem('user'))
  },

  getToken(state) {
    return state.token || localStorage.getItem('token')
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
    if (data) {
      localStorage.setItem('token', data)
    } else {
      localStorage.removeItem('token')
    }
  },

  setUser(state, data) {
    state.user = data
    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    } else {
      localStorage.removeItem('user')
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
