<template>
  <div
    class="card-bank p-4 flex justify-between border shadow-md rounded-md items-center"
  >
    <div class="left">
      <p>{{ item.username }}</p>
      <p>{{ item.account_number }}</p>
    </div>
    <div class="right flex items-center gap-3">
      <p class="font-bold">
        {{ item.bank.toUpperCase() }}
      </p>
      <IconsArrowRight color="black" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>

<style></style>
