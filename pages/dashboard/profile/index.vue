<template>
  <div class="px-2 flex flex-col justify-between min-h-[80vh]">
    <div class="top">
      <div
        class="profile-top bg-gradient-to-b from-[#3f51b5] to-[#afb7e0] text-white flex flex-col items-center p-8 rounded-md mb-8 gap-2"
      >
        <div class="relative">
          <IconsPosIcon class="rounded-full" />
          <!-- <div
            class="absolute w-fit rounded-full top-12 -right-1 cursor-pointer"
            @click="handleModal"
          >
            <icons-camera />
          </div> -->
        </div>
        <p class="name">
          {{ user.name }}
        </p>
        <p v-if="user.role === 'owner'" class="role">
          Pemilik Usaha
        </p>
        <p v-if="user.role === 'employee'" class="role">
          Karyawan
        </p>
        <div class="flex gap-1 items-center">
          <IconsMessageIcon color="white" />
          <p class="mail">
            {{ user.email }}
          </p>
        </div>
      </div>
      <div class="info flex flex-col gap-3">
        <div
          v-if="user.role === 'owner'"
          class="upgrade border shadow-lg rounded-md pl-2 pr-4 py-2 flex flex-col gap-3"
        >
          <div class="upgrade-btn flex justify-between">
            <p class="font-semibold">
              Qarpa Pro
            </p>
            <button
              class="bg-[#344397] text-white rounded-md px-2 py-1"
              @click="modalUpgrade = true"
            >
              Upgrade Pro
            </button>
          </div>
          <div class="upgrade-info">
            <p>Beralih ke Pro untuk mengembangkann usaha Anda.</p>
          </div>
        </div>
        <nuxt-link to="/tentang-kami">
          <div class="upgrade border shadow-lg rounded-md pl-2 pr-4 py-4">
            <div class="text font-semibold flex justify-between items-center">
              <p>Tentang Kami</p>
              <IconsArrowRight color="black" />
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="bot">
      <div class="logout-btn my-5">
        <button
          class="w-full bg-[#344397] text-white rounded-md py-2"
          @click="$auth.logout()"
        >
          Keluar
        </button>
      </div>
    </div>
    <modal-change-photo v-if="showModalChangePhoto" @closeModal="handleModal" />
    <ModalConfirmModal
      v-if="modalUpgrade"
      title="Upgrade Qarpa Pro"
      text="Maaf fitur ini belum tersedia"
      @closeModal="modalUpgrade = false"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      role: true,
      user: this.$auth.user,
      showModalChangePhoto: false,
      modalUpgrade: false
    }
  },
  created () {
    this.setPageTitle('Profil Pengguna')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleModal () {
      this.showModalChangePhoto = !this.showModalChangePhoto
    }
  }
}
</script>

<style></style>
