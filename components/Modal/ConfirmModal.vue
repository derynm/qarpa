<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <h3 class="font-extrabold text-2xl">
        {{ title }}
      </h3>
      <p>{{ text }}</p>
      <div class="flex justify-center">
        <button-component
          class="max-w-[100px] w-full py-3 flex justify-center"
          :text-fill="textButton"
          @clicked="$emit('closeModal')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
export default {
  components: { ButtonComponent },
  props: {
    title: String,
    text: String,
    textButton: { type: String, default: 'OK' }
  },
  emits: ['closeModal']
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full h-44 p-3 mx-2;
}
</style>
