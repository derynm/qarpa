export const state = () => ({
  shippingData: [],
  isLoading: false
})

export const mutations = {
  setIsLoading (state, value) {
    state.isLoading = value
  }
}

export const actions = {
  postNewSupplier (ctx, data) {
    ctx.commit('setIsloading', true)
    return this.$axios
      .$post('suppliers', {
        supplier: {
          name: data.name,
          full_address: data.address,
          phone: data.phone,
          email: data.email
        }
      })
      .then(() => ctx.commit('setIsloading', false))
  },
  postNewCategories (ctx, data) {
    ctx.commit('setIsloading', true)
    return this.$axios
      .$post('categories', {
        category: {
          name: data.name
        }
      })
      .then(() => ctx.commit('setIsloading', false))
  }
}
