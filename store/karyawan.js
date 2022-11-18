export const state = () => ({
  dataEmployee: [],
  isLoading: false
})

export const mutations = {
  setDataEmployee (state, value) {
    state.dataEmployee = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
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
    return this.$axios.$post('users/create', {
      user: {
        name: employee.nama,
        email: employee.email,
        password: employee.password,
        branch_id: employee.cabang
      }
    })
  }
}
