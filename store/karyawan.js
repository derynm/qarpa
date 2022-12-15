export const state = () => ({
  dataEmployee: [],
  isLoading: false,
  errorStatus: false,
  errorMsg: ''
})

export const mutations = {
  setDataEmployee (state, value) {
    state.dataEmployee = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  },
  setErrorStatus (state, value) {
    state.errorStatus = value
  },
  setErrorMsg (state, value) {
    state.errorMsg = value
  }
}

export const actions = {
  getDataEmployee ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('users/get_all').then((response) => {
      commit('setDataEmployee', response.data)
      commit('setIsLoading', false)
    })
  },
  postNewEmployee (ctx, employee) {
    this.$axios
      .$post('users/create', {
        user: {
          name: employee.nama,
          email: employee.email,
          password: employee.password,
          branch_id: employee.cabang
        }
      })
      .then(() => this.$router.replace('/dashboard/karyawan'))
      .catch((error) => {
        ctx.commit('setErrorStatus', true)
        ctx.commit('setErrorMsg', error.response.data.message)
      })
  },
  deleteEmployee (ctx, id) {
    ctx.commit('setIsLoading', true)
    return this.$axios.$delete(`users/delete/${id}`).then(() => {
      ctx.dispatch('getDataEmployee')
      ctx.commit('setIsLoading', false)
    })
  }
}
