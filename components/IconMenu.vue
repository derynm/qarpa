<template>
  <div class="icon-menu shadow-md border rounded-md">
    <nuxt-link :to="item.url" class="cursor-pointer">
      <div class="flex flex-col justify-center items-center py-2">
        <!-- <IconsPosIcon /> -->
        <IconsIconDashboardPos v-if="item.name === 'Point of Sale'" />
        <IconsIconDashboardWom v-if="item.name === 'Work Order'" />
        <IconsIconDashboardLeaves v-if="item.name === 'Leaves'" />
        <IconsIconDashboardTimeoff v-if="item.name === 'Cuti'" />
        <IconsIconDashboardShipping v-if="item.name === 'Pengiriman'" />
        <IconsIconDashboardStok v-if="item.name === 'Stok Gudang'" />
        <IconsIconDashboardKaryawan v-if="item.name === 'Karyawan'" />
        <IconsIconDashboardKeuangan v-if="item.name === 'Keuangan'" />
        <IconsIconDashboardAudit v-if="item.name === 'Audit'" />
        <IconsIconDashboardSubscription v-if="item.name === 'Subscription'" />
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
    }
  }
}
</script>

<style></style>
