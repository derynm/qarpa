<template>
  <div class="min-h-screen">
    <div
      class="nav flex justify-between py-10 items-center px-2 bg-[#f8c46c] rounded-b-xl"
    >
      <div class="title-dashboard text-white">
        <p class="text-2xl font-bold">
          Toko Qarpa
        </p>
        <p class="date">
          11 September 2022
        </p>
      </div>
      <div class="notif">
        <IconsNotif class="icon-notif" />
      </div>
    </div>
    <div class="content px-3">
      <ProfileDashboard />
      <HighlightDashboard />
      <div class="service border shadow-md py-4 rounded-xl">
        <div class="title">
          <p class="text-center pb-2 text-xl">
            Layanan Qarpa
          </p>
        </div>
        <div
          class="grid justify-items-center grid-cols-3 gap-4 text-center px-3"
        >
          <IconMenu
            v-for="item in itemMenu"
            :key="item.name"
            class="w-24"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      itemMenu: [
        {
          name: 'Point of Sale',
          url: '/dashboard/pos'
        },
        {
          name: 'Work Order',
          url: '/dashboard/wom'
        },
        {
          name: 'Leaves',
          url: '/dashboard/leaves'
        },
        {
          name: 'Cuti',
          url: '/dashboard/timeoff'
        },
        {
          name: 'Pengiriman',
          url: '/dashboard/shipping'
        },
        {
          name: 'Stok Gudang',
          url: '/dashboard/stok'
        },
        {
          name: 'Karyawan',
          url: '/dashboard/karyawan'
        },
        {
          name: 'Keuangan',
          url: '/dashboard/keuangan'
        },
        {
          name: 'Audit',
          url: '/dashboard/audit'
        },
        {
          name: 'Subscription',
          url: '/dashboard/audit'
        }
      ]
    }
  }
}
</script>

<style></style>
