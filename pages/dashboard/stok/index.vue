<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12">
    <div class="container-inner p-4">
      <div>
        <StokListProduct
          :filtered-stok="
            role === 'owner' ? stokByBranch : getFilteredStokByCategory
          "
          :filtered-dropdown="role === 'owner' ? branchDropdown : getCategory"
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
    ...mapState(['branchDropdown']),
    ...mapState('stok', ['stokBarang', 'stokByBranch', 'isLoading']),
    getCategory () {
      return this.stokBarang
        .map(({ category }) => ({ category }))
        .filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              t => t.place === value.place && t.category === value.category
            )
        )
    },
    getFilteredStokByCategory () {
      if (this.dropdownValue !== 'all') {
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
    this.$store.dispatch('getBranchDropdown')
  },
  updated () {},
  methods: {
    ...mapMutations(['setPageTitle']),
    setValueDropdown (e) {
      this.dropdownValue = e
      if (this.dropdownValue !== 'all' && this.role === 'owner') {
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
