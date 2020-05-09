import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isBackstage: '/'
  },
  mutations: {
    changeNavMenu(state,name) {
      state.isBackstage = name;
    }
  }
})
