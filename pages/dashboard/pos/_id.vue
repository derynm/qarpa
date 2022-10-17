<template>
  <div>
    <div
      class="nav flex justify-between py-10 items-center px-4 md:px-8 lg:px-12"
    >
      <div class="title-dashboard">
        <p class="text-xl lg:text-3xl font-bold">
          Point of Sales
        </p>
      </div>
      <div class="icon">
        <ButtonComponent
          text-fill="Tutup"
          :custom-emit="emit"
          @click-button="clickButton"
        />
      </div>
    </div>
    <div class="container px-4 md:px-8 lg:px-12">
      <div>
        <ButtonComponent class="mb-4" text-fill="Pilih Customer" />
      </div>
      <div class="search-bar flex items-center shadow-md p-3 rounded-md">
        <IconSearchIcon />
        <input class="p-1 w-full" type="text" placeholder="Cari Produk">
      </div>
      <div class="product mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <PosCardProduct />
        <PosCardProduct />
      </div>
    </div>
    {{ tes }}
    <OpenCloseModal
      v-show="closeOpenModal"
      :text="modalText"
      @decline="closeOpenModal = false"
      @accept="$router.push('/dashboard/pos')"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const tes = await $axios.$get(
      `https://6289dd84e5e5a9ad321e3041.mockapi.io/test/${params.id}`
    )
    return { tes }
  },
  data () {
    return {
      closeOpenModal: false,
      emit: 'click-button',
      modalText: {
        content: 'Apakah Anda Yakin ingin tutup Toko',
        btn1: 'Batal',
        btn2: 'Tutup'
      }
    }
  },
  methods: {
    clickButton () {
      this.closeOpenModal = true
      console.log('clicked')
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
