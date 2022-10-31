<template>
  <div class="container px-2">
    <div class="header flex justify-between items-center px-2">
      <div class="date">
        <p>{{ timestamp }}</p>
      </div>
      <nuxt-link to="pilih-customer">
        <button class="flex p-2 rounded-lg gap-2 border">
          <IconsProfile color="black" />
          <p>Annindia</p>
        </button>
      </nuxt-link>
    </div>
    <div class="content-input my-4 flex flex-col justify-between min-h-[50vh]">
      <div class="card-produk-detail flex flex-col gap-3 mt-5">
        <PosCardProductDetail />
        <PosCardProductDetail />
        <PosCardProductDetail />
      </div>
      <div class="discount">
        <InputFieldDiscountInput label="Diskon" placeholder="Rp.0" />
      </div>
    </div>
    <div class="subtotal flex justify-between border-y">
      <div class="left flex flex-col gap-2 py-2">
        <p>Subtotal</p>
        <p>Diskon</p>
      </div>
      <div class="right" />
    </div>
    <div class="total flex justify-between py-2">
      <div class="left">
        <p class="font-semibold">
          Total Pembayaran :
        </p>
      </div>
      <div class="right">
        <p>Rp.101.000</p>
      </div>
    </div>
    <div class="btn my-4">
      <nuxt-link to="pembayaran">
        <ButtonComponent text-fill="Tagih Pembayaran" class="p-2 w-full" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      timestamp: ''
    }
  },
  created () {
    this.setPageTitle('Detail Order')
    this.getDate()
  },

  methods: {
    ...mapMutations(['setPageTitle']),
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

<style></style>
