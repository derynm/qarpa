<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal text-center bg-white h-[150px] w-[80%] md:w-[500px] p-2 my-auto rounded-md flex flex-col justify-center gap-4"
    >
      <div class="modal-text">
        <p class="font-bold text-lg">
          {{ text.content }}
        </p>
      </div>
      <div class="modal-button flex justify-around md:justify-center md:gap-6">
        <ButtonComponent
          class="py-2 px-6"
          :outlined="true"
          :text-fill="text.btn1"
          @clicked="$emit('decline')"
        />
        <ButtonComponent
          class="py-2 px-6"
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
