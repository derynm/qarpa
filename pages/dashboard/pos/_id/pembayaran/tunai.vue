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
          Tunai
        </p>
      </div>
    </div>
    <InputFieldBasicInput label="Uang Diterima" placeholder="..." />
    <div class="btn">
      <ButtonComponent
        class="p-2 w-full"
        text-fill="Buat Pembayaran"
        @clicked="validate = true"
      />
    </div>
    <ModalValidate v-show="validate" :text="temp" @decline="validate = false" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Pembayaran Tunai')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  },
  data () {
    return {
      validate: false,
      temp: {
        content: 'Pembayaran Sesuai? Rp.101.000',
        btn1: 'Tidak',
        btn2: 'Sesuai'
      }
    }
  }
}
</script>

<style></style>
