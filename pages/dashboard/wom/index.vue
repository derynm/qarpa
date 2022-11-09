<template>
  <div>
    <wom-work-order-karyawan />
    <!-- <wom-work-order-owner /> -->
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  async fetch ({ store }) {
    await store.dispatch('wom/getAllTask')
  },
  data () {
    return {
      showModalNewTask: false
    }
  },

  mounted () {
    // this.$store.dispatch('wom/getAllTask')
    console.log(this.$store.state.wom.allTask)
  },
  created () {
    this.setPageTitle('Work Order')
  },
  methods: {
    showModalTask () {
      this.showModalNewTask = !this.showModalNewTask
    },
    ...mapMutations(['setPageTitle']),
    ...mapActions('wom', ['getAllTask'])
  }
}
</script>

<style scoped></style>
