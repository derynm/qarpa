<template>
  <div class="card flex justify-between border-b px-3 py-2">
    <div class="left">
      <p>{{ item.name }}</p>
      <p>Rp. {{ formatPrice + ' x ' + item.qty_product }}</p>
    </div>
    <div class="right flex items-end">
      <p>Rp. {{ formatPriceTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      total: null
    }
  },
  computed: {
    formatPrice () {
      return new Intl.NumberFormat(['ban', 'id']).format(this.item.price)
    },
    formatPriceTotal () {
      return new Intl.NumberFormat(['ban', 'id']).format(this.total)
    }
  },
  mounted () {
    this.getTotal()
    this.$emit('getSubTotal', this.total)
  },
  methods: {
    getTotal () {
      this.total = this.item.price * this.item.qty_product
    }
  }
}
</script>

<style></style>
