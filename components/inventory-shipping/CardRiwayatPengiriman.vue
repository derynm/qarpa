<template>
  <div class="flex flex-col border rounded-lg shadow-md p-3 mb-3">
    <div class="flex w-full justify-between mb-3">
      <h2 class="text-lg font-bold">
        {{ destinasi }}
      </h2>

      <div class="relative">
        <inventory-shipping-small-menu class=""/>
      </div>
    </div>
    <div class="mb-2">
      <p>
        Status : <span class="font-semibold text-warm">{{ status }}</span>
      </p>
      <p>
        Kondisi : <span class="font-semibold text-warm">{{ kondisi }}</span>
      </p>
    </div>
    <div>
      <p>{{ 'Dikirim : ' + dikirim }}</p>
      <p>{{ 'Diterima : ' + diterima }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destinasi: { type: String, default: null },
    status: { type: String, default: null },
    kondisi: { type: String, default: null },
    dikirim: { type: String, default: null },
    diterima: { type: String, default: null }
  }
}
</script>

<style></style>
