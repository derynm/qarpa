export const state = () => ({
  allTask: '',
  task: [],
  taskEmployee: [],
  detailTask: {},
  modal: false
})

export const mutations = {
  setAllTask (state, value) {
    state.allTask = value
  },
  setTaskEmployee (state, value) {
    state.taskEmployee = value
  },
  setDetailTask (state, value) {
    state.detailTask = value
  },
  showModal (state, value) {
    state.modal = value
  }
}

export const actions = {
  getAllTask (ctx) {
    return this.$axios
      .$get('management_works')
      .then(response => ctx.commit('setAllTask', response))
  },
  getTaskEmployee (ctx) {
    return this.$axios
      .$get('employee/management_works')
      .then(response => ctx.commit('setTaskEmployee', response.data))
  },
  getDetailTask (ctx, id) {
    return this.$axios
      .$get(`management_works/${id}`)
      .then(response => ctx.commit('setDetailTask', response.data))
  },
  updateTaskDone (ctx, id) {
    ctx.commit('showModal', true)
    return this.$axios.put(`employee/management_works/${id}`)
    // .then(() => ctx.commit('showModal', false))
  },
  newTask (ctx, item) {
    ctx.commit('showModal', true)
    return this.$axios
      .$post('management_works', {
        management_work: {
          task: item.tugas,
          description: item.deskripsi,
          start_at: item.durasi_mulai,
          end_at: item.durasi_akhir,
          user_id: item.karyawan
        }
      })
  }
}
