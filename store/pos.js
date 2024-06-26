export const state = () => ({
  dataCabang: [],
  isLoading: false,
  cabangById: {},
  dataCustomer: [],
  dataBank: [],
  dataProduct: [],
  cabangEmployee: []
})

export const mutations = {
  setDataCabang (state, value) {
    state.dataCabang = value
  },
  setCabangEmployee (state, value) {
    state.cabangEmployee = value
  },
  setDataCustomer (state, value) {
    state.dataCustomer = value
  },
  setDataBank (state, value) {
    state.dataBank = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  },
  setCabangById (state, value) {
    state.cabangById = value
  },
  setDataProduct (state, value) {
    state.dataProduct = value
  }
}

export const getters = {
  productReady (state) {
    return state.dataProduct.filter(e => e.qty !== 0)
  }
}

export const actions = {
  // API BRANCH
  getDataCabang ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('owner/branches').then((response) => {
      commit('setDataCabang', response.data)
      commit('setIsLoading', false)
    })
  },
  getCabangEmployee ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('employee/branches').then((response) => {
      commit('setCabangEmployee', response.data)
      commit('setIsLoading', false)
    })
  },
  postNewCabang (ctx, dataCabang) {
    return this.$axios.$post('branches', {
      branch: {
        name: dataCabang.nama,
        full_address: dataCabang.alamat,
        phone: dataCabang.noHp
      }
    })
  },
  getCabangById (ctx, id) {
    return this.$axios.$get(`branches/${id}`).then((response) => {
      ctx.commit('setCabangById', response.data)
    })
  },
  openBranch (ctx, { modal, id }) {
    return this.$axios.$post(`branches/pos/open?branch_id=${id}`, {
      pos: {
        fund: modal.nominal,
        notes: modal.catatan
      }
    })
  },

  // API CUSTOMER
  getDataCustomer ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('customers').then((response) => {
      commit('setDataCustomer', response.data)
      commit('setIsLoading', false)
    })
  },
  postNewCustomer (ctx, customer) {
    return this.$axios.$post('customers', {
      customer: {
        name: customer.nama,
        phone: customer.noHp,
        email: customer.email,
        full_address: customer.alamat
      }
    })
  },
  deleteCustomer (ctx, customerId) {
    ctx.commit('setIsLoading', true)
    return this.$axios.$delete(`customers/${customerId}`).then(() => {
      ctx.dispatch('getDataCustomer')
      ctx.commit('setIsLoading', false)
    })
  },

  // API BANK
  getDataBank ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('bank_accounts').then((response) => {
      commit('setDataBank', response.data)
      commit('setIsLoading', false)
    })
  },
  postNewBank (ctx, bank) {
    return this.$axios.$post('bank_accounts', {
      bank_account: {
        username: bank.nama,
        bank: bank.bank,
        account_number: bank.noRekening
      }
    })
  },

  // API PRODUCT
  getDataProduct (ctx, id) {
    ctx.commit('setIsLoading', true)
    return this.$axios
      .$get(`inventory/products/onbranch/${id}`)
      .then((reponse) => {
        ctx.commit('setDataProduct', reponse.data)
        ctx.commit('setIsLoading', false)
      })
  },

  // API ORDER
  postNewOrder (ctx, order) {
    return this.$axios.$post('orders', {
      order: {
        customer_id: order.customer_id,
        pos_id: order.pos_id,
        discount: order.discount,
        payment: order.payment,
        items: order.items
      }
    })
  }
}
