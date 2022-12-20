<template>
  <div class="container px-8 flex flex-col gap-10 mb-5 text-sm md:text-base">
    <AuditCardAudit
      v-for="(item, index) in temp.branch"
      :key="index"
      :item="item"
    />
    <div
      class="pengiriman-suplier shadow-md border-t-4 rounded-md border-orange-400 p-3 flex flex-col gap-3"
    >
      <div class="title font-semibold">
        <p>Penerimaan barang dari Suplier</p>
      </div>
      <div>
        <p class="font-semibold">
          Transaksi
        </p>
        <p class="font-normal text-xs">
          Total semua transaksi penerimaan barang dari supplier
        </p>
      </div>
      <div class="content-bot flex justify-between">
        <div class="left font-semibold flex flex-col gap-2">
          <p>Total Pembelian Produk</p>
          <p>Total Transaksi Pembelian</p>
        </div>
        <div class="right text-right flex flex-col gap-2">
          <p>{{ temp.total_purchased_products }}</p>
          <p>Rp.{{ toRupiah(temp.total_expenses) }}</p>
        </div>
      </div>
    </div>
    <div
      class="pengiriman-cabang shadow-md border-t-4 rounded-md border-orange-400 p-3 flex flex-col gap-3"
    >
      <div class="title font-semibold">
        <p>Pengiriman Cabang</p>
      </div>
      <div>
        <p class="font-semibold">
          Transaksi
        </p>
        <p class="font-normal text-xs">
          Total semua transaksi pengiriman barang untuk keperluan stok produk
          antar cabang
        </p>
      </div>
      <div class="content-bot flex justify-between">
        <div class="left font-semibold">
          <p>Total Pengiriman Produk</p>
        </div>
        <div class="right text-right">
          <p>{{ temp.total_shipment_branch }}</p>
        </div>
      </div>
    </div>
    <div class="total shadow-md border-t-4 rounded-md border-orange-400 p-3">
      <div class="title font-semibold mb-3">
        <p>Total Keuntungan</p>
      </div>
      <div class="content flex justify-between">
        <div class="left font-semibold flex flex-col gap-3">
          <div>
            <p>Pemasukkan</p>
            <p class="font-normal text-xs">
              (Total Arus Kas PoS)
            </p>
          </div>
          <div>
            <p>Kerugian</p>
            <p class="font-normal text-xs">
              (Total Diskon)
            </p>
          </div>
          <div>
            <p>Total Keuntungan</p>
            <p class="font-normal text-xs">
              (Pemasukan - Total Diskon)
            </p>
          </div>
        </div>
        <div class="right text-right flex flex-col justify-evenly gap-3">
          <p>Rp.{{ toRupiah(temp.total_incomes) }}</p>
          <p class="text-red-500">
            Rp.{{ toRupiah(temp.total_discount) }}
          </p>
          <p class="text-green-500">
            Rp.{{ toRupiah(temp.total_profit) }}
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
      isEmpty: true,
      temp: {}
    }
  },
  created () {
    this.setPageTitle('Detail Audit')
  },
  mounted () {
    this.getReport()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getReport () {
      this.$axios
        .$get(`company/reports?date=${this.$route.params.id}`)
        .then(response => (this.temp = response.data))
    },
    toRupiah (currency) {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(currency)
    }
  }
  // computed: {
  //   toRupiah (currency) {
  //     return new Intl.NumberFormat('id-ID', {
  //       currency: 'IDR'
  //     }).format(currency)
  //   }
  // }
}
</script>

<style>
select {
  outline: none;
}
</style>
