<template>
  <div class="container px-3 pb-8">
    <div v-if="isLoading" class="loading flex min-h-[65vh]">
      <Loading class="m-auto" />
    </div>
    <div v-if="!isLoading" class="card-cabang grid grid-cols-1 gap-4">
      <PosCardCabang v-for="item in dataCabang" :key="item.id" :item="item" />
    </div>
    <div class="button flex justify-end pt-6">
      <nuxt-link to="pos/tambah-cabang">
        <ButtonComponent class="p-2" :text-fill="'+ Cabang'" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      modalText: {
        btn1: 'Tidak',
        btn2: 'Yakin'
      },
      validate: false,
      order: {
        customer_id: 1,
        pos_id: 1,
        discount: '',
        items: [
          {
            product_id: 1,
            qty: 10
          },
          {
            product_id: 2,
            qty: 4
          }
        ]
      }
    }
  },
  async fetch ({ store }) {
    await store.dispatch('pos/getDataCabang')
  },
  computed: {
    ...mapState('pos', ['isLoading', 'dataCabang'])
  },
  created () {
    this.setPageTitle('Point of Sale')
  },
  // mounted () {

  // },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('pos', ['getDataCabang'])
  }
}
</script>

<style></style>
