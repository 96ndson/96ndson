import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/stores'
import {ACTION_SET_ERROR, ACTION_SET_LOADING, ACTION_FINISH_LOADING} from '@/stores/common/actions'
import {
  NO_INTERNET,
  UNAUTHENTICATED,
  FORBIDDEN,
  LOGIN_FAILED,
  SERVER_ERROR
} from '@/helpers/message'
import {CLEAR_DATA_LOGOUT} from '@/stores/authUser/actions'
let subscribers = []

const ApiService = {
  init() {
    const service = this
    Vue.use(VueAxios, axios)
    //Vue.axios.defaults.baseURL = ''
    // intercept every request
    Vue.axios.interceptors.request.use(
      (request) => {
        const accessToken = store.getters.accessToken || localStorage.getItem('accessToken');
        if (accessToken) {
          request.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }
        if (request.setLoading) {
          store.dispatch(ACTION_SET_LOADING)
        }
        return request
      },
      (error) => {
        const {response} = error;
        if (response.config.setLoading) {
          store.dispatch(ACTION_FINISH_LOADING)
        }
        // Do something with request error
        return Promise.reject(response)
      }
    )
    // intercept every response
    Vue.axios.interceptors.response.use(
      (response) => {
        const {config} = response;
        if (config.setLoading) {
          store.dispatch(ACTION_FINISH_LOADING)
        }
        return response
      },
      (error) => {
        const {response, config} = error;
        if (config.setLoading) {
          store.dispatch(ACTION_FINISH_LOADING)
        }
        // check refresh token
        if (response && response.status == 401) {
          if (config.url.includes('/user')) {
            store.dispatch(CLEAR_DATA_LOGOUT)
          } else if (config.url.includes('/instructor')) {
            store.dispatch(CLEAR_DATA_LOGOUT_INSTRUCTOR)
          } else if (config.url.includes('/admin')) {
            store.dispatch(CLEAR_DATA_LOGOUT_ADMIN)
          } else {

          }
          //store.dispatch(ACTION_GO_LOGIN)
          return this.retryOriginalRequest(config);
        }

        // check if config errorHandler is on
        if (config.globalErrorHandler.on) {
          service.handleError(response, config.globalErrorHandler.exclude)
        }
        return Promise.reject(response)
      })
  },
  setHeader() {
    Vue.axios.defaults.withCredentials = false
    Vue.axios.defaults.headers.common[
      'Content-Type'
      ] = 'application/json'
    Vue.axios.defaults.headers.common[
      'Accept'
      ] = 'application/json'
    Vue.axios.defaults.setLoading = true;
    Vue.axios.defaults.globalErrorHandler = {
      on: true,
      exclude: [],
    };
  },
  setHeaderImage(type) {
    Vue.axios.defaults.headers.common[
      'Content-Type'
      ] = type
  },
  onAccessTokenFetched(accessToken) {
    subscribers.forEach(function (callback) {
      callback(accessToken);
    })
    this.clearSubscriber();
  },
  retryOriginalRequest(originalRequest) {
    return new Promise((resolve) => {
      this.addSubscriber(accessToken => {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        resolve(axios(originalRequest))
      })
    })
  },
  addSubscriber(callback) {
    subscribers.push(callback)
  },
  clearSubscriber() {
    subscribers = [];
  },
  setResponseType(type) {
    Vue.axios.defaults.responseType = type
  },
  get(resource, config = {}) {
    return Vue.axios.get(resource, config)
  },
  post(resource, params, config = {}) {
    return Vue.axios.post(`${resource}`, params, config)
  },
  update(resource, params, config = {}) {
    return Vue.axios.put(resource, params, config)
  },
  updateBulk(resource, params, config = {}) {
    return Vue.axios.put(resource, params, config)
  },
  delete(resource, config = {}) {
    return Vue.axios.delete(resource, config)
  },
  customRequest(config) {
    return Vue.axios(config)
  },
  handleError(response, ignore = []) {
    if (ignore.length > 0 && ignore.includes(response.status)) {
      return response
    }
    let error = null
    if (!navigator.onLine || !response) {
      error = new Error(NO_INTERNET)
    } else {
      switch (response.status) {
        case 400:
          error = new Error(response.data.message)
          break;

        case 401:
          if (store.getters.typeLogin == 'user') {
            store.dispatch(CLEAR_DATA_LOGOUT)
          } else if (store.getters.typeLogin == 'admin') {
            store.dispatch(CLEAR_DATA_LOGOUT_ADMIN)
          } else if (store.getters.typeLogin == 'instructor') {
            store.dispatch(CLEAR_DATA_LOGOUT_INSTRUCTOR)
          } else {

          }
          break;

        case 403:
          error = new Error(FORBIDDEN)
          break;

        case 404:
          error = new Error(response.data.message)
          break;

        case 422:
          for (let er in response.data.errors) {
            if (response.data.errors[er][0]) {
              Vue.$toast.error(response.data.errors[er][0], {enableHtml: true});
            } else {
              Vue.$toast.error(response.data.errors[er], {enableHtml: true});
            }
            break;
          }
          break;

        default:
          error = new Error(SERVER_ERROR)
          break;
      }
    }
    store.dispatch(ACTION_SET_ERROR, error)
  }
}

export default ApiService
