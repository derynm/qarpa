<template>
  <div>
    <div v-if="isLoading" class="loading flex min-h-screen">
      <Loading class="m-auto" />
    </div>
    <div v-if="!isLoading" class="min-h-screen">
      <div class="nav py-10 items-center px-2 bg-[#f8c46c] rounded-b-xl">
        <div class="title-dashboard text-white">
          <p class="text-2xl font-bold">
            {{ user.company_name }}
          </p>
          <p class="date">
            {{ timestamp }}
          </p>
        </div>
      </div>
      <div class="content px-3">
        <ProfileDashboard :user="user" />
        <HighlightDashboard
          :role="user.role"
          :task="taskAmount"
          :summary="summaryOwner"
        />
        <div class="service border shadow-md py-4 rounded-xl">
          <div class="title">
            <p class="text-center pb-2 text-xl">
              Layanan Qarpa
            </p>
          </div>
          <div
            class="grid justify-items-center grid-cols-3 gap-2 md:gap-4 text-center px-2"
          >
            <CardMenu
              v-for="item in itemMenu"
              :key="item.name"
              class="w-[90px] md:w-36"
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
import { mapMutations, mapState } from 'vuex'

export default {
  layout: 'dashboard',
  middleware: 'auth',
  data () {
    return {
      itemMenu: [
        {
          name: 'Point of Sale',
          access: ['owner', 'employee'],
          url: '/dashboard/pos'
        },
        {
          name: 'Work Order',
          access: ['owner', 'employee'],
          url: '/dashboard/wom'
        },
        {
          name: 'Cuti',
          access: ['owner', 'employee'],
          url: '/dashboard/cuti'
        },
        {
          name: 'Pengiriman',
          access: ['owner', 'employee'],
          url: '/dashboard/pengiriman'
        },
        {
          name: 'Stok Gudang',
          access: ['owner', 'employee'],
          url: '/dashboard/stok'
        },
        {
          name: 'Karyawan',
          access: ['owner'],
          url: '/dashboard/karyawan'
        },
        {
          name: 'Keuangan',
          access: ['owner', 'employee'],
          url: '/dashboard/keuangan'
        },
        {
          name: 'Audit',
          access: ['owner'],
          url: '/dashboard/audit'
        },
        {
          name: 'Presensi',
          access: ['owner', 'employee'],
          url: '/dashboard/presensi'
        }
        // {
        //   name: 'Subscription',
        //   url: '/dashboard/audit'
        // }
      ],
      user: this.$auth.user
    }
  },
  // async fetch ({ store }) {
  //   await store.dispatch('getTaskAmount')
  // },
  created () {
    this.setTimestamp()
  },
  mounted () {
    if (this.user.role === 'employee') {
      this.$store.dispatch('getTaskAmount')
    } else {
      this.$store.dispatch('getSummaryOwner')
    }
  },
  computed: {
    ...mapState(['timestamp', 'taskAmount', 'isLoading', 'summaryOwner'])
  },
  methods: {
    ...mapMutations(['setTimestamp'])
  }
}
</script>

<style></style>
