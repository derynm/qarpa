<template>
  <div
    class="cabang shadow-md border-t-4 rounded-md border-orange-400 p-3 flex flex-col gap-4"
  >
    <div class="title font-semibold text-lg">
      <p>{{ item.branch_name }}</p>
    </div>
    <div class="content-top flex justify-between">
      <div class="left font-semibold flex flex-col gap-3">
        <p>Nama Karyawan</p>
        <p>Buka Kas</p>
        <p>Tutup Kas</p>
      </div>
      <div class="right text-right flex flex-col gap-3">
        <p>{{ item.user }}</p>
        <p>{{ item.open_at }}</p>
        <p>{{ item.close_at }}</p>
      </div>
    </div>
    <div>
      <p class="font-semibold">
        Transaksi
      </p>
      <p class="font-normal text-xs">
        Semua pemasukkan dan pengeluaran, tunai dan non-tunai yang tercatat dari
        transaksi. (diluar kas)
      </p>
    </div>
    <div class="content-bot flex justify-between">
      <div class="left font-semibold flex flex-col gap-3">
        <p>Total Produk Terjual</p>
        <p>Total Transaksi Penjualan</p>
      </div>
      <div class="right text-right flex flex-col gap-3">
        <p>{{ toRupiah(item.total_sold_product) }}</p>
        <p>Rp.{{ toRupiah(item.total_transaction_incomes) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toRupiah (num) {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(num)
    }
  }
}
</script>

<style></style>
