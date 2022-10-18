<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <img
        class="object-contain max-h-60"
        src="@/assets/img/attendance.png"
        alt="attendance"
      >
      <h1 class="text-4xl font-semibold my-10">
        {{ textModal }}
      </h1>
      <ButtonComponent :text-fill="textButton" @click="$emit('closeModal')"/>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
export default {
  components: { ButtonComponent },
  emits: ['closeModal'],
  props: {
    textModal: { type: String, default: null },
    textButton: { type: String, default: null }
  }
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full p-9 mx-2;
}
</style>
