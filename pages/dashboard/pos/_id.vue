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
        <ButtonComponent text-fill="Tutup" @clicked="validate = true" />
      </div>
    </div>
    <div
      class="container px-4 md:px-8 lg:px-12 flex flex-col justify-between h-[80vh]"
    >
      <div class="content">
        <div>
          <ButtonComponent
            class="mb-4"
            text-fill="Pilih Customer"
            @clicked="pickCustomer = true"
          />
        </div>
        <div class="search-bar flex items-center shadow-md p-3 rounded-md">
          <IconsSearchIcon />
          <input class="p-1 w-full" type="text" placeholder="Cari Produk">
        </div>
        <div class="product mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <PosCardProduct />
        </div>
      </div>
      <div class="btn flex flex-row-reverse">
        <ButtonComponent
          text-fill="Pembayaran"
          @clicked="orderDetails = true"
        />
      </div>
    </div>
    {{ tes }}
    <ModalValidate
      v-show="validate"
      :text="modalText"
      @decline="validate = false"
      @accept="$router.push('/dashboard/pos')"
    />
    <ModalPilihCustomer v-show="pickCustomer" @add="addCustomer = true" />
    <ModalTambahCustomer
      v-show="addCustomer"
      :text="addCustomerText"
      @decline="addCustomer = false"
    />
    <ModalOrderDetails v-show="orderDetails" />
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
      validate: false,
      pickCustomer: false,
      addCustomer: false,
      orderDetails: false,
      emit: 'click-button',
      modalText: {
        content: 'Apakah Anda Yakin ingin tutup Toko',
        btn1: 'Batal',
        btn2: 'Tutup'
      },
      addCustomerText: {
        btn1: 'Batal',
        btn2: 'Tambah'
      }
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
