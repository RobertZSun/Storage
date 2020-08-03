import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum: state => {
      return 'current Num is : [' + state.count + ']'
    }
  },
  mutations: {
    addOneLater (state) {
      state.count++
    },
    addNLater (state, step) {
      state.count += step
    },
    add (state) {
      state.count += 1
    },
    min (state) {
      state.count -= 1
    },
    addN (state, step) {
      state.count += step
    },
    minN (state, step) {
      state.count -= step
    }
  },
  actions: {
    addOneAsync (context) {
      setTimeout(() => {
        context.commit('addOneLater')
      }, 1000)
    },
    addSixLater (context, step) {
      setTimeout(() => {
        context.commit('addNLater', step)
      }, 1000)
    },
    minusOneLater (context) {
      setTimeout(() => {
        context.commit('min')
      }, 1000)
    },
    minusNLater (context, step) {
      setTimeout(() => {
        context.commit('minN', step)
      }, 1000)
    }
  },
  modules: {}
})
