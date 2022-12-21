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
    <div
      class="container px-2 md:px-8 flex flex-col justify-between min-h-[75vh]"
    >
      <div class="content mb-3">
        <SearchBar
          v-model="searchValue"
          placeholder="Cari Produk"
          class="my-5"
        />
        <div class="product">
          <div class="product-title py-4 font-semibold">
            <p>Daftar Produk</p>
          </div>
          <div class="product-item mt-4 grid grid-cols-1 gap-4">
            <CardProduct
              v-for="item in filteredList"
              :key="item.id"
              :item="item"
              @incQty="increaseQty"
              @decQty="decreaseQty"
            />
          </div>
        </div>
      </div>
      <div class="btn">
        <ButtonGlobal
          text="Detail Order"
          color="bg-primary"
          padding="p-3"
          class="w-full mb-4"
          :disabled="isDisabled"
          @click="setOrder"
        />
      </div>
    </div>
    <modalPilihPelanggan
      v-if="modalPilihPelanggan"
      @getPelanggan="setPelanggan"
      @showModal="changeModal"
      @close="modalPilihPelanggan = false"
    />
    <ModalTambahPelanggan
      v-if="modalTambahPelanggan"
      @closeModal="closeModal"
      @close="modalTambahPelanggan = false"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
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
      },
      order: {
        customer_id: 0,
        pos_id: null,
        discount: null,
        payment: ''
      },
      searchValue: '',
      role: this.$auth.user.role,
      isDisabled: true
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('pos/getCabangById', params.id)
    await store.dispatch('pos/getDataProduct', params.id)
  },
  computed: {
    ...mapState(['timestamp']),
    ...mapState('pos', ['cabangById', 'dataProduct']),
    ...mapGetters('pos', ['productReady']),
    getItems () {
      const temp = this.orderData.map(a => ({
        products_branch_id: a.id,
        name: a.name,
        price: a.selling_price,
        qty_product: a.qty_product
      }))
      return temp
    },
    filteredList () {
      return this.productReady.filter((post) => {
        return post.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    }
  },
  watch: {
    orderData: {
      handler () {
        if (this.orderData?.length > 0) {
          this.isDisabled = false
        } else {
          this.isDisabled = true
        }
      },
      deep: true
    }
  },
  created () {
    this.setPageTitle('Penjualan')
    this.setTimestamp()
  },
  mounted () {
    this.getPosId()
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setTimestamp']),
    increaseQty (elemen) {
      const tempId = this.orderData.find(e => e.id === elemen.id)
      if (!tempId) {
        this.orderData.push(elemen)
      } else {
        tempId.qty_product = elemen.qty_product
      }
    },
    decreaseQty (elemen) {
      const tempId = this.orderData.find(e => e.id === elemen.id)
      if (elemen.qty_product !== 0) {
        tempId.qty_product = elemen.qty_product
      } else {
        this.orderData = this.orderData.filter(e => e.id !== elemen.id)
      }
    },
    setPelanggan (nama, id) {
      this.pelanggan.id = id
      this.pelanggan.nama = nama
      this.modalPilihPelanggan = false
    },
    closeModal () {
      this.modalTambahPelanggan = false
      this.modalPilihPelanggan = true
      // this.$store.dispatch('pos/getDataProduct', this.$route.params.id)
    },
    changeModal () {
      this.modalPilihPelanggan = false
      this.modalTambahPelanggan = true
    },
    getPosId () {
      if (this.role === 'owner') {
        this.$axios.$get('owner/branches').then((response) => {
          const temp = response.data
          this.order.pos_id = temp.find(
            e => e.id === this.cabangById.id
          ).pos_id[0]
        })
      } else {
        this.$axios.$get('employee/branches').then((response) => {
          const temp = response.data
          this.order.pos_id = temp.find(
            e => e.id === this.cabangById.id
          ).pos_id[0]
        })
      }
    },
    setOrder () {
      if (this.pelanggan.id) {
        this.order.customer_id = this.pelanggan.id
      } else {
        this.order.customer_id = 0
      }
      this.order.items = this.getItems
      this.$cookies.set('order', this.order)
      this.$router.push(`${this.$route.path}/detail`)
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
