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
            @change="keuanganDefault(tgl, cabang)"
          >
        </div>
        <div class="dropdown">
          <select
            v-if="user.role === 'owner'"
            id=""
            v-model="cabang"
            class="w-full rounded-lg p-2 border-2 text-lg"
            name=""
            @change="keuanganDefault(tgl, cabang)"
          >
            <option v-for="item in optionData" :key="item.id" :value="item.id">
              {{ item.value }}
            </option>
          </select>
          <p v-if="user.role === 'employee'" class="border-2 p-2 rounded-lg">
            {{ optionData.value }}
          </p>
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
            :convert="true"
          />
          <KeuanganCardLaporan
            text="Total Transaksi Produk"
            :money="dataKeuangan.total_transactions"
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
            :convert="true"
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
      cabang: '',
      user: this.$auth.user
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getBranchDropdown')
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapState('keuangan', ['dataKeuangan']),
    ...mapState('dropdown', ['branch']),
    optionData () {
      if (this.user.role === 'owner') {
        return this.branch
      } else if (this.user.role === 'employee') {
        return this.branch.find(e => e.id === this.user.branch_id)
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
      this.keuanganDefault(this.tgl, this.branch[0].id)
    } else if (this.user.role === 'employee') {
      this.keuanganDefault(this.tgl, this.user.branch_id)
      console.log(this.user.branch_id)
    }
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setIsLoading']),
    defaultbranch () {
      this.cabang = this.branch[0].id
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
