<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="container-inner p-4">
      <div>
        <StokListProduct
          :filtered-stok="
            role === 'owner' ? stokByBranch : getFilteredStokByCategory
          "
          :filtered-dropdown="role === 'owner' ? branch : categories"
          :is-loading="isLoading"
          :branch-id="dropdownValue"
          @filter="setValueDropdown"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      dropdownValue: 0,
      role: this.$auth.user.role
    }
  },
  async fetch ({ store }) {
    await store.dispatch('stok/getStokBarang')
  },
  computed: {
    ...mapState('dropdown', ['branch', 'categories']),
    ...mapState('stok', ['stokBarang', 'stokByBranch', 'isLoading']),
    getFilteredStokByCategory () {
      if (this.dropdownValue !== 0) {
        return this.stokBarang.filter(e => e.category === this.dropdownValue)
      } else {
        return this.stokBarang
      }
    }
  },
  created () {
    this.setPageTitle('Total Stok')
  },
  mounted () {
    this.$store.dispatch('dropdown/getBranchDropdown')
    this.$store.dispatch('dropdown/getCategoriesDropdown')
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    setValueDropdown (e) {
      this.dropdownValue = e
      if (this.dropdownValue !== 0 && this.role === 'owner') {
        this.$store.dispatch('stok/getStokByBranch', this.dropdownValue)
      }
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>
