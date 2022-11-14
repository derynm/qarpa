export const state = () => ({
  listCuti: {},
  isLoading: false,
  employeeCuti: {}
})

export const mutations = {
  setListCuti (state, value) {
    state.listCuti = value
  },
  setEmployeeCuti (state, value) {
    state.employeeCuti = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  }
}

export const actions = {
  getListCuti ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('leave_managements').then((response) => {
      commit('setListCuti', response.data)
      commit('setIsLoading', false)
    })
  },
  setApprove (ctx, ele) {
    return this.$axios.$put(
      `leave_managements/actions?id=${ele}&status=disetujui`
    )
  },
  setReject (ctx, ele) {
    return this.$axios.$put(
      `leave_managements/actions?id=${ele}&status=ditolak`
    )
  },
  getEmployeeCuti ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('employee/leave_managements').then((response) => {
      commit('setEmployeeCuti', response.data)
      commit('setIsLoading', false)
    })
  },
  postNewCuti (ctx, cuti) {
    return this.$axios.$post('leave_managements', {
      leave_management: {
        title: cuti.jenisIzin,
        notes: cuti.catatan,
        start_at: cuti.tglMulai,
        end_at: cuti.tglBerakhir
      }
    })
  }
}
