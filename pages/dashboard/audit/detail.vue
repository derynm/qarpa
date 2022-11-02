<template>
  <div class="container px-2 flex flex-col gap-3 mb-5">
    <div
      class="keterangan shadow-md border-t-4 rounded-md border-orange-400 p-3"
    >
      <div class="title font-semibold mb-2">
        <p>Keterangan</p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold">
          <p>Nama Karyawan</p>
          <p>Buka Kas</p>
          <p>Tutup Kas</p>
        </div>
        <div class="right text-right">
          <p>Zakka Ativana</p>
          <p>Jumat,21 Oktober 2022 | 08.00</p>
          <p>Jumat,21 Oktober 2022 | 21.00</p>
        </div>
      </div>
    </div>
    <div class="arus-kas shadow-md border-t-4 rounded-md border-orange-400 p-3">
      <div class="title font-semibold mb-2">
        <p>Arus Kas</p>
        <p class="font-normal text-xs">
          Semua pemasukan dan pengeluaran diluar transaksi penjualan
        </p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold">
          <p>Kas Awal (Modal Kasir)</p>
          <p>Uang Masuk</p>
          <p>Uang Keluar</p>
        </div>
        <div class="right text-right">
          <p>Rp.50.000</p>
          <p class="text-green-400">
            +Rp.0
          </p>
          <p class="text-red-500">
            -Rp.0
          </p>
        </div>
      </div>
    </div>
    <div
      class="transaksi shadow-md border-t-4 rounded-md border-orange-400 p-3"
    >
      <div class="title font-semibold mb-2">
        <p>Transaksi Penjualan</p>
        <p class="font-normal text-xs">
          Semua pemasukkan dan pengeluaran, tunai dan non-tunai yang tercatat
          dari transaksi.(diluar kas)
        </p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold">
          <p>Total produk terjual</p>
          <p>Tunai</p>
          <p>Non-Tunai</p>
          <p>Total Transaksi penjualan</p>
        </div>
        <div class="right text-right">
          <p>1</p>
          <p class="text-green-400">
            +Rp.2.000
          </p>
          <p class="text-green-400">
            +Rp.0
          </p>
          <p>Rp.2.000</p>
        </div>
      </div>
    </div>
    <div class="sisa-kas shadow-md border-t-4 rounded-md border-orange-400 p-3">
      <div class="title font-semibold mb-2">
        <p>Arus Sisa Kas</p>
        <p class="font-normal text-xs">
          Semua uang tunai dan non tunai yang ada di kasir
        </p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold">
          <p>Tunai</p>
          <p>Total uang di kasir</p>
        </div>
        <div class="right text-right">
          <p>Rp.50.000</p>
          <p>Rp.50.000</p>
        </div>
      </div>
    </div>
    <div class="total shadow-md border-t-4 rounded-md border-orange-400 p-3">
      <div class="title font-semibold mb-2">
        <p>Total</p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold">
          <p>Penerimaan Siste</p>
          <p class="font-normal text-xs">
            (Total Kas + Total Transaksi)
          </p>
          <p>Selisih Total</p>
          <p class="font-normal text-xs">
            (Total arus sisa kas + Penerimaan sistem)
          </p>
        </div>
        <div class="right text-right flex flex-col justify-evenly">
          <p>Rp.52.000</p>
          <p class="text-red-500">
            -Rp.2.000
          </p>
        </div>
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
      isEmpty: true
    }
  },
  created () {
    this.setPageTitle('Detail Audit')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
select {
  outline: none;
}
</style>
