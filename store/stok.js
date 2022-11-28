export const state = () => ({
  stokBarang: [],
  isLoading: false,
  stokByBranch: []
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
    data.append('quantity', stokBarang.stok)
    data.append('category', stokBarang.tipe)
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
  }
}
