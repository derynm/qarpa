<template>
  <div class="container px-4">
    <div class="card-total border p-2 rounded-lg text-center shadow-md">
      <p class="text-xl">
        Total Pembayaran
      </p>
      <p class="text-3xl">
        Rp.101.000
      </p>
    </div>
    <div class="content my-10 flex flex-col gap-4">
      <div class="title">
        <p class="font-semibold text-lg">
          Metode Pembayaran
        </p>
        <p>Pilih sesuai metode pembayaran yang digunakan pelangganmu</p>
      </div>
      <div class="option flex flex-col gap-4">
        <nuxt-link to="pembayaran/tunai">
          <div
            class="tunai rounded-lg shadow-md flex justify-between border px-2 py-4 font-semibold"
          >
            <div class="left">
              <p>Tunai</p>
            </div>
            <div class="right flex items-center">
              <IconsArrowRight color="black" />
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="pembayaran/pilih-bank">
          <div
            class="bank rounded-lg shadow-md flex justify-between border font-semibold px-2 py-4"
          >
            <div class="left">
              <p>Transfer Bank</p>
              <p class="font-normal">
                Terima transfer dari berbagai Bank
              </p>
            </div>
            <div class="right flex items-center">
              <IconsArrowRight color="black" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pembayaran')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
