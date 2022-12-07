<template>
  <div>
    <div class="isEmpty px-2">
      <div class="btn mb-6">
        <div class="input">
          <input
            v-model="tgl"
            type="date"
            class="border-2 p-2 rounded-lg"
            @change="test(tgl)"
          >
        </div>
      </div>
      <div class="container text-center min-h-[65vh] flex items-center">
        <p class="mx-[15%]">
          Belum ada tanggal yang dipilih Silahkan pilih tanggal terlebih dahulu
          untuk melihat rekapan kas
        </p>
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
      btn: null,
      temp: {},
      tgl: null
    }
  },
  created () {
    this.setPageTitle('Audit')
  },
  mounted () {
    this.getSummary()
  },
  methods: {
    ...mapMutations(['setPageTitle']),
    getSummary () {
      this.$axios
        .$get('company/expenses_incomes')
        .then(response => response.data)
    },
    test (id) {
      this.$router.push(`${this.$route.path}/${id}`)
    }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>
