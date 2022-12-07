<template>
  <div
    class="max-w-2xl mx-auto w-full bg-white h-screen px-3 flex flex-col justify-center"
  >
    <div class="flex flex-col text-center">
      <div class="mx-auto">
        <h2 class="font-semibold text-xl">
          Pengiriman Berhasil
        </h2>
        <img
          src="@/assets/img/Confirmed-cuate 1.png"
          class="max-w-[196px]"
          alt="confirm-image mt-3"
        >
        <p>{{ today }}</p>
        <h3 class="font-semibold text-lg">
          Rincian Pengiriman
        </h3>
      </div>
      <div class="mt-3 mb-6">
        <div class="flex justify-between">
          <p>Nama Cabang</p>
          <p class="font-semibold">
            {{ branchAddress.name }}
          </p>
        </div>
        <div class="flex justify-between">
          <p>Kontak</p>
          <p class="font-semibold">
            {{ branchAddress.phone }}
          </p>
        </div>
        <div class="flex justify-between">
          <p>Total Produk</p>
          <p class="font-semibold">
            {{ total_produk }}
          </p>
        </div>
        <div class="flex justify-between">
          <p>Alamat</p>
          <p class="font-semibold">
            {{ branchAddress.address }}
          </p>
        </div>
      </div>
      <button-global
        text="Pengiriman Baru"
        padding="py-3"
        color="bg-primary"
        class="mb-3"
      />
      <button-global text="Lihat Pengiriman" :outlined="true" padding="py-3" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  middleware: 'auth',
  async asyncData ({ store, query }) {
    await store.dispatch('getAddressBrach', query.destination_branch)
  },
  data () {
    return {
      total_produk: '',
      today: moment(new Date()).format('DD MMM YYYY HH:mm')
    }
  },
  mounted () {
    if (!this.$cookies.get('order_done')) {
      this.$router.replace('/dashboard/pengiriman/pengiriman-baru')
    } else {
      this.total_produk = this.$cookies.get('order_done')
    }
  },
  computed: {
    ...mapState(['branchAddress'])
  }
}
</script>

<style></style>
