<template>
  <div class="container flex flex-col justify-between my-4 min-h-[80vh] px-2">
    <div class="content mx-auto flex flex-col gap-4 text-center">
      <IconsPosPaid />
      <div>
        <p>Total Tagihan</p>
        <p class="font-semibold text-xl">
          Rp. {{ order.totalStr }}
        </p>
      </div>
      <div>
        <p>Metode Pembayaran</p>
        <p class="font-semibold">
          Tunai
        </p>
      </div>
    </div>
    <InputFieldBasicInput
      v-model="uang"
      label="Uang Diterima"
      placeholder="Uang"
    />
    <div class="btn">
      <ButtonGlobal
        class="w-full"
        text="Buat Pembayaran"
        color="bg-primary"
        padding="py-2"
        :disabled="isDisable"
        @click="validate = true"
      />
    </div>
    <ModalValidate
      v-show="validate"
      :text="temp"
      :total="toRupiah"
      @decline="validate = false"
      @accept="handlePayment"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  layout: 'header',
  middleware: 'auth',
  data () {
    return {
      validate: false,
      temp: {
        content: 'Pembayaran Sesuai? ',
        btn1: 'Tidak',
        btn2: 'Sesuai'
      },
      order: {},
      uang: null,
      isDisable: true
    }
  },
  computed: {
    toRupiah () {
      const temp = new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(this.uang)
      return `Rp.${temp}`
    }
  },
  watch: {
    uang () {
      if (this.uang >= this.order.totalInt) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
    }
  },
  created () {
    this.setPageTitle('Pembayaran Tunai')
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getOrder () {
      this.order = this.$cookies.get('order')
    },
    handlePayment () {
      this.order.pay = this.uang
      this.$cookies.set('order', this.order)
      this.$router.replace('report')
    }
  }
}
</script>

<style></style>
