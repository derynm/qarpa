<template>
  <div class="px-2 flex flex-col justify-between min-h-[80vh]">
    <div class="top">
      <div
        class="profile-top bg-gradient-to-b from-[#3f51b5] to-[#afb7e0] text-white flex flex-col items-center p-8 rounded-md mb-8 gap-2"
      >
        <IconsPosIcon class="rounded-full" />
        <p class="name">
          Nadya Loppies
        </p>
        <p class="role">
          Pemilik Usaha
        </p>
        <div class="flex gap-1 items-center">
          <IconsMessageIcon color="white" />
          <p class="mail">
            pemiliktoko@gmail.com
          </p>
        </div>
      </div>
      <div class="info flex flex-col gap-3">
        <div class="information p-2">
          <p class="font-semibold">
            Informasi Usaha
          </p>
          <p>Toko Qarpa</p>
        </div>
        <div
          v-if="role"
          class="upgrade border shadow-lg rounded-md pl-2 pr-4 py-2"
        >
          <div class="upgrade-btn flex justify-between">
            <p class="font-semibold">
              Qarpa Pro
            </p>
            <button class="bg-[#344397] text-white rounded-md px-2 py-1">
              Upgrade Pro
            </button>
          </div>
          <div class="upgrade-info">
            <p>Beralih ke Pro untuk mengembangkann usaha Anda.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="logout-btn mt-5">
        <nuxt-link to="user/login">
          <button class="w-full bg-[#344397] text-white rounded-md py-2">
            Keluar
          </button>
        </nuxt-link>
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
      role: true
    }
  },
  created () {
    this.setPageTitle('Profil Pengguna')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
