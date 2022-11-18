<template>
  <div class="flex flex-col border rounded-lg shadow-md p-3 mb-3">
    <div class="flex w-full justify-between mb-3">
      <h2 class="text-lg font-bold">
        {{ destinasi }}
      </h2>

      <div>
        <p>pelanggan</p>
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
    <div class="mb-3">
      <p>{{ 'Dikirim : ' + dikirim }}</p>
      <p>{{ 'Diterima : ' + diterima }}</p>
    </div>
    <button-global
      v-if="button"
      color="bg-warm"
      padding="p-2"
      text="Tandai Selesai"
    />
  </div>
</template>

<script>
export default {
  props: {
    destinasi: { type: String, default: null },
    status: { type: String, default: null },
    kondisi: { type: String, default: null },
    dikirim: { type: String, default: null },
    diterima: { type: String, default: null },
    button: { type: Boolean, default: false }
  }
}
</script>

<style></style>
