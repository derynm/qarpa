<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg bg-white shadow w-full text-center p-5">
      <h1 class="text-3xl font-bold mb-8">
        Barang Terkirim
      </h1>
      <SuccessShipping class="h-72 mx-auto" />
      <p class="my-8">
        Stok sudah terupdate, mohon di cek bagian inventory
      </p>
      <button-component class="w-full" text-fill="Selesai" />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue'
import SuccessShipping from '~/components/icons/icons-shipping/successShipping.vue'
export default {
  components: { ButtonComponent, SuccessShipping }
}
</script>

<style></style>
