import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import profile from './modules/profile'
import notification from './modules/notification'
import category from './modules/category'
import courses from './modules/courses'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    setLoading(state,payload){
      state.loading = payload
    }
  },
  actions: {
  },
  getters:{
    loading: (s) => s.loading
  },
  modules: {
    notification,
    auth,
    profile,
    category,
    courses,
    wishlist
  }
})
