<template>
  <div class="px-3">
    <div>
      <presensi-card-riwayat-presensi-owner />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'navigation',
  created () {
    this.setPageTitle('Presensi')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
