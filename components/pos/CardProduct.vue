<template>
  <div
    class="item flex border rounded-lg shadow-md py-5 px-3 items-center"
    @click="tesClick"
  >
    <IconsPosIcon class="rouded-lg" />
    <div class="item-detail pl-3 flex justify-between w-full">
      <div class="item-text">
        <p class="capitalize">
          {{ item.name }}
        </p>
        <p>Rp. {{ formatPrice }}</p>
      </div>
      <div class="flex items-center">
        <div v-if="item.quantity < 1" class="empty flex items-center">
          <p>Stok Habis</p>
        </div>
        <div v-else class="item-btn flex items-center gap-2" @click.stop="">
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
            @click="increaseCount"
          />
        </div>
      </div>
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
      count: 0,
      temp: this.item
    }
  },
  computed: {
    formatPrice () {
      return new Intl.NumberFormat(['ban', 'id']).format(
        this.item.selling_price
      )
    }
  },
  methods: {
    tesClick () {
      console.log('click')
    },
    increaseCount () {
      if (this.count < this.item.quantity) {
        this.count++
        this.temp.qty = this.count
        return this.$emit('plusQty', this.temp)
      }
    },
    decreaseCount () {
      if (this.count > 0) {
        this.count--
        this.temp.qty = this.count
        return this.$emit('minQty', this.temp)
      }
    }
  }
}
</script>

<style></style>
