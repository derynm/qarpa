<template>
  <div class="grid grid-cols-12 shadow-md p-4">
    <div class="max-h-[72px] max-w-[72px] col-span-2 mx-auto">
      <img class="rounded-full" src="@/assets/image.png" alt="product">
    </div>
    <div class="col-span-7">
      <h3 class="font-semibold">{{ product_name }}</h3>
      <p>{{ stock }}</p>
      <p>Rp.{{ price }}</p>
    </div>
    <div class=" flex justify-around items-center col-span-5 md:col-span-3 pt-7 md:pt-0">
      <button
        class="bg-primary w-[36px] h-[36px] rounded text-white font-extrabold"
      >
        -
      </button>
      <p>2</p>
      <button
        class="bg-primary w-[36px] h-[36px] rounded text-white font-extrabold"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_name: { type: String, default: null },
    stock: { type: String, default: null },
    price: { type: String, default: null }
  }
}
</script>

<style></style>
