<template>
  <div class="container px-3 pb-8">
    <div v-if="isLoading" class="loading flex min-h-[65vh]">
      <Loading class="m-auto" />
    </div>
    <div v-if="!isLoading" class="card-cabang grid grid-cols-1 gap-4">
      <PosCardCabang v-for="item in cabangByRole" :key="item.id" :item="item" />
    </div>
    <div v-if="role === 'owner'" class="button flex justify-end pt-6">
      <nuxt-link to="pos/tambah-cabang">
        <ButtonComponent class="p-2" :text-fill="'+ Cabang'" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
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
      role: this.$auth.user.role
    }
  },
  computed: {
    ...mapState('pos', ['isLoading', 'dataCabang', 'cabangEmployee']),
    cabangByRole () {
      if (this.role === 'owner') {
        return this.dataCabang
      } else {
        return this.cabangEmployee
      }
    }
  },
  created () {
    this.setPageTitle('Point of Sale')
  },
  mounted () {
    this.getCabang()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getCabang () {
      if (this.role === 'owner') {
        this.$store.dispatch('pos/getDataCabang')
      } else {
        this.$store.dispatch('pos/getCabangEmployee')
      }
    }
  }
}
</script>

<style></style>
