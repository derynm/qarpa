<template>
  <div>
    <div
      class="navbar p-6 sticky top-0 bg-[#f5f5f5] mx-auto flex flex-wrap md:flex-nowrap justify-between gap-4"
    >
      <div class="navbar-title font-bold text-xl md:text-3xl">
        QARPA
      </div>
      <div class="navbar-button flex gap-1 items-stretch">
        <nuxt-link to="/user/login">
          <ButtonGlobal text="Masuk" padding="p-2" :outlined="true" />
        </nuxt-link>
        <nuxt-link class="hidden md:block" to="/user/register-email">
          <ButtonGlobal
            text="Daftar"
            padding="p-2"
            color="bg-primary"
            class="border-2 border-primary"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="jumbotron">
      <div
        class="flex flex-wrap-reverse text-center md:text-left md:flex-nowrap justify-center items-center p-5 max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto gap-10"
      >
        <div class="jumbotron-text">
          <p class="font-bold text-xl lg:text-4xl">
            Dapatkan Layanan Manajemen Terbaik Dalam Satu Aplikasi
          </p>
          <p>
            Mengelola dan meningkatkan keuntungan usaha dengan efisien dan cepat
          </p>
        </div>
        <div class="jumbotron-image">
          <img
            src="https://cdn.discordapp.com/attachments/1024706945304760320/1029671504666959962/Data_extraction-amico_1_1.png"
            class="w-60 md:w-[500px]"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="btn flex justify-center my-2 md:hidden">
      <nuxt-link to="/user/register-email">
        <ButtonGlobal
          text="Daftar"
          padding="py-2 px-6"
          color="bg-primary"
          class="border-2 border-primary"
        />
      </nuxt-link>
    </div>
    <div
      class="div container px-6 md:px-0 mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div class="product py-4 mb-16 md:my-16">
        <div class="product-title pt-4 pb-9">
          <p class="text-2xl lg:text-5xl text-center font-bold">
            Kami memiliki layanan terbaik untuk memudahkan bisnis anda
          </p>
        </div>
        <div
          class="product-content grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
        >
          <div
            v-for="item in services"
            :key="item.name"
            class="product-item shadow-md p-6"
          >
            <div class="svg flex justify-center">
              <IconMenu :name="item.icon" />
            </div>
            <p class="font-semibold text-center">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 text-white p-10 lg:p-14 gap-3"
    >
      <div class="content-footer md:col-span-2">
        <p class="text-3xl font-bold pb-4">
          QARPA
        </p>
        <P>
          QARPA merupakan aplikasi ERP yang memudahkan UMKM dalam mengelola
          bisnis.
        </P>
      </div>
      <div class="content-footer">
        <p class="pb-2 font-semibold">
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
        <p class="pb-2 font-semibold">
          PRODUCT
        </p>
        <ul>
          <li>Upgrade</li>
        </ul>
      </div>
      <div class="content-footer">
        <p class="pb-2 font-semibold">
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
        <p class="pb-2 font-semibold">
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
  name: 'LandingPage',
  data () {
    return {
      services: [
        { name: 'Point Of Sales', icon: 'Point of Sale' },
        { name: 'Work Order Management', icon: 'Work Order' },
        { name: 'Attendace', icon: 'Presensi' },
        { name: 'Timeoff', icon: 'Cuti' },
        { name: 'Report Audit', icon: 'Audit' },
        { name: 'Inventory', icon: 'Stok Gudang' }
      ]
    }
  }
}
</script>

<style scoped>
li {
  margin: 8px 0px;
}
</style>
