<template>
  <div class="min-h-screen px-3">
    <div
      class="profile-top bg-[#344397] text-white flex flex-col items-center p-8 rounded-md my-8 gap-2"
    >
      <IconsPosIcon class="rounded-full" />
      <p class="name">
        Nadya Loppies
      </p>
      <p class="role">
        Pemilik Usaha
      </p>
      <!-- <IconsMessageIcon /> -->
      <p class="mail">
        pemiliktoko@gmail.com
      </p>
    </div>
    <div class="info flex flex-col gap-3">
      <div class="information flex justify-between p-2">
        <div class="left">
          <p>Informasi Usaha</p>
          <p>Toko Qarpa</p>
        </div>
        <div class="right">
          <button class="bg-[#f8c46c] px-2 py-1 rounded-md text-white">
            Pilih Outlet
          </button>
        </div>
      </div>
      <div class="reset border shadow-lg rounded-md p-2">
        <div class="reset-btn flex justify-between">
          <p>Reset Data</p>
          <button
            class="border border-[#344397] text-[#344397] px-4 py-1 rounded-md"
          >
            Reset
          </button>
        </div>
        <div class="reset-info">
          <p class="text-red-600">
            Reset data akan menghapus semua data transaksi penjualan,
            pengiriman, dan produk
          </p>
        </div>
      </div>
      <div class="upgrade border shadow-lg rounded-md p-2">
        <div class="upgrade-btn flex justify-between">
          <p>Qarpa Pro</p>
          <button class="bg-[#344397] text-white rounded-md px-2 py-1">
            Upgrade Pro
          </button>
        </div>
        <div class="upgrade-info">
          <p>Beralih ke Pro untuk mengembangkann usaha Anda.</p>
        </div>
      </div>
    </div>
    <div class="logout-btn mt-5">
      <nuxt-link to="user/login">
        <button class="w-full bg-[#344397] text-white rounded-md py-2">
          Keluar
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'
}
</script>

<style></style>
