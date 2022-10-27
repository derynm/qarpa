<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="btn-nav flex justify-between">
      <div class="left">
        <select id="" name="" class="border-2 rounded-md p-2">
          <option value="1">
            Cabang 1
          </option>
          <option value="2">
            Cabang 2
          </option>
        </select>
      </div>
      <div class="right flex gap-2">
        <button class="border-2 p-2 rounded-md flex items-center">
          <svg
            class="mx-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M2.5 8.33342H17.5M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z"
              stroke="#364152"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>All</p>
        </button>
        <button class="border-2 p-2 rounded-md flex items-center">
          <svg
            class="mx-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M2.5 8.33342H17.5M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z"
              stroke="#364152"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Pilih Tanggal</p>
        </button>
      </div>
    </div>
    <div class="content">
      <div class="card-report p-2 border my-4">
        <div class="tgl flex justify-between font-semibold py-4">
          <p>Tanggal</p>
          <p>10/07/2022</p>
        </div>
        <div class="total-produk pb-4">
          <div class="title-card">
            <p>Total produk penjualan</p>
          </div>
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Penjualan di outlet</p>
              <p>Penjualan melalui pengiriman</p>
            </div>
            <div class="right">
              <p>200 Pcs</p>
              <p>250 Pcs</p>
            </div>
          </div>
        </div>
        <div class="transaksi pb-4">
          <div class="title-card">
            <p>Transaksi Penjualan (via Point of Sales)</p>
          </div>
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Tunai</p>
              <p>Non Tunai</p>
              <p>Modal Kasir</p>
              <p>Jumlah Produk yang terjual</p>
            </div>
            <div class="right text-right">
              <p>Rp.500.000</p>
              <p>Rp.150.000</p>
              <p>Rp.100.000</p>
              <p>200 Pcs</p>
            </div>
          </div>
        </div>
        <div class="income-outcome pb-4">
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Total pemasukan</p>
              <p>Total pengeluaran</p>
            </div>
            <div class="right">
              <p>Rp.650.000</p>
              <p>Rp.120.000</p>
            </div>
          </div>
        </div>
        <div class="sub-total flex justify-between pb-4">
          <p>Sub Total</p>
          <p>Rp.530.000</p>
        </div>
      </div>
      <div class="card-report p-2 border my-4">
        <div class="tgl flex justify-between font-semibold py-4">
          <p>Tanggal</p>
          <p>10/07/2022</p>
        </div>
        <div class="total-produk pb-4">
          <div class="title-card">
            <p>Total produk penjualan</p>
          </div>
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Penjualan di outlet</p>
              <p>Penjualan melalui pengiriman</p>
            </div>
            <div class="right">
              <p>200 Pcs</p>
              <p>250 Pcs</p>
            </div>
          </div>
        </div>
        <div class="transaksi pb-4">
          <div class="title-card">
            <p>Transaksi Penjualan (via Point of Sales)</p>
          </div>
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Tunai</p>
              <p>Non Tunai</p>
              <p>Modal Kasir</p>
              <p>Jumlah Produk yang terjual</p>
            </div>
            <div class="right text-right">
              <p>Rp.500.000</p>
              <p>Rp.150.000</p>
              <p>Rp.100.000</p>
              <p>200 Pcs</p>
            </div>
          </div>
        </div>
        <div class="income-outcome pb-4">
          <div class="content-card flex justify-between">
            <div class="left pl-2">
              <p>Total pemasukan</p>
              <p>Total pengeluaran</p>
            </div>
            <div class="right">
              <p>Rp.650.000</p>
              <p>Rp.120.000</p>
            </div>
          </div>
        </div>
        <div class="sub-total flex justify-between pb-4">
          <p>Sub Total</p>
          <p>Rp.530.000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'dashboard-pos',
  created () {
    this.setPageTitle('Laporan')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
