<template>
  <div>
    <IconsIconDashboardPos v-if="name === 'Point of Sale'" />
    <IconsIconDashboardWom v-if="name === 'Work Order'" />
    <IconsIconDashboardPresensi v-if="name === 'Presensi'" />
    <IconsIconDashboardCuti v-if="name === 'Cuti'" />
    <IconsIconDashboardPengiriman v-if="name === 'Pengiriman'" />
    <IconsIconDashboardStok v-if="name === 'Stok Gudang'" />
    <IconsIconDashboardKaryawan v-if="name === 'Karyawan'" />
    <IconsIconDashboardKeuangan v-if="name === 'Keuangan'" />
    <IconsIconDashboardAudit v-if="name === 'Audit'" />
    <IconsIconDashboardSubscription v-if="name === 'Subscription'" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
