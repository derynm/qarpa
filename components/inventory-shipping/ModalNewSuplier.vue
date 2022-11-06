<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <h3 class="font-semibold text-xl">Suplier</h3>
      <input-field-basic-input label="Nama Suplier" placeholder="Nama" />
      <input-field-basic-input label="Alamat" placeholder="Alamat" />
      <input-field-basic-input
        label="Nomor Handphone"
        placeholder="Nomor Handphone"
        type="number"
      />
      <input-field-basic-input label="Email" placeholder="Email" />
      <div class="flex justify-center">
        <button-global outlined padding="p-3" text="Batal" class="mr-3" />
        <button-global color="bg-primary" padding="p-3" text="Yakin" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around bg-white shadow rounded-md max-w-lg w-full p-6 mx-2;
}
</style>
