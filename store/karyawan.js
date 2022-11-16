export const state = () => ({
  dataEmployee: [],
  branchDropdown: [],
  isLoading: false
})

export const mutations = {
  setDataEmployee (state, value) {
    state.dataEmployee = value
  },
  setBranchDropdown (state, value) {
    state.branchDropdown = value
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
  },
  getBranchDropdown ({ commit }) {
    return this.$axios
      .$get('branches')
      .then(response => commit('setBranchDropdown', response.data))
  }
}
