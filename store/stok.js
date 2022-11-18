export const state = () => ({
  stokBarang: [],
  isLoading: false
})

export const mutations = {
  setStokBarang (state, value) {
    state.stokBarang = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  }
}

export const actions = {
  getStokBarang ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('inventory/products/suplai').then((response) => {
      commit('setStokBarang', response.data)
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
  }
}
