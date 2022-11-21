<template>
  <div class="px-2">
    <div class="header flex justify-between items-center px-2">
      <div class="date">
        <p>{{ timestamp }}</p>
      </div>
      <div>
        <button
          v-if="!pelanggan.nama"
          class="flex p-2 rounded-lg gap-2 border"
          @click="modalPilihPelanggan = true"
        >
          <IconsProfile color="black" />
          <p>Pilih Pelanggan</p>
        </button>
        <button
          v-else
          class="flex p-2 rounded-lg gap-2 border"
          @click="modalPilihPelanggan = true"
        >
          <p>{{ pelanggan.nama }}</p>
        </button>
      </div>
    </div>
    <div class="container px-2 md:px-8 flex flex-col justify-between h-[75vh]">
      <div class="content">
        <SearchBar placeholder="Cari Produk" class="my-5" />
        <div class="product">
          <div class="product-title py-4 font-semibold">
            <p>Daftar Produk</p>
          </div>
          <div class="product-item mt-4 grid grid-cols-1 gap-4">
            <!-- <PosCardProduct
              v-for="item in dataProduct"
              :key="item.id"
              :item="item"
              @plusQty="increaseQty"
              @minQty="decreaseQty"
            /> -->
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
    <modalPilihPelanggan
      v-if="modalPilihPelanggan"
      @getPelanggan="setPelanggan"
      @showModal="changeModal"
    />
    <ModalTambahPelanggan
      v-if="modalTambahPelanggan"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      orderData: [],
      paramsId: this.$route.params.id,
      modalPilihPelanggan: false,
      modalTambahPelanggan: false,
      pelanggan: {
        nama: null,
        id: null
      }
    }
  },
  // async fetch ({ store, params }) {
  //   await store.dispatch('pos/getCabangById', params.id)
  //   await store.dispatch('pos/getDataProduct', params.id)
  // },
  computed: {
    ...mapState(['timestamp']),
    ...mapState('pos', ['cabangById', 'dataProduct'])
  },
  created () {
    this.setPageTitle('Penjualan')
    this.setTimestamp()
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setTimestamp']),
    increaseQty (elemen) {
      const tempId = this.orderData.find(e => e.id === elemen.id)
      if (!tempId) {
        this.orderData.push(elemen)
      } else {
        tempId.qty = elemen.qty
      }
    },
    decreaseQty (elemen) {
      const tempId = this.orderData.find(e => e.id === elemen.id)
      if (elemen.qty !== 0) {
        tempId.qty = elemen.qty
      } else {
        this.orderData = this.orderData.filter(e => e.id !== elemen.id)
      }
    },
    setPelanggan (nama, id) {
      this.pelanggan.id = id
      this.pelanggan.nama = nama
      this.modalPilihPelanggan = false
      console.log(this.pelanggan)
    },
    closeModal () {
      this.modalTambahPelanggan = false
      this.modalPilihPelanggan = true
      // this.$store.dispatch('pos/getDataProduct', this.$route.params.id)
    },
    changeModal () {
      this.modalPilihPelanggan = false
      this.modalTambahPelanggan = true
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
