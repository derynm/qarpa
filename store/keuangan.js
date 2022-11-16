export const state = () => ({
  dataKeuangan: {}
})

export const mutations = {
  setDataKeuangan (state, value) {
    state.dataKeuangan = value
  }
}

export const actions = {
  getDataKeuanganDefault (ctx, { date, id }) {
    return this.$axios
      .$get(`company/finance?date=${date}&branch_id=${id}`)
      .then((response) => {
        ctx.commit('setDataKeuangan', response.data)
      })
  }
}
