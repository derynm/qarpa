<template>
  <div class="px-3">
    <div class="mb-5">
      <input
        v-model="sortDate"
        class="p-3 shadow-md rounded-md border-2"
        type="date"
      >
      <drop-down v-model="sort" :item="employees" :show-all="true" />
    </div>
    <div>
      <presensi-card-riwayat-presensi-owner
        v-for="(item, index) in filteredItem"
        :key="index"
        :item="item"
      />
      <h3
        v-if="filteredItem.length === 0"
        class="font-semibold text-lg text-center mt-60"
      >
        Tidak Ada Data
      </h3>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapMutations, mapState } from 'vuex'

export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      sort: 'Semua',
      sortDate: null,
      filteredItem: []
    }
  },
  async fetch ({ store }) {
    await store.dispatch('presensi/getAllPresensiOwner')
    await store.dispatch('dropdown/getEmployeeDropdown')
  },
  watch: {
    sort () {
      this.filterData()
    },
    sortDate () {
      this.filterData()
    }
  },
  created () {
    this.setPageTitle('Presensi')
    this.filteredItem = this.allPresensiOwner
  },
  computed: {
    ...mapState('presensi', ['allPresensiOwner']),
    ...mapState('dropdown', ['employees'])
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    filterData () {
      if (this.sort !== null) {
        this.filteredItem = this.allPresensiOwner.filter((e) => {
          return e.name === this.sort
        })
      }
      if (this.sort === 'Semua') {
        this.filteredItem = this.allPresensiOwner
      }
      if (this.sortDate !== null) {
        this.filteredItem = this.filteredItem.filter((e) => {
          const cd = moment(e.check_out, 'DD-MM-YYYY HH:mm').format(
            'YYYY-MM-DD'
          )
          return cd === this.sortDate
        })
      }
    }
  }
}
</script>

<style>
input:focus {
  outline: none;
}
</style>
