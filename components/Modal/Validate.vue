<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal text-center bg-white h-[190px] md:h-[150px] w-[80%] md:w-[500px] p-8 my-auto rounded-md"
    >
      <div class="modal-text pb-2">
        <p class="font-semibold text-xl">
          {{ text.content }}
        </p>
      </div>
      <div class="modal-button flex gap-4 justify-center px-1">
        <ButtonComponent
          class="w-full"
          :text-fill="text.btn1"
          @clicked="$emit('decline')"
        />
        <ButtonComponent
          class="w-full"
          :text-fill="text.btn2"
          @clicked="$emit('accept')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: Object
  },
  emits: ['accept, decline']
}
</script>

<style></style>
