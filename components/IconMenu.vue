<template>
  <div class="icon-menu shadow-md p-3 border-2 flex flex-col justify-center">
    <nuxt-link to="dashboard/pos">
      <img
        src="https://cdn.discordapp.com/attachments/1029421569530929264/1029452214059667476/854049991865401374.gif"
        alt=""
      >
      <p class="pt-4">
        {{ item }}
      </p>
    </nuxt-link>
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
  }
}
</script>

<style></style>
