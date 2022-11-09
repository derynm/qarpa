export const state = () => ({
  allTask: '',
  task: [],
  taskEmployee: {}
})

export const mutations = {
  setAllTask (state, value) {
    state.allTask = value
  }
}

export const actions = {
  getAllTask ({ commit }) {
    console.log('tes getAllTask')
    try {
      this.$axios.get('management_works').then((response) => {
        commit('setAllTask', response.message)
        console.log(response.message)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
