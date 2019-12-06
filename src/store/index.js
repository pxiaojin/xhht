import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../utils/storage'

Vue.use(Vuex)

// 存储到localStorage的名称 在登陆请求时存入vuex 访问页面时把state挂载到computed属性中 根据state判断是否显示对应的功能
let user_key = 'USER_KEY'
let permissions_key = 'USER_PREMISSIONS'

export default new Vuex.Store({
  state: {
    token: '',
    permissions: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      storage.set(user_key, token)
    },
    getToken(state) {
      storage.get(user_key)
    },
    delToken(state) {
      state.token = ''
      storage.remove(user_key)
    },
    setPremissions(state, permissions) {
      state.permissions = permissions
      storage.set(permissions_key, permissions)
    },
    getPremission(state) {
      storage.get(permissions_key)
    },
    clearPremissions(state) {
      state.permissions = {}
      storage.remove(permissions_key)
    }
  },
  actions: {
  },
  modules: {
  }
})
