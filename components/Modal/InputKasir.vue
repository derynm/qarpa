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
        <form @submit.prevent="handleSubmit">
          <div class="nominal">
            <InputFieldBasicInput
              v-model="modalKasir.nominal"
              type="number"
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
              <ButtonGlobal
                type="button"
                class="w-full"
                text="Tidak"
                :outlined="true"
                padding="py-2"
                @click="$emit('decline')"
              />
            </div>
            <!-- <nuxt-link class="w-full" :to="`pos/${id}`"> -->
            <ButtonGlobal
              type="submit"
              class="w-full"
              text="Yakin"
              padding="py-2"
              color="bg-primary"
              :disabled="isDisabled"
            />
            <!-- </nuxt-link> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, default: null }
  },
  //   emits: ['close-modal']
  data () {
    return {
      modalKasir: {
        nominal: null,
        catatan: ''
      },
      pos: '',
      isDisabled: true
    }
  },
  watch: {
    'modalKasir.nominal' () {
      this.disableButton()
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.modalKasir)
      this.$store
        .dispatch('pos/openBranch', {
          modal: this.modalKasir,
          id: this.id
        })
        .then(this.$router.push(`pos/${this.id}`))
    },
    disableButton () {
      if (this.modalKasir.nominal >= 1000) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    }
  }
}
</script>

<style></style>
