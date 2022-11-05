<template>
  <div class="card-item flex flex-col p-2 gap-2 border text-center rounded-md">
    <p>{{ text }}</p>
    <p class="font-semibold">
      {{ money }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    money: { type: Number, default: null }
  }
}
</script>

<style></style>
