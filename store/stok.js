export const state = () => ({
  stokBarang: [],
  isLoading: false,
  stokByBranch: [],
  productById: {}
})

export const mutations = {
  setStokBarang (state, value) {
    state.stokBarang = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  },
  setStokByBranch (state, value) {
    state.stokByBranch = value
  },
  setProductById (state, value) {
    state.productById = value
  }
}

export const actions = {
  getStokBarang ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('inventory/products').then((response) => {
      commit('setStokBarang', response)
      commit('setIsLoading', false)
    })
  },
  postNewStok (ctx, stokBarang) {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const data = new FormData()
    data.append('name', stokBarang.nama)
    data.append('price', stokBarang.harga)
    data.append('qty', stokBarang.stok)
    data.append('category_id', stokBarang.tipe)
    data.append('branch_id', stokBarang.cabangId)
    return this.$axios.$post('inventory/products', data, { headers })
  },
  deleteStok (ctx, id) {
    return this.$axios.$delete(`inventory/products/${id}`)
  },
  getStokByBranch (ctx, id) {
    ctx.commit('setIsLoading', true)
    return this.$axios
      .$get(`inventory/products/onbranch/${id}`)
      .then((response) => {
        ctx.commit('setStokByBranch', response.data)
        ctx.commit('setIsLoading', false)
      })
  },
  getProductById (ctx, id) {
    ctx.commit('setIsLoading', true)
    return this.$axios.$get(`inventory/products/${id}`).then((response) => {
      ctx.commit('setProductById', response.data)
      ctx.commit('setIsLoading', false)
    })
  }
}
