import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comName: 'user'
  },
  mutations: {
    changRe (state) {
      state.comName = 're'
      console.log(111 + state.comName)
    },
    changUser (state) {
      state.comName = 'user'
    }
  },
  actions: {
  },
  modules: {
  }
})
