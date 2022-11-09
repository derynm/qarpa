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
      pos: ''
    }
  },
  methods: {
    handleSubmit () {
      // console.log(this.modalKasir)
      // console.log(this.id)
      this.$axios
        .$post(`branches/pos/open?branch_id=${this.id}`, {
          pos: {
            fund: this.modalKasir.nominal,
            notes: this.modalKasir.catatan
          }
        })
        .then((response) => {
          // console.log(response.data)
          const temp = {
            branch_id: response.data.branch_id,
            pos_id: response.data.pos_id
          }
          if (localStorage.getItem('POS_DATA') === null) {
            localStorage.setItem('POS_DATA', '[]')
          }
          // this.pos.push(temp)
          const tempPos = JSON.parse(localStorage.getItem('POS_DATA'))
          tempPos.push(temp)
          localStorage.setItem('POS_DATA', JSON.stringify(tempPos))
          // localStorage.setItem('POS_DATA', JSON.stringify(this.pos))
        })
        .then(this.$router.push(`pos/${this.id}`))
    }
  }
}
</script>

<style></style>
