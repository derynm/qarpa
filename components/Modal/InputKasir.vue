<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal bg-white h-[400px] w-[90%] md:w-[500px] p-4 my-auto rounded-md"
    >
      <div class="modal-text">
        <p class="font-bold text-center pb-4 text-xl">
          Modal Kasir
        </p>
        <form @submit.prevent="">
          <div class="nominal">
            <InputFieldBasicInput
              v-model="modalKasir.nominal"
              label="Nominal"
              placeholder="Masukkan nominal kasir..."
            />
          </div>
          <div class="catatan">
            <InputFieldTextareaInput
              v-model="modalKasir.catatan"
              label="Catatan"
              placeholder="Masukkan catatan disini..."
              :row="5"
            />
          </div>
          <div class="modal-button flex text-center pt-2 justify-center gap-5">
            <div class="w-full">
              <ButtonComponent
                :outlined="true"
                class="w-full p-2"
                text-fill="Tidak"
                @clicked="$emit('decline')"
              />
            </div>
            <nuxt-link class="w-full" :to="`pos/${id}`">
              <ButtonComponent class="w-full p-2" text-fill="Yakin" />
            </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  //   emits: ['close-modal']
  data () {
    return {
      modalKasir: {
        nominal: '',
        catatan: ''
      }
    }
  }
}
</script>

<style></style>
