export const state = () => ({
  stokBarang: []
})

export const mutations = {
  setStokBarang (state, value) {
    state.stokBarang = value
  }
}

export const actions = {
  getStokBarang ({ commit }) {
    return this.$axios.$get('inventory/products/suplai').then((response) => {
      commit('setStokBarang', response.data)
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
  }
}
