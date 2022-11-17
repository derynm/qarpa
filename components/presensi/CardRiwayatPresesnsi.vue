<template>
  <div class="flex flex-col rounded-md border shadow-md round py-3 px-3 mb-3">
    <p class="mb-3">
      {{ getDate }}
    </p>
    <div class="flex justify-between">
      <p>Waktu Kerja</p>
      <p>{{ getTime }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    item: { type: Object, default: () => ({}) }
  },
  computed: {
    getDate () {
      return moment(this.item.check_out, 'DD-MM-YYYY HH:mm').format(
        'DD-MMMM-YYYY'
      )
    },
    getTime () {
      return `${moment(this.item.check_in, 'DD-MM-YYYY HH:mm').format(
        'HH:mm'
      )} - ${moment(this.item.check_out, 'DD-MM-YYYY HH:mm').format('HH:mm')}`
    }
  }
}
</script>

<style></style>
