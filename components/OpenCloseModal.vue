<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal text-center bg-white h-[150px] w-[500px] p-10 my-auto rounded-md"
    >
      <div class="modal-text pb-2">
        <p class="font-semibold">
          {{ text.content }}
        </p>
      </div>
      <div class="modal-button">
        <button @click="$emit('decline')">
          {{ text.btn1 }}
        </button>
        <button @click="$emit('accept')">
          {{ text.btn2 }}
        </button>
        <!-- <ButtonComponent text-fill="Batal" />
        <ButtonComponent text-fill="Buka" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   emits: ['close-modal']
  props: {
    text: Object
  }
}
</script>

<style></style>
