<template>
  <div>
    <div class="content flex flex-col justify-between min-h-[80vh] px-2">
      <div class="top">
        <div class="empty flex flex-col items-center text-center mt-10">
          <IconsKaryawanKosong />
          <p class="font-semibold">
            Kamu belum punya karyawan, nih?
          </p>
          <p>
            Silahkan tambah karyawan baru, jika kamu sudah memiliki karyawan
            untuk kelola usahamu.
          </p>
        </div>
      </div>
      <div class="bot-btn flex justify-end">
        <nuxt-link to="karyawan/tambah-karyawan">
          <ButtonComponent class="p-2" text-fill="+ Tambah" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Karyawan')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
