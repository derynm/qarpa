<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal text-center bg-white h-[90%] w-[90%] md:w-[500px] p-2 my-auto rounded-md"
    >
      <div class="container p-4">
        <SearchBar
          v-model="searchValue"
          placeholder="Cari Pelanggan"
          class="mb-10"
        />
        <div class="content min-h-[65vh] flex flex-col justify-between">
          <div
            v-if="!isLoading"
            class="customer-card flex flex-col gap-3 h-[400px] overflow-y-auto"
          >
            <PosCardCustomer
              v-for="item in filteredList"
              :key="item.id"
              class="snap-start"
              :item="item"
              @click="handleDelete"
              @getPelanggan="setPelanggan"
            />
          </div>
          <div v-if="isLoading" class="loading flex items-center min-h-[50vh]">
            <Loading class="m-auto" />
          </div>
          <div class="btn flex justify-end">
            <!-- <nuxt-link to="tambah-pelanggan"> -->
            <ButtonGlobal
              text="+ Customer"
              padding="p-2"
              color="bg-primary"
              @click="$emit('showModal')"
            />
            <!-- </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      searchValue: ''
    }
  },
  // async fetch ({ store }) {
  //   await store.dispatch('pos/getDataCustomer')
  // },
  computed: {
    filteredList () {
      return this.dataCustomer.filter((post) => {
        return post.name.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    },
    ...mapState('pos', ['dataCustomer', 'isLoading'])
  },
  created () {
    this.setPageTitle('Pilih Pelanggan')
  },
  mounted () {
    this.$store.dispatch('pos/getDataCustomer')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    handleDelete (id) {
      this.$store.dispatch('pos/deleteCustomer', id)
    },
    setPelanggan (name, id) {
      this.$emit('getPelanggan', name, id)
    }
  }
}
</script>

<style></style>
