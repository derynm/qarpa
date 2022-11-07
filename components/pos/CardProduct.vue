<template>
  <div
    class="item flex border rounded-lg shadow-md py-5 px-3 items-center"
    @click="tesClick"
  >
    <IconsPosIcon class="rouded-lg" />
    <div class="item-detail pl-3 flex justify-between w-full">
      <div class="item-text">
        <p>Cappucinno</p>
        <p>Rp.15.000</p>
      </div>
      <div class="item-btn flex items-center gap-2" @click.stop="">
        <!-- <ButtonComponent
          class="w-8 h-8 sm:w-12 sm:h-12"
          text-fill="-"
          @clicked="tesClick2"
        /> -->
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
          @click="count++"
        />
        <!-- <ButtonComponent
          class="w-8 h-8 sm:w-12 sm:h-12"
          text-fill="+"
          @clicked="tesClick2"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
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
    }
  }
}
</script>

<style></style>
