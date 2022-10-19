<template>
  <div>
    <hooper
      class="hooper flex py-10 mb-8"
      :progress="true"
      :auto-play="true"
      :play-speed="2000"
    >
      <slide class="flex flex-col items-center px-2 text-center">
        <img src="~/assets/image.png" class="w-60 md:w-72" alt="">
        <p class="carrousel-text font-semibold text-xl">
          Kami ingin membantu anda dalam membangun bisnis
        </p>
        <p class="carrousel-text">
          Mengelola dan meningkatkan keuntungan usaha dengan efisien dan cepat
        </p>
        <button class="bg-btn">
          Daftar Sekarang
        </button>
      </slide>
      <slide class="flex flex-col items-center text-center">
        <img src="~/assets/image.png" class="w-60 md:w-72" alt="">
        <p class="carrousel-text font-semibold text-xl">
          Kami ingin membantu anda dalam membangun bisnis
        </p>
        <p class="carrousel-text">
          Mengelola dan meningkatkan keuntungan usaha dengan efisien dan cepat
        </p>
        <button class="bg-btn">
          Daftar Sekarang
        </button>
      </slide>
      <slide class="flex flex-col items-center text-center">
        <img src="~/assets/image.png" class="w-60 md:w-72" alt="">
        <p class="carrousel-text font-semibold text-xl">
          Kami ingin membantu anda dalam membangun bisnis
        </p>
        <p class="carrousel-text">
          Mengelola dan meningkatkan keuntungan usaha dengan efisien dan cepat
        </p>
        <button class="bg-btn">
          Daftar Sekarang
        </button>
      </slide>
    </hooper>
    <div class="div container mx-auto max-w-5xl">
      <div class="product py-4 my-20">
        <div class="product-title pt-4 pb-9">
          <p class="text-3xl md:text-5xl text-center font-semibold">
            Kami memiliki layanan terbaik untuk memudahkan bisnis anda
          </p>
        </div>
        <div class="product-content grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Point Of Sales
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Work Order Management
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Attendace
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Timeoff
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Report Audit
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="product-item shadow-md p-6">
            <p class="font-semibold">
              Inventory
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="card flex justify-between items-center p-6 shadow-lg my-20">
        <div class="card-content">
          <p class="font-semibold text-lg md:text-2xl">
            Ayo mulai bangun bisnis mu, dan rasakan omset miliaran rupiah
          </p>
        </div>
        <div class="card-content">
          <NuxtLink class="bg-btn" to="/">
            Daftar Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="footer grid grid-cols-1 md:grid-cols-5 text-white p-14 gap-3">
      <div class="content-footer md:col-span-2">
        <p class="text-black text-3xl font-bold pb-4">
          QARPA
        </p>
        <P>
          QARPA merupakan aplikasi ERP yang memudahkan UMKM dalam mengelola
          bisnis.
        </P>
      </div>
      <div class="content-footer">
        <p class="text-black">
          PERUSAHAAN
        </p>
        <ul>
          <li>Tentang QARPA</li>
          <li>Karir</li>
          <li>Event</li>
          <li>Review Pelanggan</li>
        </ul>
      </div>
      <div class="content-footer">
        <p class="text-black">
          PRODUCT
        </p>
        <ul>
          <li>Tips</li>
          <li>Upgrade</li>
          <li>Education</li>
          <li>Find Accountant</li>
        </ul>
      </div>
      <div class="content-footer">
        <p class="text-black">
          OFFICE
        </p>
        <ul>
          <li>PT.QATROS TEKNOLOGI NUSANTARA</li>
          <li>Maguwoharjo, Yogyakarta</li>
          <li>(021)385141976</li>
          <li>team@qatros.co.id</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'LandingPage',
  components: {
    Hooper,
    Slide
  }
}
</script>

<style scoped>
img {
  border: none;
}
.hooper {
  height: 500px;
  border-bottom: solid 3px black;
}
.bg-btn {
  color: #fff;
  background-color: #f1a661;
  border-radius: 4px;
  padding: 4px;
}
.footer {
  background-color: #e38b29;
}
.carrousel-text {
  padding: 2px 6px 12px 6px;
}
</style>
