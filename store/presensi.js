export const state = () => ({
  presensiStatus: null,
  allPresensiOwner: null
})

export const mutations = {
  setPresensiStatus (state, value) {
    state.presensiStatus = value
  }
}

export const actions = {
  getPresensiStatus (ctx, id) {
    return this.$axios
      .$get(`attendances/show/${id}`)
      .then(response => ctx.commit('setPresensiStatus', response.data))
  }
}
