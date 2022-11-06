<template>
  <div class="px-2">
    <div class="header flex justify-between items-center px-2">
      <div class="date">
        <p>{{ timestamp }}</p>
      </div>
      <nuxt-link to="pilih-customer">
        <button class="flex p-2 rounded-lg gap-2 border">
          <IconsProfile color="black" />
          <p>Pilih Pelanggan</p>
        </button>
      </nuxt-link>
    </div>
    <div class="container px-2 md:px-8 flex flex-col justify-between h-[75vh]">
      <div class="content">
        <SearchBar placeholder="Cari Produk" class="my-5" />
        <div class="product">
          <div class="product-title py-4 font-semibold">
            <p>Daftar Produk</p>
          </div>
          <div class="product-item mt-4 grid grid-cols-1 gap-4">
            <PosCardProduct />
            <PosCardProduct />
          </div>
        </div>
      </div>
      <div class="btn">
        <nuxt-link :to="`${$route.params.id}/detail`" class="flex">
          <ButtonComponent class="w-full p-3" text-fill="Detail Order" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',

  data () {
    return {
      // validate: false,
      // orderDetails: false,
      timestamp: '',
      temp: 2,
      emit: 'click-button'
    }
  },
  created () {
    this.setPageTitle('Penjualan')
    this.getDate()
  },
  mounted () {
    this.$axios
      .$get(`branches/${this.$route.params.id}`)
      .then(response => console.log(response.data))
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    tesClick () {
      console.log('click')
    },
    getDate () {
      const today = new Date()
      const month = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ][today.getMonth()]
      const date = today.getDate() + ' ' + month + ' ' + today.getFullYear()
      const dateTime = date
      this.timestamp = dateTime
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
