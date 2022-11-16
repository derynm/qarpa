<template>
  <div>
    <div v-if="isLoading" class="loading flex min-h-screen">
      <Loading class="m-auto" />
    </div>
    <div v-if="!isLoading" class="px-2">
      <div class="btn mb-6 flex gap-2 px-2">
        <div class="input">
          <input
            v-model="tgl"
            type="date"
            class="border-2 p-2 rounded-lg"
            @change="keuanganDefault(tgl, branch)"
          >
        </div>
        <div class="dropdown">
          <select
            id=""
            v-model="branch"
            class="w-full rounded-lg p-2 border-2 text-lg"
            name=""
            @change="keuanganDefault(tgl, branch)"
          >
            <option v-for="item in optionData" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="pemasukan mb-4">
        <div class="title py-2">
          <p>Laporan Pemasukan</p>
        </div>
        <div class="card flex flex-col gap-3">
          <KeuanganCardLaporan
            text="Total Penjualan Produk"
            :money="dataKeuangan.incomes"
          />
          <KeuanganCardLaporan
            text="Total Transaksi Produk"
            :money="dataKeuangan.total_transaction"
          />
          <KeuanganCardLaporan
            text="Total Penjualan Produk"
            :money="dataKeuangan.total_products"
          />
        </div>
      </div>
      <div class="pengeluaran mb-4">
        <div class="title py-2">
          <p>Laporan Pengeluaran</p>
        </div>
        <div class="card flex flex-col gap-3">
          <KeuanganCardLaporan
            text="Total Pembelian Stok Suplai"
            :money="dataKeuangan.expenses"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import moment from 'moment'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      tgl: moment(new Date()).format('YYYY-MM-DD'),
      branch: '',
      // dataKeuangan: {},
      user: this.$auth.user
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getBranchDropdown')
  },
  computed: {
    ...mapState(['branchDropdown', 'isLoading']),
    ...mapState('keuangan', ['dataKeuangan']),
    optionData () {
      if (this.user.role === 'owner') {
        return this.branchDropdown
      } else if (this.user.role === 'employee') {
        return [this.branchDropdown.find(e => e.id === this.user.branch_id)]
      } else {
        return null
      }
    }
  },
  created () {
    this.setPageTitle('Keuangan')
  },
  mounted () {
    this.defaultbranch()
    if (this.user.role === 'owner') {
      this.keuanganDefault(this.tgl, this.branchDropdown[0].id)
    } else if (this.user.role === 'employee') {
      this.keuanganDefault(this.tgl, this.user.branch_id)
      console.log(this.user.branch_id)
    }
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setIsLoading']),
    defaultbranch () {
      this.branch = this.branchDropdown[0].id
    },
    keuanganDefault (date, id) {
      this.setIsLoading(true)
      this.$store
        .dispatch('keuangan/getDataKeuanganDefault', { date, id })
        .then(this.setIsLoading(false))
    }
  }
}
</script>

<style>
input {
  outline: none;
}
</style>
