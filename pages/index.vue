<template>
  <div>
    <div
      class="navbar p-6 sticky top-0 bg-gray-200 mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4"
    >
      <div class="navbar-title font-bold text-xl md:text-3xl">
        QARPA
      </div>
      <div class="navbar-button flex gap-1 items-stretch">
        <nuxt-link to="/user/login">
          <ButtonComponent class="coverage" :text-fill="'Masuk'" />
        </nuxt-link>
        <nuxt-link to="/user/register">
          <ButtonComponent :text-fill="'Daftar Sekarang'" />
        </nuxt-link>
      </div>
    </div>
    <div class="jumbotron">
      <div
        class="flex flex-wrap-reverse md:flex-nowrap justify-center items-center p-5 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
      >
        <div class="jumbotron-text">
          <p class="font-semibold text-xl lg:text-3xl">
            Dapatkan Layanan Manajemen Terbaik Dalam Satu Aplikasi
          </p>
          <p>
            Mengelola dan meningkatkan keuntungan usaha dengan efisien dan cepat
          </p>
        </div>
        <div class="jumbotron-image">
          <img
            src="https://cdn.discordapp.com/attachments/1024706945304760320/1029671504666959962/Data_extraction-amico_1_1.png"
            class="w-60 md:w-72"
            alt=""
          >
        </div>
      </div>
    </div>
    <div
      class="div container px-6 md:px-0 mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div class="product py-4 my-16">
        <div class="product-title pt-4 pb-9">
          <p class="text-2xl lgx:text-5xl text-center font-semibold">
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
    </div>
    <div
      class="footer bg-gray-400 grid grid-cols-1 md:grid-cols-6 text-white p-8 md:p-14 gap-3"
    >
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
        <p class="text-black pb-2">
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
        <p class="text-black pb-2">
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
        <p class="text-black pb-2">
          OFFICE
        </p>
        <ul>
          <li>PT.QATROS TEKNOLOGI NUSANTARA</li>
          <li>Maguwoharjo, Yogyakarta</li>
          <li>(021)385141976</li>
          <li>team@qatros.co.id</li>
        </ul>
      </div>
      <div class="content-footer">
        <p class="text-black pb-2">
          APLIKASI
        </p>
        <img
          src="https://cdn.discordapp.com/attachments/1024706945304760320/1029675167728803860/image_10.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped></style>
