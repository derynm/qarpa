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
      <div class="item-btn flex items-center gap-2" @click.stop="">
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
      return new Intl.NumberFormat(['ban', 'id']).format(this.item.price)
    }
    // countQty () {
    //   this.temp.qty = this.count
    //   return this.temp
    // }
  },
  methods: {
    tesClick () {
      console.log('click')
    },
    increaseCount () {
      this.count++
      this.temp.qty = this.count
      return this.$emit('plusQty', this.temp)
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
