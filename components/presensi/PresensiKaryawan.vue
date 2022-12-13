<template>
  <div>
    <div class="bg-primary h-[216px]">
      <div class="h-[60px] flex items-center w-full px-3 justify-between">
        <div class="cursor-pointer" @click="$router.go(-1)">
          <IconsBackIcon color-fill="white" />
        </div>
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
          {{ workTime }}
        </h1>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="items-center w-full my-3">
        <h3 class="font-semibold text-lg text-center mx-auto mb-3">
          {{ $auth.user.name }}
        </h3>
        <div class="flex justify-center">
          <button-global
            v-if="presensiStatus.message === 'Attendance not found'"
            padding="py-1 px-3"
            color="bg-green-700"
            text="Check In"
            @click="$emit('checkIn')"
          />
          <button-global
            v-else
            padding="py-1 px-3"
            color="bg-red-700"
            text="Check Out"
            @click="$emit('checkOut')"
          />
        </div>
      </div>
    </div>
    <div class="px-3">
      <h3 class="font-bold mb-2">
        Riwayat Presensi
      </h3>
      <div class="max-h-[190px] overflow-y-auto snap-y">
        <presensi-card-riwayat-presesnsi
          v-for="(value, index) in allPresensiEmployee"
          :key="index"
          class="snap-start"
          :item="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  emits: ['location', 'checkIn', 'checkOut'],
  data () {
    return {
      workTime: '00 : 00 : 00'
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getPresensiStatus')
  },
  computed: {
    ...mapState('presensi', ['presensiStatus', 'allPresensiEmployee'])
  },
  mounted () {
    this.$emit('location')
    if (this.presensiStatus.data) {
      this.setDuration()
    }
  },
  methods: {
    setDuration () {
      const date = moment(new Date()).format('DD-MM-YYYY HH:mm:ss')
      const ms = moment(date, 'DD-MM-YYY HH:mm:ss').diff(
        moment(this.presensiStatus.data.checkin_at, 'DD-MM-YYY HH:mm')
      )
      const d = moment.duration(ms)
      this.workTime = Math.floor(d.asHours()) + moment.utc(ms).format(':mm:ss')
      console.log('cek in :', this.presensiStatus.data.checkin_at)
    }
  }
}
</script>

<style></style>
