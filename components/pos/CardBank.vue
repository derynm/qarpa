<template>
  <div
    class="card-bank p-2 flex justify-between border shadow-md rounded-md items-center"
  >
    <div class="left">
      <p>Nadya Loppies</p>
      <p>78262627</p>
    </div>
    <div class="right flex items-center gap-3">
      <p class="font-bold">
        {{ bank }}
      </p>
      <IconsArrowRight color="black" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bank: String
  }
}
</script>

<style></style>
