<template>
  <div class="container flex flex-col justify-between my-4 min-h-[80vh] px-2">
    <div class="content mx-auto flex flex-col gap-4 text-center">
      <IconsPosPaid />
      <div>
        <p>Total Tagihan</p>
        <p class="font-semibold text-xl">
          Rp.101.000
        </p>
      </div>
      <div>
        <p>Metode Pembayaran</p>
        <p class="font-semibold">
          Transfer dari Bank BCA
        </p>
      </div>
    </div>
    <div class="btn">
      <ButtonComponent class="p-2 w-full" text-fill="Buat Pembayaran" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pembayaran Bank')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
