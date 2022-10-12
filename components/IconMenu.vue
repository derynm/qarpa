<template>
  <div class="icon-menu shadow-md p-3 border-2 flex flex-col justify-center">
    <img
      src="https://cdn.discordapp.com/attachments/1029421569530929264/1029452214059667476/854049991865401374.gif"
      alt=""
    >
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
