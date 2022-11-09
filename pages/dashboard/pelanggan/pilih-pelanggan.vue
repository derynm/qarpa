<template>
  <div class="container p-4">
    <SearchBar placeholder="Cari Pelanggan" class="mb-10" />
    <div class="content min-h-[65vh] flex flex-col justify-between">
      <div v-if="!isLoading" class="customer-card flex flex-col gap-3">
        <PosCardCustomer
          v-for="item in dataCustomer"
          :key="item.id"
          :item="item"
          @click="handleDelete"
        />
      </div>
      <div v-if="isLoading" class="loading flex">
        <Loading class="mx-auto" />
      </div>
      <div class="btn flex justify-end">
        <nuxt-link to="tambah-pelanggan">
          <ButtonGlobal text="+ Customer" padding="p-2" color="bg-primary" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      dataCustomer: '',
      isLoading: false
    }
  },
  created () {
    this.setPageTitle('Pilih Pelanggan')
  },
  mounted () {
    this.handleGetData()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleDelete (id) {
      try {
        this.isLoading = true
        this.$axios.$delete(`customers/${id}`).then(() => {
          this.handleGetData()
          this.isLoading = false
        })
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
      // .then(location.reload())
      // console.log(this.item.id)
    },
    handleGetData () {
      this.isLoading = true
      this.$axios
        .$get('customers')
        // .then(response => console.log(response.data))
        .then((response) => {
          this.dataCustomer = response.data
          this.isLoading = false
        })
    }
  }
}
</script>

<style></style>
