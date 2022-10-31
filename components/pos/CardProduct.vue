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
        <ButtonComponent
          class="w-8 h-8 sm:w-12 sm:h-12"
          text-fill="-"
          @clicked="tesClick2"
        />
        <p>1</p>
        <ButtonComponent
          class="w-8 h-8 sm:w-12 sm:h-12"
          text-fill="+"
          @clicked="tesClick2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tesClick () {
      console.log('click')
    },
    tesClick2 () {
      console.log('clickbutton')
    }
  }
}
</script>

<style></style>
