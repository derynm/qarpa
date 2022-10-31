<template>
  <div class="container px-3 pb-8">
    <div class="card-cabang grid grid-cols-1 gap-4">
      <PosCardCabang v-for="item in dataCabang" :key="item.id" :item="item" />
    </div>
    <div class="button flex justify-end pt-6">
      <nuxt-link to="pos/tambah-cabang">
        <ButtonComponent class="p-2" :text-fill="'+ Cabang'" />
      </nuxt-link>
    </div>
    <!-- <button @click="clicked">
      Click
    </button> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  // async asyncData ({ params, $axios }) {
  //   const tes = await $axios.$get(
  //     'https://6289dd84e5e5a9ad321e3041.mockapi.io/test'
  //   )
  //   return { tes }
  // },
  data () {
    return {
      dataCabang: [],
      modalText: {
        btn1: 'Tidak',
        btn2: 'Yakin'
      },
      validate: false
    }
  },
  created () {
    this.setPageTitle('Point of Sale')
  },
  mounted () {
    this.$axios
      .$get('branches', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNiwiZXhwIjoxNjY3MjI3MDQ4fQ.iOv6zeQFmeCCWEiiqhWiid4pHABgsLUo02PZ0-BXHpc'
        }
      })
      .then(response => (this.dataCabang = response))
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
