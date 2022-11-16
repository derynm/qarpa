export const state = () => ({
  pageTitle: '',
  timestamp: '',
  taskAmount: {},
  employee: []
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
  setEmployee (state, value) {
    state.employee = value
  }
}

export const actions = {
  getTaskAmount (ctx) {
    return this.$axios
      .$get('employee/management_works/amount')
      .then(response => ctx.commit('setTaskAmount', response))
  },
  getEmployee (ctx) {
    return this.$axios
      .$get('users/get_all')
      .then(response => ctx.commit('setEmployee', response))
  }
}
