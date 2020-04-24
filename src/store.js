import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    walkingData: 0
  },
  mutations: {
    walkingData (state, data) {
      state.walkingData = data
    }
  },
  actions: {

  }
})
