export const state = () => ({
  pageTitle: '',
  timestamp: ''
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
  }
}
