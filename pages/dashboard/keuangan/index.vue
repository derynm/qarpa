<template>
  <div class="px-2">
    <div class="btn mb-6 flex gap-2 px-2">
      <button class="border-2 p-2 rounded-md flex items-center gap-2">
        <p>All</p>
        <IconsCalender />
      </button>
      <div class="dropdown rounded-md border-2">
        <fieldset class="bg-white">
          <select id="" class="rounded-xl p-2" name="">
            <option value="1">
              Cabang 1
            </option>
            <option value="2">
              Cabang 2
            </option>
          </select>
        </fieldset>
      </div>
    </div>
    <div class="pemasukan mb-4">
      <div class="title py-2">
        <p>Laporan Pemasukan</p>
      </div>
      <div class="card flex flex-col gap-3">
        <KeuanganCardLaporan text="Total Penjualan Produk" money="Rp.450.000" />
        <KeuanganCardLaporan text="Total Transaksi Produk" money="50" />
        <KeuanganCardLaporan text="Total Penjualan Produk" money="100" />
      </div>
    </div>
    <div class="pengeluaran mb-4">
      <div class="title py-2">
        <p>Laporan Pengeluaran</p>
      </div>
      <div class="card flex flex-col gap-3">
        <KeuanganCardLaporan
          text="Total Pembelian Stok Suplai"
          money="Rp.15.000.000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      //   isEmpty: true
    }
  },
  created () {
    this.setPageTitle('Keuangan')
  },
  mounted () {
    this.getDataKeuangan()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getDataKeuangan () {
      this.$axios
        .$get('company/finance')
        .then(response => console.log(response.data))
    }
  }
}
</script>

<style></style>
