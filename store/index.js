export const state = () => ({
  pageTitle: '',
  timestamp: '',
  taskAmount: {},
  isLoading: false,
  branchAddress: null,
  summaryOwner: {}
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
  setBranchAddress (state, value) {
    state.branchAddress = value
  },
  setSummaryOwner (state, value) {
    state.summaryOwner = value
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
  getAddressBrach (ctx, id) {
    return this.$axios
      .$get(`branches/${id}`)
      .then(response => ctx.commit('setBranchAddress', response.data))
      .catch(err => console.log(err))
  },
  getSummaryOwner ({ commit }) {
    commit('setIsLoading', true)
    return this.$axios.$get('company/expenses_incomes').then((response) => {
      commit('setSummaryOwner', response.data)
      commit('setIsLoading', false)
    })
  }
}
