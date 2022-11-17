<template>
  <div
    v-if="item.access.includes(role)"
    class="icon-menu shadow-md border rounded-md"
  >
    <nuxt-link :to="checkUrl" class="cursor-pointer">
      <div class="flex flex-col justify-center items-center py-2">
        <!-- <IconsPosIcon /> -->
        <IconMenu :name="item.name" />
        <!-- <IconsIconDashboardPos v-if="item.name === 'Point of Sale'" />
        <IconsIconDashboardWom v-if="item.name === 'Work Order'" />
        <IconsIconDashboardPresensi v-if="item.name === 'Presensi'" />
        <IconsIconDashboardCuti v-if="item.name === 'Cuti'" />
        <IconsIconDashboardPengiriman v-if="item.name === 'Pengiriman'" />
        <IconsIconDashboardStok v-if="item.name === 'Stok Gudang'" />
        <IconsIconDashboardKaryawan v-if="item.name === 'Karyawan'" />
        <IconsIconDashboardKeuangan v-if="item.name === 'Keuangan'" />
        <IconsIconDashboardAudit v-if="item.name === 'Audit'" />
        <IconsIconDashboardSubscription v-if="item.name === 'Subscription'" /> -->
        <p class="text-sm text-[#354497]">
          {{ item.name }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NuxtIconMenu',
  props: {
    item: {
      type: Object,
      required: true
    },
    role: {
      type: String
    }
  },
  computed: {
    checkUrl () {
      if (this.item.url === '/dashboard/presensi') {
        if (this.$auth.user.role === 'owner') {
          return `${this.item.url}/presensi-owner`
        } else {
          return this.item.url
        }
      } else if (this.item.url === '/dashboard/cuti') {
        if (this.$auth.user.role === 'owner') {
          return `${this.item.url}/riwayat-cuti`
        } else {
          return this.item.url
        }
      } else {
        return this.item.url
      }
    }
  }
}
</script>

<style></style>
