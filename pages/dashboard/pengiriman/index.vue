<template>
  <div class="flex flex-col bg-white px-4 w-full">
    <!-- <drop-down
      v-model="sort"
      :item="dataSort"
      class="w-full mb-3"
      place-holder="Riwayat Pengiriman"
    /> -->
    <h3 class="font-semibold mb-2">
      Riwayat Pengiriman
    </h3>
    <div class="h-[472px] overflow-y-auto mb-2">
      <inventory-shipping-card-riwayat-pengiriman
        destinasi="Aninda"
        status="Sedang Mengirim"
        kondisi="Baik"
        dikirim="10 Oktober 2022"
        diterima="-"
      />
      <inventory-shipping-card-riwayat-pengiriman
        destinasi="Aninda"
        status="Sedang Mengirim"
        kondisi="Baik"
        dikirim="10 Oktober 2022"
        diterima="-"
        :button="true"
      />
    </div>
    <div>
      <button-global
        class="w-full mb-3"
        text="Kirim Barang"
        color="bg-primary"
        padding="py-3"
        @click="toNewShipping"
      />
      <button-global
        class="w-full mb-3"
        text="Terima Barang"
        padding="py-3"
        :outlined="true"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pengiriman')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    toNewShipping () {
      this.$router.push('/dashboard/pengiriman/pengiriman-baru')
    }
  }
}
</script>

<style></style>
