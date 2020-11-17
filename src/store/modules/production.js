import axios from 'axios'
const state = () => ({
  products: []
})
const getters = {}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  },
  addProduction (state, payload) {
    state.products.push(payload)
  },
  removeProduction (state, payload) {
    const itemIndex = state.production.findIndex(
      item => (item.id = payload.id)
    )
    state.production.splice(itemIndex, 1)
  }
}
const actions = {
  async getProdcutsAction ({ commit }) {
    const result = await axios.get('http://127.0.0.1:3000/products')
    commit('setProducts', result.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
