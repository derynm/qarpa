<template>
  <div class="container flex flex-col px-2">
    <div class="dropdown my-3">
      <select id="" v-model="filterValue" class="border rounded-md p-2" name="">
        <option value="">
          Status Cuti
        </option>
        <option value="Menunggu">
          Menunggu
        </option>
        <option value="Ditolak">
          Ditolak
        </option>
        <option value="Disetujui">
          Disetujui
        </option>
      </select>
    </div>
    <div class="content flex flex-col justify-between">
      <div class="content-card">
        <CutiCardCuti
          show-button="true"
          filter="Menunggu"
          :filter-value="filterValue"
          jenis-izin="Liburan"
          status="Menunggu"
          tgl-mulai="1/10/2022"
          tgl-berakhir="5/10/2022"
        />
        <CutiCardCuti
          show-button="true"
          filter="Disetujui"
          :filter-value="filterValue"
          jenis-izin="Sakit"
          status="Disetujui"
          tgl-mulai="1/10/2022"
          tgl-berakhir="5/10/2022"
        />
        <CutiCardCuti
          show-button="true"
          filter="Ditolak"
          :filter-value="filterValue"
          jenis-izin="Izin"
          status="Ditolak"
          tgl-mulai="1/10/2022"
          tgl-berakhir="5/10/2022"
        />
        <!-- <CutiCardCuti
          v-for="item in listCuti" :key="item.id"

            :jenis-izin="item.title"
            status="Ditolak"
            tgl-mulai="1/10/2022"
            tgl-berakhir="5/10/2022"
          /> -->
      </div>
      <div class="btn flex justify-end my-5">
        <nuxt-link to="cuti/ajukan-cuti">
          <ButtonGlobal text="+ Cuti" color="bg-primary" padding="py-2 px-5" />
        </nuxt-link>
      </div>
      {{ listCuti }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      filterValue: '',
      listCuti: ''
    }
  },
  created () {
    this.setPageTitle('Cuti')
  },
  mounted () {
    this.$axios
      .get('leave_managements')
      // .then(response => (this.listCuti = response.data))
      .then(response => console.log(response.data.data))
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
