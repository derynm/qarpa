export const state = () => ({
  pageTitle: '',
  timestamp: '',
  taskAmount: {},
  isLoading: false,
  branchDropdown: []
})

export const mutations = {
  setPageTitle (state, title) {
    state.pageTitle = title
  },
  setTimestamp (state) {
    const today = new Date()
    const month = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ][today.getMonth()]
    const date = today.getDate() + ' ' + month + ' ' + today.getFullYear()
    const dateTime = date
    state.timestamp = dateTime
  },
  setTaskAmount (state, value) {
    state.taskAmount = value
  },
  setIsLoading (state, value) {
    state.isLoading = value
  },
  setBranchDropdown (state, value) {
    state.branchDropdown = value
  }
}

export const actions = {
  getTaskAmount ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios
      .$get('employee/management_works/amount')
      .then((response) => {
        commit('setTaskAmount', response.data)
        commit('setIsLoading', false)
      })
  },
  getBranchDropdown ({ commit }) {
    return this.$axios
      .$get('branches')
      .then(response => commit('setBranchDropdown', response.data))
  }
}
