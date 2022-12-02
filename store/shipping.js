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
    data.append('supplier_id', data.supplier)
    data.append('name', data.namaProduk)
    data.append('qty', data.jumlah)
    data.append('quantity_type', data.satuan)
    data.append('category_id', data.kategori)
    data.append('purchase_price', data.totalHarga)
    data.append('selling_price', data.hargaBarang)
    data.append('condition', data.kondisi)
    data.append('branch_id', data.cabang)
    return this.$axios.$post('inventory/products', dataBarang, { headers })
  }
}
