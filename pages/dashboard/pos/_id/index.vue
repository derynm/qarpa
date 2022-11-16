<template>
  <div class="px-2">
    <button @click="setSession">
      Click session
    </button>
    <button @click="deleteSession">
      remove session
    </button>
    <button @click="getSession">
      get session
    </button>
    <div class="header flex justify-between items-center px-2">
      <div class="date">
        <p>{{ timestamp }}</p>
      </div>
      <nuxt-link to="/dashboard/pelanggan/pilih-pelanggan">
        <button class="flex p-2 rounded-lg gap-2 border">
          <IconsProfile color="black" />
          <p>Pilih Pelanggan</p>
        </button>
      </nuxt-link>
    </div>
    <div class="container px-2 md:px-8 flex flex-col justify-between h-[75vh]">
      <div class="content">
        <SearchBar placeholder="Cari Produk" class="my-5" />
        <div class="product">
          <div class="product-title py-4 font-semibold">
            <p>Daftar Produk</p>
          </div>
          <div class="product-item mt-4 grid grid-cols-1 gap-4">
            <PosCardProduct />
          </div>
        </div>
      </div>
      <div class="btn">
        <nuxt-link :to="`${$route.params.id}/detail`" class="flex">
          <ButtonGlobal
            text="Detail Order"
            color="bg-primary"
            padding="p-3"
            class="w-full"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      orderData: '',
      paramsId: this.$route.params.id
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('pos/getCabangById', params.id)
    console.log(this.paramsId)
  },
  computed: {
    ...mapState(['timestamp']),
    ...mapState('pos', ['cabangById'])
  },
  created () {
    this.setPageTitle('Penjualan')
    this.setTimestamp()
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setTimestamp']),
    ...mapActions('pos', ['getCabangById']),
    setSession () {
      sessionStorage.setItem('tes', JSON.stringify(this.order))
    },
    getSession () {
      console.log(JSON.parse(sessionStorage.getItem('tes')))
    },
    deleteSession () {
      sessionStorage.removeItem('tes')
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
