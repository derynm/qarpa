<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <h1 class="text-xl font-bold my-7">
        {{ textModal }}
      </h1>
      <button-global
        padding="py-2 px-2"
        color="bg-warm"
        text="Oke"
        @click="$emit('closeModal')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textModal: { type: String, default: null },
    textButton: { type: String, default: null }
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
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-xs w-full p-6 mx-2;
}
</style>
