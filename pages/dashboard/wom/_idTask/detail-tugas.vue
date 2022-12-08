<template>
  <div>
    <div class="flex justify-center">
      <img src="@/assets/img/Filing system-rafiki 1.png" alt="detail-image">
    </div>
    <div class="rounded-3xl border-t-2 px-3">
      <h3 class="font-semibold text-lg text-center my-4">
        Detail Tugas
      </h3>

      <div class="flex flex-col">
        <div class="mb-3">
          <h4 class="font-semibold">
            Tugas
          </h4>
          <p>{{ detailTask.task }}</p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Deskripsi
          </h4>
          <p>
            {{ detailTask.description }}
          </p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Durasi Mulai
          </h4>
          <p>{{ detailTask.start_at }}</p>
        </div>
        <div class="mb-3">
          <h4 class="font-semibold">
            Durasi Berakhir
          </h4>
          <p>{{ detailTask.end_at }}</p>
        </div>
      </div>
      <div class="flex my-3">
        <button-global
          color="bg-warm"
          padding="py-1 px-4"
          text="Tandai Selesai"
          class="mx-auto"
          @click="taskDone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  async fetch ({ store, params }) {
    await store.dispatch('wom/getDetailTask', params.idTask)
  },
  computed: {
    ...mapState('wom', ['detailTask'])
  },
  methods: {
    taskDone () {
      this.$store.dispatch('wom/updateTaskDone', this.detailTask.id)
      this.$router.replace('/dashboard/wom')
    }
  }
}
</script>

<style></style>
