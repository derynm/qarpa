<template>
  <div class="p-3 border-2 shadow-md mb-2 rounded-md">
    <div class="flex w-full justify-between mb-1">
      <h4 class="text-lg font-bold">
        {{ item.name }}
      </h4>
      <p class="text-sm font-semibold flex items-center">
        {{ getDate }}
      </p>
    </div>
    <p>Karyawan berada di</p>
    <div class="flex">
      <icons-icons-shipping-location-point color="#3F51B5" />
      <h3 class="font-semibold text-primary">
        {{ location }}
      </h3>
    </div>
    <div class="flex mt-1">
      <div>
        <p>Check In</p>
        <p class="font-bold">
          {{ getCheckIn }}
        </p>
      </div>
      <div class="ml-5">
        <p>Check Out</p>
        <p class="font-bold">
          {{ getCheckOut }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      location: null
    }
  },
  computed: {
    getDate () {
      return moment(this.item.check_out, 'DD-MM-YYYY HH:mm').format(
        'DD-MMMM-YYYY'
      )
    },
    getCheckOut () {
      return `${moment(this.item.check_out, 'DD-MM-YYYY HH:mm').format(
        'HH:mm'
      )}`
    },
    getCheckIn () {
      return `${moment(this.item.check_in, 'DD-MM-YYYY HH:mm').format('HH:mm')}`
    }
  },
  mounted () {
    this.$axios
      .$get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.item.latitude}&longitude=${this.item.longitude}&localityLanguage=id`
      )
      .then((response) => {
        this.location = `${response.locality}, ${response.city}`
      })
  }
}
</script>

<style></style>
