<template>
  <div class="icon-menu shadow-md p-3 border-2">
    <div class="flex flex-col justify-center items-center">
      <IconsPosIcon />
      <p class="pt-4">
        {{ item }}
      </p>
    </div>
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
