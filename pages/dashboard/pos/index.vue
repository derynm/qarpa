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
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      dataCabang: '',
      modalText: {
        btn1: 'Tidak',
        btn2: 'Yakin'
      },
      validate: false,
      isLoading: false
    }
  },
  created () {
    this.setPageTitle('Point of Sale')
  },
  mounted () {
    this.isLoading = true
    this.$axios
      .$get('branches')
      // .then(response => console.log(response.data))
      .then((response) => {
        this.dataCabang = response.data
        this.isLoading = false
      })
    // .then(console.log(this.dataCabang))
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
