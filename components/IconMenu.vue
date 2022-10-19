<template>
  <div
    class="icon-menu shadow-md p-3 border-2 flex flex-col justify-center items-center"
  >
    <IconsPosIcon />
    <p class="pt-4">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'NuxtIconMenu',
  props: {
    item: {
      type: String,
      required: true
    }
  },
  mounted () {
    console.log(this.item)
  }
}
</script>

<style></style>
