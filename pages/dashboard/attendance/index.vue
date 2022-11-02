<template>
  <div>
    <div class="max-w-2xl mx-auto w-full h-screen">
      <div class="bg-white h-full">
        <div class="bg-primary h-[216px]">
          <div class="h-[60px] flex items-center w-full px-3 justify-between">
            <IconsBackIcon color-fill="white" />
            <h3 class="font-semibold text-white text-xl">
              Presensi
            </h3>
            <div />
          </div>
        </div>
        <div class="flex w-full justify-center">
          <div
            class="min-h-[200px] min-w-[200px] md:min-h-[280px] md:min-w-[280px] rounded-full bg-warm flex items-center justify-center border-[6px] border-white -mt-[100px] md:-mt-[140px]"
          >
            <h1 class="text-3xl md:text-5xl font-semibold">
              00 : 00 : 00
            </h1>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="items-center w-full my-3">
            <h3 class="font-semibold text-lg text-center mx-auto mb-3">
              Harry Styles
            </h3>
            <div class="flex justify-center">
              <button-global
                v-if="!isCheckIn"
                padding="py-1 px-3"
                color="bg-green-700"
                text="Check In"
                @click="getTimeNow"
              />
              <button-global
                v-if="isCheckIn"
                padding="py-1 px-3"
                color="bg-red-700"
                text="Check Out"
                @click="checkOutModalShow = true"
              />
            </div>
          </div>
        </div>
        <div class="px-3">
          <h3 class="font-bold mb-2">
            Riwayat Presensi
          </h3>
          <div class="max-h-[190px] overflow-y-auto">
            <attendance-card-riwayat-presesnsi
              v-for="(value, index) in 4"
              :key="index"
              date="11 Oktober 2022"
              time="12.30 - 16.30"
            />
          </div>
        </div>
      </div>
    </div>
    <attendance-modal
      v-if="checkInModalShow"
      text-button="Lanjutkan"
      text-modal="Check In Berhasil"
      @closeModal="checkInModalShow = false"
    />
    <attendance-modal
      v-if="checkOutModalShow"
      text-button="Lanjutkan"
      text-modal="Check Out Berhasil"
      @closeModal="checkOutModalShow = false"
    />
  </div>
</template>

<script>
import AttendanceModal from '~/components/Modal/AttendanceModal.vue'

export default {
  components: { AttendanceModal },
  data () {
    return {
      checkInModalShow: false,
      checkOutModalShow: false,
      isCheckIn: false,
      posLatitude: null,
      posLongitude: null
    }
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.posLatitude = pos.coords.latitude
          this.posLongitude = pos.coords.longitude
        })
      } else {
        alert('Geolocation is not supported by this browser.')
      }
    },
    getTimeNow () {
      const current = new Date()
      console.log(current)
    }
  }
}
</script>

<style></style>
