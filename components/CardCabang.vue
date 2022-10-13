<template>
  <div class="shadow-md p-4">
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl md:text-2xl">
        {{ item.name }}
      </p>
      <ButtonComponent :text-fill="'Buka'" />
    </div>
    <div class="content flex justify-around text-center pt-4">
      <div class="profit">
        <p>Total Pendapatan</p>
        <p class="text-3xl py-2">
          {{ item.pendapatan }}
        </p>
      </div>
      <div class="order">
        <p>Total Order</p>
        <p class="text-3xl py-2">
          {{ item.order }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
