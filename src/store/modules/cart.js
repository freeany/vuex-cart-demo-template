const state = () => ({
  cartProducts: JSON.parse(window.localStorage.getItem('cart-prodcuts')) || []
})
const getters = {
  allPrice (state) {
    // let price = 0
    // state.cartProducts.forEach(item => {
    //   price += item.totalPrice
    // })
    // return price
    return state.cartProducts.reduce((pre, item) => pre + item.totalPrice, 0)
  },
  allCount (state) {
    // let count = 0
    // state.cartProducts.forEach(item => {
    //   count += item.count
    // })
    // return count
    return state.cartProducts.reduce((pre, item) => pre + item.count, 0)
  },
  checkedPrice (state) {
    // let price = 0
    // state.cartProducts.forEach(item => {
    //   if (item.isChecked) {
    //     price += item.totalPrice
    //   }
    // })
    // return price
    return state.cartProducts.reduce((pre, item) => item.isChecked ? pre + item.totalPrice : pre, 0)
  },
  checkedCount (state) {
    // let count = 0
    // state.cartProducts.forEach(item => {
    //   if (item.isChecked) {
    //     count += item.count
    //   }
    // })
    // return count
    return state.cartProducts.reduce((pre, item) => item.isChecked ? pre + item.count : pre, 0)
  }

}
const mutations = {
  addCart (state, product) {
    const item = state.cartProducts.find(item => item.id === product.id)
    if (item) {
      item.count += 1
      item.totalPrice = product.price * item.count
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        totalPrice: product.price,
        isChecked: true
      })
    }
  },
  removeCart (state, payload) {
    const itemIndex = state.cartProducts.findIndex(item => item.id === payload.id)
    itemIndex !== -1 && state.cartProducts.splice(itemIndex, 1)
  },
  updateProductChecked (state, payload) {
    state.cartProducts = state.cartProducts.map(item => {
      if (item.id === payload.id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
  changeAllProduct (state, payload) {
    state.cartProducts.forEach(item => {
      item.isChecked = payload
    })
  },
  changeChartItemNumber (state, payload) {
    state.cartProducts = state.cartProducts.map(item => {
      if (item.id === payload.id) {
        item.totalPrice = payload.price * payload.count
      }
      return item
    })
  }
}
const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
