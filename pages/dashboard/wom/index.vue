<template>
  <div>
    <wom-work-order-owner v-if="$auth.user.role === 'owner'" />
    <wom-work-order-karyawan v-else />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      showModalNewTask: false
    }
  },
  async fetch ({ store }) {
    await store.dispatch('wom/getAllTask')
    await store.dispatch('wom/getTaskEmployee')
  },
  created () {
    this.setPageTitle('Work Order')
  },
  methods: {
    showModalTask () {
      this.showModalNewTask = !this.showModalNewTask
    },
    ...mapMutations(['setPageTitle'])
    // ...mapActions('wom', ['getAllTask'])
  }
}
</script>

<style scoped></style>
