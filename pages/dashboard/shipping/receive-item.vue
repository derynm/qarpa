<template>
  <div class="flex flex-col justify-between px-3 h-screen">
    <div>
      <input-field-drop-down-input
        place-holder="Supplier"
        label="Nama Suplier"
      />
      <p class="text-primary font-semibold ml-6">
        + Tambah Suplier Baru
      </p>
      <input-field-drop-down-input
        place-holder="Supplier"
        label="Nama Suplier"
      />
      <div class="grid grid-cols-3 gap-2">
        <input-field-basic-input label="Jumlah Produk" placeholder="Jumlah" class="col-span-2"/>
        <input-field-drop-down-input
          place-holder="Satuan Unit"
          label="Satuan"
        />
      </div>
      <input-field-drop-down-input
        place-holder="Kondisi Barang"
        label="Kondisi Barang"
      />
      <input-field-drop-down-input place-holder="Kategori" label="Kategori" />
      <p class="text-primary font-semibold ml-6">
        + Tambah Suplier Baru
      </p>
    </div>
    <button-global text="Terima Barang" color="bg-primary" padding="py-3" />
    <!-- <inventory-shipping-modal-new-suplier /> -->
        <!-- <inventory-shipping-modal-new-category /> -->
  </div>
</template>

<script>
export default {
  layout: 'navigation'
}
</script>

<style></style>
