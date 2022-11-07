<template>
  <div>
    <!-- <wom-work-order-karyawan /> -->
    <wom-work-order-owner />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      showModalNewTask: false
    }
  },
  created () {
    this.setPageTitle('Work Order')
  },
  methods: {
    showModalTask () {
      this.showModalNewTask = !this.showModalNewTask
    },
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style scoped></style>
