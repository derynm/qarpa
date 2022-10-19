<template>
  <div class="container px-4 md:px-8 lg:px-12 mx-auto">
    <div class="button flex pb-6">
      <ButtonComponent
        :text-fill="'+ Tambah Cabang'"
        @clicked="validate = true"
      />
    </div>
    <div class="card-cabang grid grid-cols-1 md:grid-cols-2 gap-2">
      <PosCardCabang v-for="item in tes" :key="item.id" :item="item" />
    </div>
    <ModalTambahCabang
      v-show="validate"
      :text="modalText"
      @decline="validate = false"
    />
  </div>
</template>

<script>
export default {
  layout: 'dashboard-pos',
  async asyncData ({ params, $axios }) {
    const tes = await $axios.$get(
      'https://6289dd84e5e5a9ad321e3041.mockapi.io/test'
    )
    return { tes }
  },
  data () {
    return {
      modalText: {
        btn1: 'Batal',
        btn2: 'Tambah'
      },
      validate: false
    }
  }
  // methods: {
  //   openToko (num) {
  //     console.log((this.tes.find(({ id }) => id === num).status = true))
  //     console.log(this.tes)
  //   }
  // }
}
</script>

<style></style>
