<template>
  <div
    :style="{ backgroundImage: `url(${image})` }"
    class="highlight text-white my-8 rounded-xl py-4 bg-cover"
  >
    <div v-if="role === 'owner'" class="highlight-owner flex flex-col gap-2">
      <div class="highlight-title text-center">
        <p class="text-xl font-bold">
          Keuangan
        </p>
      </div>
      <div class="highlight-content flex justify-evenly pt-2">
        <div class="left">
          <p>Rp.{{ toRupiah(summary.incomes) }}</p>
          <p>Uang Masuk</p>
        </div>
        <div class="divide border-l border-white" />
        <div class="right">
          <p>Rp.{{ toRupiah(summary.expenses) }}</p>
          <p>Uang Keluar</p>
        </div>
      </div>
      <div class="note flex gap-2 mx-auto items-center px-2">
        <p>Lihat laporan keuanganmu minggu ini, yuk!</p>
        <nuxt-link to="dashboard/keuangan">
          <div class="bg-[#2a3679] rounded-full py-2 px-3">
            <IconsArrowRight color="white" />
          </div>
        </nuxt-link>
      </div>
    </div>
    <div
      v-if="role === 'employee'"
      class="highlight-karyawan flex flex-col gap-2"
    >
      <div class="highlight-title text-center">
        <p class="text-xl font-bold">
          Work Order
        </p>
      </div>
      <div class="highlight-content flex mx-auto gap-4">
        <div class="left bg-[#2d3a82] rounded-xl p-2">
          <p class="text-xl">
            {{ task.done }} Selesai
          </p>
        </div>
        <div class="right bg-[#2d3a82] rounded-xl p-2">
          <p class="text-xl">
            {{ task.todo }} Proses
          </p>
        </div>
      </div>
      <div class="note flex gap-2 mx-auto items-center px-2">
        <p>Lihat tugas-tugasmu minggu ini, yuk!</p>
        <nuxt-link to="dashboard/wom">
          <div class="bg-[#2a3679] rounded-full py-2 px-3">
            <IconsArrowRight color="white" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from '~/assets/img/bg-highlight.png'
export default {
  props: {
    role: {
      type: String,
      default: 'karyawan'
    },
    task: {
      type: Object,
      default: () => ({})
    },
    summary: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      image: bgImage,
      temp: null
    }
  },
  methods: {
    toRupiah (currency) {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(currency)
    }
  }
}
</script>

<style></style>
