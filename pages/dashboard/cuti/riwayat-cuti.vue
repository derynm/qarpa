<template>
  <div class="container flex flex-col px-2">
    <div class="dropdown my-3">
      <select
        id=""
        v-model="filterValue"
        class="border rounded-md py-2 pl-2 pr-4"
        name=""
        @change="filterCard(filterValue)"
      >
        <option value="all" selected>
          Status Cuti
        </option>
        <option value="menunggu">
          Menunggu
        </option>
        <option value="ditolak">
          Ditolak
        </option>
        <option value="disetujui">
          Disetujui
        </option>
      </select>
    </div>
    <div class="content flex flex-col justify-between">
      <div class="content-card">
        <CutiCardCuti
          v-for="item in filteredList"
          :key="item.id"
          :item="item"
          :show-button="true"
          @approve="approveCuti"
          @reject="rejectCuti"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      filteredList: [],
      filterValue: 'all'
    }
  },

  async fetch ({ store }) {
    await store.dispatch('cuti/getListCuti')
  },
  computed: {
    ...mapState('cuti', ['isLoading', 'listCuti'])
  },
  created () {
    this.setPageTitle('Cuti')
  },

  mounted () {
    // console.log(this.listCuti)
    this.filteredList = this.listCuti
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('cuti', ['getListCuti', 'setApprove', 'setReject']),
    filterCard (ele) {
      if (ele === 'all') {
        return (this.filteredList = this.listCuti)
      } else {
        this.filteredList = this.listCuti.filter((e) => {
          return e.status === ele
        })
      }
    },
    approveCuti (ele) {
      this.$store.dispatch('cuti/setApprove', ele).then(location.reload())
    },
    rejectCuti (ele) {
      this.$store.dispatch('cuti/setReject', ele).then(location.reload())
    }
  }
}
</script>

<style>
/* select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(https://stackoverflow.com/favicon.ico) 96% / 15% no-repeat
    #eee;
} */
</style>
