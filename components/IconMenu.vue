<template>
  <div>
    <IconsIconDashboardAudit v-if="name === 'Audit'" />
    <IconsIconDashboardCuti v-if="name === 'Cuti'" />
    <IconsIconDashboardKaryawan v-if="name === 'Karyawan'" />
    <IconsIconDashboardKeuangan v-if="name === 'Keuangan'" />
    <IconsIconDashboardPengiriman v-if="name === 'Pengiriman'" />
    <IconsIconDashboardPos v-if="name === 'Point of Sale'" />
    <IconsIconDashboardPresensi v-if="name === 'Presensi'" />
    <IconsIconDashboardStok v-if="name === 'Stok Gudang'" />
    <IconsIconDashboardSubscription v-if="name === 'Subscription'" />
    <IconsIconDashboardWom v-if="name === 'Work Order'" />
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
