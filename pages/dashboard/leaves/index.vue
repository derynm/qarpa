<template>
  <div class="h-screen mx-4 md:mx-12">
    <div class="btn flex flex-row-reverse my-4">
      <nuxt-link to="leaves/daftar-pegawai">
        <ButtonComponent text-fill="Daftar Pegawai" />
      </nuxt-link>
    </div>
    <div class="p-3">
      <div class="flex">
        <ButtonComponent
          text-fill="Request"
          class="w-full"
          @clicked="isRequest = true"
        />
        <div class="border-l-2 mx-5" />
        <ButtonComponent
          text-fill="Approve"
          class="w-full"
          @clicked="isRequest = false"
        />
      </div>
      <div class="my-5">
        <div v-show="isRequest">
          <LeavesCardKaryawan class="border p-2" />
          <LeavesCardKaryawan class="border p-2" />
        </div>
        <div v-show="!isRequest">
          <p>Approved component</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'dashboard-pos',
  data () {
    return {
      isRequest: true
    }
  },
  created () {
    this.setPageTitle('Leaves Management')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
