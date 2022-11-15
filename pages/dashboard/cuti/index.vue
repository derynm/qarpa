<template>
  <div class="container flex flex-col px-2">
    <div class="box-cuti flex gap-2 mx-auto">
      <CutiBoxCuti
        color="bg-[#6db570]"
        :total="employeeCuti.disetujui"
        status="Disetujui"
      />
      <CutiBoxCuti
        color="bg-[#f7b548]"
        :total="employeeCuti.menunggu"
        status="Menuggu"
      />
      <CutiBoxCuti
        color="bg-[#d61c4e]"
        :total="employeeCuti.ditolak"
        status="Ditolak"
      />
    </div>
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
        />
      </div>
      <div class="btn flex justify-end my-5">
        <nuxt-link to="cuti/ajukan-cuti">
          <ButtonGlobal text="+ Cuti" color="bg-primary" padding="py-2 px-5" />
        </nuxt-link>
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
      filterValue: 'all',
      filteredList: []
    }
  },
  async fetch ({ store }) {
    await store.dispatch('cuti/getEmployeeCuti')
  },
  computed: {
    ...mapState('cuti', ['isLoading', 'employeeCuti'])
  },
  created () {
    this.setPageTitle('Cuti')
  },
  mounted () {
    console.log(this.employeeCuti)
    this.filteredList = this.employeeCuti.data
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    ...mapActions('cuti', ['getEmployeeCuti']),
    filterCard (ele) {
      if (ele === 'all') {
        return (this.filteredList = this.employeeCuti.data)
      } else {
        this.filteredList = this.employeeCuti.data.filter((e) => {
          return e.leave_status === ele
        })
      }
    }
  }
}
</script>

<style></style>
