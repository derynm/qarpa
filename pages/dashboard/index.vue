<template>
  <div>
    <div class="min-h-screen">
      <div
        class="nav flex justify-between py-10 items-center px-2 bg-[#f8c46c] rounded-b-xl"
      >
        <div class="title-dashboard text-white">
          <p class="text-2xl font-bold">
            Toko Qarpa
          </p>
          <p class="date">
            {{ timestamp }}
          </p>
        </div>
        <div class="notif">
          <IconsNotif class="icon-notif" />
        </div>
      </div>
      <div class="content px-3">
        <ProfileDashboard :user="user" />
        <HighlightDashboard :role="user.role" />
        <div class="service border shadow-md py-4 rounded-xl">
          <div class="title">
            <p class="text-center pb-2 text-xl">
              Layanan Qarpa
            </p>
          </div>
          <div
            class="grid justify-items-center grid-cols-3 gap-4 text-center px-3"
          >
            <CardMenu
              v-for="item in itemMenu"
              :key="item.name"
              class="w-24"
              :item="item"
              :role="user.role"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  data () {
    return {
      itemMenu: [
        {
          name: 'Point of Sale',
          access: ['owner', 'karyawan'],
          url: '/dashboard/pos'
        },
        {
          name: 'Work Order',
          access: ['owner', 'karyawan'],
          url: '/dashboard/wom'
        },
        {
          name: 'Cuti',
          access: ['owner', 'karyawan'],
          url: '/dashboard/cuti'
        },
        {
          name: 'Pengiriman',
          access: ['owner', 'karyawan'],
          url: '/dashboard/pengiriman'
        },
        {
          name: 'Stok Gudang',
          access: ['owner', 'karyawan'],
          url: '/dashboard/stok'
        },
        {
          name: 'Karyawan',
          access: ['owner'],
          url: '/dashboard/karyawan'
        },
        {
          name: 'Keuangan',
          access: ['owner', 'karyawan'],
          url: '/dashboard/keuangan'
        },
        {
          name: 'Audit',
          access: ['owner'],
          url: '/dashboard/audit'
        },
        {
          name: 'Presensi',
          access: ['owner', 'karyawan'],
          url: '/dashboard/presensi'
        }
        // {
        //   name: 'Subscription',
        //   url: '/dashboard/audit'
        // }
      ],
      timestamp: '',
      user: this.$auth.user
    }
  },

  created () {
    this.getDate()
  },
  methods: {
    getDate () {
      const today = new Date()
      const month = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ][today.getMonth()]
      const date = today.getDate() + ' ' + month + ' ' + today.getFullYear()
      const dateTime = date
      this.timestamp = dateTime
    }
  }
}
</script>

<style></style>
