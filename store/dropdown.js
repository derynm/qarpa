export const state = () => ({
  employees: []
})

export const mutations = {
  setEmployee (state, value) {
    state.employees = value
  }
}

export const actions = {
  getEmployeeDropdown (ctx) {
    return this.$axios
      .$get('users/dropdown')
      .then(response => ctx.commit('setEmployee', response.data))
  }
}
