<template>
  <div class="icon-menu shadow-md p-3 border-2 flex flex-col justify-center items-center">
    <nuxt-link to="dashboard/pos">
      <IconsPosIcon />
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
