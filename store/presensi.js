export const state = () => ({
  presensiStatus: null,
  allPresensiEmployee: null,
  allPresensiOwner: null
})

export const mutations = {
  setPresensiStatus (state, value) {
    state.presensiStatus = value
  },
  setAllPresensiEmployee (state, value) {
    state.allPresensiEmployee = value
  },
  setAllPresensiOwner (state, value) {
    state.allPresensiOwner = value
  }
}

export const actions = {
  getPresensiStatus (ctx) {
    return this.$axios
      .$get('attendances/show')
      .then(response => ctx.commit('setPresensiStatus', response))
      .catch((err) => {
        if (err.response.data.message === 'Attendance not found') {
          ctx.commit('setPresensiStatus', err.response.data)
        }
      })
  },
  getAllPresensiEmployee (ctx) {
    return this.$axios
      .$get('employee/attendances/history')
      .then(response => ctx.commit('setAllPresensiEmployee', response.data))
      .catch(err => console.log(err.response))
  },
  getAllPresensiOwner (ctx) {
    return this.$axios
      .$get('attendances/history')
      .then(response => ctx.commit('setAllPresensiOwner', response.data))
      .catch(err => console.log(err.response))
  }
}
