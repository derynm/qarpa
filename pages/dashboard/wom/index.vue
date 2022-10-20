<template>
  <div class="relative h-screen mx-4 md:mx-12">
    <div class="flex bg-white p-3 shadow">
      <button-component
        text-fill="Costumer"
        class="w-full"
        @clicked="isCostumer = true"
      />
      <div class="vl mx-5" />
      <button-component
        text-fill="Supplier"
        class="w-full"
        @clicked="isCostumer = false"
      />
    </div>
    <div
      class="bg-white my-4 grid grid-cols-1 md:grid-cols-2 gap-4 p-3 shadow-md"
    >
      <CardTaskWom />
      <CardTaskWom />
    </div>
    <div>
      <button-component
        class="absolute right-0 bottom-5"
        :text-fill="'Tambah Kegiatan'"
        @clicked="showModalTask"
      />
    </div>
    <ModalNewTask
      v-if="showModalNewTask"
      @closeModal="showModalTask"
      @success="showModalSucces"
    />
    <ModalSuccesAddTask v-if="addTaskSuccess" @closeModal="showModalSucces" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CardTaskWom from '~/components/wom/CardTaskWom.vue'
import ModalNewTask from '~/components/wom/ModalNewTask.vue'
import ModalSuccesAddTask from '~/components/wom/ModalSuccesAddTask.vue'
export default {
  layout: 'dashboard-pos',
  data () {
    return {
      showModalNewTask: false,
      addTaskSuccess: false
    }
  },
  created () {
    this.setPageTitle('Work Order Management')
  },
  methods: {
    showModalTask () {
      this.showModalNewTask = !this.showModalNewTask
    },
    showModalSucces () {
      this.addTaskSuccess = !this.addTaskSuccess
      this.showModalNewTask = false
    },
    ...mapMutations(['setPageTitle'])
  },
  components: { CardTaskWom, ModalNewTask, ModalSuccesAddTask }
}
</script>

<style scoped>
.vl {
  border-left: 2px solid rgb(172, 172, 172);
}
</style>
