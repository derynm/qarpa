<template>
  <div>
    <div class="max-w-2xl mx-auto w-full bg-white min-h-screen">
      <presensi-karyawan
        @location="getLocation"
        @checkIn="handleCheckIn"
        @checkOut="handleCheckOut"
      />
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
import moment from 'moment'
import AttendanceModal from '~/components/Modal/AttendanceModal.vue'
import PresensiKaryawan from '~/components/presensi/PresensiKaryawan.vue'

export default {
  components: { AttendanceModal, PresensiKaryawan },
  middleware: 'auth',
  data () {
    return {
      checkInModalShow: false,
      checkOutModalShow: false,
      isCheckIn: false,
      posLatitude: null,
      posLongitude: null,
      date: new Date()
    }
  },
  async fetch ({ store }) {
    await store.dispatch('presensi/getPresensiStatus')
    await store.dispatch('presensi/getAllPresensiEmployee')
  },
  created () {
    if (this.$auth.user.role === 'owner') {
      this.$router.push('/dashboard/presensi/presensi-owner')
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
    handleCheckIn () {
      try {
        this.$axios
          .$post('attendances/check_in', {
            check_in: moment(this.date).format('DD-MM-YYYY HH:mm:ss.SSSSSSSSS'),
            latitude: this.posLatitude,
            longitude: this.posLongitude
          })
          .then(() => {
            this.checkInModalShow = true
            this.isCheckIn = true
            window.location.reload()
          })
      } catch (error) {
        console.log(error)
      }
    },
    handleCheckOut () {
      try {
        this.$axios
          .$put('attendances/check_out', {
            check_out: moment(this.date).format('DD-MM-YYYY HH:mm:ss.SSSSSSSSS')
          })
          .then(() => {
            this.checkOutModalShow = true
            this.isCheckIn = false
            window.location.reload()
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
