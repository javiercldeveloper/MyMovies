import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart (state, movie) {
      state.cart.push(movie)
    },
    removeFromCart (state, movieId) {
      const index = state.cart.findIndex(stateMovie => stateMovie.id === movieId)
      state.cart.splice(index, 1)
    }
  },
  actions: {
    addToCart ({ commit }, movie) {
      commit('addToCart', movie)
    },
    removeFromCart ({ commit }, movieId) {
      commit('removeFromCart', movieId)
    }
  },
  getters: {
    cartMoviesIds: state => {
      return state.cart.map(movie => movie.id)
    }
  }
})
