<template>
  <div class="flex flex-col px-3">
    <h3 class="font-semibold mb-6">
      Tugas Baru
    </h3>
    <!-- <div class="flex flex-col shadow-md rounded-md border-2 p-3">
      <div class="flex justify-between">
        <h3 class="font-semibold">
          Harry Styles
        </h3>
        <h3 class="font-semibold text-warm">
          Lihat Detail
        </h3>
      </div>
      <div class="flex justify-between my-3">
        <p class="text-sm">
          Melakukan Penjualan di pos
        </p>
        <p class="text-xs">
          10 Oktober 2022 ( 3 hari )
        </p>
      </div>
      <button-global
        text="Tandai Selesai"
        color="bg-warm"
        padding="p-3"
        class="max-w-[240px] mx-auto"
      />
    </div> -->
    <div v-if="todoTask.length !== 0" class="overflow-x-auto flex snap-x">
      <wom-card-current-task
        v-for="(value, index) in todoTask"
        :key="index"
        :item="value"
      />
    </div>
    <div v-else class="flex justify-center">
      Tidak ada tugas baru
    </div>
    <h3 class="font-semibold my-6">
      Tugas Selesai
    </h3>
    <div>
      <wom-card-task-wom
        v-for="(item, index) in taskDone"
        :key="index"
        :item="item"
      />
    </div>
    <modal-confirm-modal title="Tugas Berhasil Diselesaikan" v-if="modal" @closeModal="modalHandle" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('wom', ['taskEmployee', 'modal']),
    todoTask () {
      return this.taskEmployee.filter(value => value.status === 'todo')
    },
    taskDone () {
      return this.taskEmployee.filter(value => value.status === 'done')
    }
  },
  methods: {
    ...mapMutations('wom', ['showModal']),
    modalHandle () {
      window.location.reload()
      this.showModal(false)
    }
  }
}
</script>

<style></style>
