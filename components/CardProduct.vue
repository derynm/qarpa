<template>
  <div
    class="item flex border rounded-lg shadow-md py-5 px-3 items-center"
    @click="tesClick"
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
          @click="incrementCount"
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
      default: () => ({})
    }
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    toRupiah () {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(this.item.price)
    }
  },
  methods: {
    tesClick () {
      console.log('click')
    },
    decreaseCount () {
      if (this.count > 0) {
        this.count--
      }
    },
    incrementCount () {
      if (this.count < this.item.quantity) {
        this.count++
      }
    }
  }
}
</script>

<style></style>
