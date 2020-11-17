import Vue from 'vue'
import Vuex from 'vuex'

import productions from './modules/production'
import carts from './modules/cart'
Vue.use(Vuex)

// 给vuex注册插件， 订阅mutation，当card 的 mutation被操作时，存到localstoreage中。像一个过滤器的功能
const myPlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('carts/')) {
      window.localStorage.setItem('cart-prodcuts', JSON.stringify(state.carts.cartProducts))
    }
  })
}
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    productions,
    carts
  },
  plugins: [
    myPlugin
  ]
})
