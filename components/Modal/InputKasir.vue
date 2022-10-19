<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal bg-white h-[450px] w-[300px] md:w-[50%] p-10 my-auto rounded-md"
    >
      <div class="modal-text pb-2">
        <p class="font-bold text-center">
          Modal Kasir
        </p>
        <form>
          <div class="nominal py-4">
            <p class="pb-1">
              Nominal
            </p>
            <input
              class="border-2 border-black rounded-md w-[100%]"
              type="text"
            >
          </div>
          <div class="catatan py-4">
            <p class="pb-1">
              Catatan
            </p>
            <textarea
              class="border-2 border-black rounded-md w-[100%]"
              rows="5"
            />
          </div>
        </form>
      </div>
      <div class="modal-button text-center">
        <nuxt-link :to="`pos/${id}`">
          <ButtonComponent text-fill="Selesai" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   emits: ['close-modal']
  props: {
    id: String
  }
}
</script>

<style></style>
