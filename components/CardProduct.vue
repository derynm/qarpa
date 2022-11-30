<template>
  <div
    class="item flex border rounded-lg shadow-md py-5 px-3 items-center"
    @click="clickCard"
  >
    <div>
      <img
        v-if="item.image"
        class="rounded-md h-[80px] w-[80px]"
        :src="item.image"
        alt="product"
      >
      <IconsPosIcon v-else class="rouded-md" />
    </div>
    <div class="item-detail pl-3 flex justify-between w-full">
      <div class="item-text">
        <p>{{ item.name }}</p>
        <p>Rp. {{ toRupiah }}</p>
      </div>
      <div class="detail" @click.stop="">
        <div v-if="showStok" class="stok">
          <p class="font-semibold">
            Stok
          </p>
          <p>{{ item.qty }}</p>
        </div>
        <div v-else class="button item-btn flex items-center gap-2">
          <ButtonGlobal
            text="-"
            class="w-8 h-8 sm:w-12 sm:h-12"
            :outlined="true"
            @click="decreaseCount"
          />
          <p>{{ count }}</p>
          <ButtonGlobal
            text="+"
            class="w-8 h-8 sm:w-12 sm:h-12"
            color="bg-primary"
            @click="incrementCount"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    showStok: {
      type: Boolean,
      default: false
    }
  },
  emits: ['incQty', 'decQty'],
  data() {
    return {
      count: 0,
      temp: this.item
    }
  },
  computed: {
    toRupiah() {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(this.item.selling_price)
    }
  },
  mounted() {
    if (this.item.qty_product) {
      this.count = this.item.qty_product
    }
  },
  methods: {
    clickCard() {
      if (this.showStok) {
        this.$router.push(`stok/edit-produk/${this.item.id}`)
      }
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--
        this.temp.qty_product = this.count
        this.$emit('decQty', this.temp)
      }
    },
    incrementCount() {
      if (this.count < this.item.qty) {
        this.count++
        this.temp.qty_product = this.count
        this.$emit('incQty', this.temp)
      }
    }
  }
}
</script>

<style></style>
