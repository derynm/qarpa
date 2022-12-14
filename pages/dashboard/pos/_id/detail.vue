<template>
  <div class="container px-2">
    <div class="header flex justify-between items-center px-2">
      <div class="date">
        <p>{{ timestamp }}</p>
      </div>
      <button class="flex p-2 rounded-lg gap-2 border">
        <IconsProfile color="black" />
        <p>{{ order.customer_id === 0 ? 'Guest' : customer.name }}</p>
      </button>
    </div>
    <div class="content-input my-4 flex flex-col justify-between min-h-[75vh]">
      <div class="card-produk-detail flex flex-col gap-3 mt-5">
        <PosCardProductDetail
          v-for="(item, index) in order.items"
          :key="index"
          :item="item"
          @getSubTotal="subTotal"
        />
      </div>
      <form @submit.prevent="setPayment">
        <div class="discount">
          <InputFieldDiscountInput
            v-model="diskon"
            label="Diskon"
            placeholder="0"
          />
        </div>
        <div class="ket border-y">
          <div class="subtotal flex justify-between">
            <p>Subtotal</p>
            <p>Rp. {{ getSubtotal }}</p>
          </div>
          <div class="diskon flex justify-between">
            <p>Diskon</p>
            <p>Rp. {{ getDiskon }}</p>
          </div>
        </div>
        <div class="total flex justify-between py-2">
          <div class="left">
            <p class="font-semibold">
              Total Pembayaran :
            </p>
          </div>
          <div class="right">
            <p>Rp {{ getTotal }}</p>
          </div>
        </div>
        <div class="btn my-4">
          <ButtonGlobal
            type="submit"
            text="Tagih Pembayaran"
            class="w-full"
            padding="p-2"
            color="bg-primary"
            :disabled="isDisabled"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
export default {
  layout: 'navigation',
  data () {
    return {
      order: {},
      customer: {},
      stokPrice: [],
      diskon: 0,
      isDisabled: true
    }
  },
  created () {
    this.setPageTitle('Detail Order')
    this.setTimestamp()
  },
  mounted () {
    this.getOrder()
    this.disableButton()
  },
  computed: {
    ...mapState(['timestamp']),
    getSubtotal () {
      const temp = this.stokPrice.reduce((a, b) => a + b, 0)
      return new Intl.NumberFormat(['ban', 'id']).format(temp)
    },
    getTotal () {
      const temp = this.stokPrice.reduce((a, b) => a + b, 0)
      const result = temp - (temp * this.diskon) / 100
      return new Intl.NumberFormat(['ban', 'id']).format(result)
    },
    getTotalInt () {
      const temp = this.stokPrice.reduce((a, b) => a + b, 0)
      return temp - (temp * this.diskon) / 100
    },
    getDiskon () {
      const temp = this.stokPrice.reduce((a, b) => a + b, 0)
      return new Intl.NumberFormat(['ban', 'id']).format(
        (temp * this.diskon) / 100
      )
    }
  },
  watch: {
    diskon () {
      this.disableButton()
    }
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setTimestamp']),
    getOrder () {
      this.order = this.$cookies.get('order')
      this.order.discount = parseInt(this.diskon)
      console.log(this.order)
      if (this.order.customer_id > 0) {
        this.$axios
          .$get(`customers/${this.order.customer_id}`)
          .then(response => (this.customer = response.data))
      }
    },
    subTotal (ele) {
      this.stokPrice.push(ele)
    },
    setPayment () {
      this.order.totalInt = this.getTotalInt
      this.order.totalStr = this.getTotal
      this.order.discount = parseInt(this.diskon)
      this.$cookies.set('order', this.order)
      this.$router.replace('pembayaran')
    },
    disableButton () {
      if (this.diskon >= 0 && this.diskon <= 100) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    }
  }
}
</script>

<style></style>
