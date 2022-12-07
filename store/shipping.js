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
  },
  postShippingToBranch (ctx, data) {
    ctx.commit('setIsloading', true)
    return this.$axios
      .$post('shipping/branch', data)
      .then(() => ctx.commit('setIsloading', false))
      .catch(err => console.log(err.response))
  },
  postReciveItem (ctx, data) {
    const headers = { 'Content-Type': 'multipart/form-data' }
    const dataBarang = new FormData()
    dataBarang.append('supplier_id', data.supplier)
    dataBarang.append('name', data.namaProduk)
    dataBarang.append('qty', data.jumlah)
    dataBarang.append('quantity_type', data.satuan)
    dataBarang.append('category_id', data.kategori)
    dataBarang.append('purchase_price', data.totalHarga)
    dataBarang.append('selling_price', data.hargaBarang)
    dataBarang.append('branch_id', data.cabang)
    return this.$axios.$post('inventory/products', dataBarang, { headers })
  }
}
