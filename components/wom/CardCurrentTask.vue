<template>
  <div
    class="flex flex-col shadow-md rounded-md border-2 p-3 mr-3 shrink-0 min-w-[280px] snap-center"
  >
    <div class="flex justify-between">
      <h3 class="font-semibold">
        {{ item.name }}
      </h3>
      <h3 class="font-semibold text-warm cursor-pointer" @click="toDetailTask">
        Lihat Detail
      </h3>
    </div>
    <div class="flex justify-between my-3">
      <p class="text-sm">
        {{ item.task }}
      </p>
      <p class="text-xs">
        {{ item.end_at }}
      </p>
    </div>
    <button-global
      text="Tandai Selesai"
      color="bg-warm"
      padding="p-3"
      class="max-w-[240px] mx-auto"
      @click="taskDone"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => ({}) }
  },
  methods: {
    taskDone () {
      this.$store.dispatch('wom/updateTaskDone', this.item.id)
    },
    toDetailTask () {
      this.$router.replace(`/dashboard/wom/${this.item.id}/detail-tugas`)
    }
  }
}
</script>

<style></style>
