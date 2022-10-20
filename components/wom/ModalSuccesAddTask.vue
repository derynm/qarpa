<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <h1 class="text-2xl font-bold mb-4">
        Tugas berhasil dibuat
      </h1>
      <SuccesAddTask class="mx-auto" />
      <p class="my-4">
        Silahkan cek bagian task dan mulai pengerjaan
      </p>
      <button-component class="w-full" text-fill="Selesai" @clicked="$emit('closeModal')" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
import SuccesAddTask from '../icons/icons-wom/succesAddTask.vue'
export default {
  components: { ButtonComponent, SuccesAddTask },
  emits: ['closeModal']
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full p-3 mx-2;
}
</style>
