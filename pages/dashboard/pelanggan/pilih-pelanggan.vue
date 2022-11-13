<template>
  <div class="container p-4">
    <SearchBar
      v-model="searchValue"
      placeholder="Cari Pelanggan"
      class="mb-10"
    />
    <div class="content min-h-[65vh] flex flex-col justify-between">
      <div v-if="!isLoading" class="customer-card flex flex-col gap-3">
        <PosCardCustomer
          v-for="item in filteredList"
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
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      searchValue: ''
    }
  },
  async fetch ({ store }) {
    await store.dispatch('pos/getDataCustomer')
  },
  computed: {
    filteredList () {
      return this.dataCustomer.filter((post) => {
        return post.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    },
    ...mapState('pos', ['dataCustomer'])
  },
  created () {
    this.setPageTitle('Pilih Pelanggan')
  },
  mounted () {
    console.log(this.dataCustomer)
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleDelete (id) {
      this.$store.dispatch('pos/deleteCustomer', id)
    },
    ...mapActions('pos', ['getDataCustomer', 'deleteCustomer'])
  }
}
</script>

<style></style>
