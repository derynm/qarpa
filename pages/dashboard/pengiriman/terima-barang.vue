<template>
  <div class="flex flex-col justify-between mx-3 h-screen">
    <div>
      <input-field-drop-down-input
        place-holder="Supplier"
        label="Nama Suplier"
        :item="supplier"
      />
      <p
        class="text-primary font-semibold ml-6"
        @click="handleModalNewSupplier"
      >
        + Tambah Suplier Baru
      </p>
      <input-field-basic-input label="Nama Produk" placeholder="Nama Produk" />
      <div class="grid grid-cols-4 gap-2">
        <input-field-basic-input
          label="Jumlah"
          placeholder="Jumlah"
          class="col-span-2 md:col-span-3"
        />
        <input-field-drop-down-input
          class="col-span-2 md:col-span-1"
          label="Satuan"
          :item="unit"
        />
      </div>
      <input-field-drop-down-input
        place-holder="Kondisi Barang"
        label="Kondisi Barang"
        :item="condition"
      />
      <input-field-drop-down-input
        place-holder="Kategori"
        label="Kategori"
        :item="categories"
      />
      <p
        class="text-primary font-semibold ml-6"
        @click="handleModalNewCategories"
      >
        + Tambah Suplier Baru
      </p>
    </div>
    <button-global text="Terima Barang" color="bg-primary" padding="py-3" />
    <inventory-shipping-modal-new-suplier
      v-if="showNewSupplierModal"
      @closeModal="handleModalNewSupplier"
    />
    <inventory-shipping-modal-new-category
      v-if="showNewCategoriesModal"
      @closeModal="handleModalNewCategories"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'navigation',
  middleware: 'auth',
  data () {
    return {
      showNewSupplierModal: false,
      showNewCategoriesModal: false
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getSupplierDropdown')
    await store.dispatch('dropdown/getCategoriesDropdown')
    await store.dispatch('dropdown/getConditionDropdown')
    await store.dispatch('dropdown/getUnitDropdown')
  },
  computed: {
    ...mapState('dropdown', ['supplier', 'categories', 'condition', 'unit'])
  },
  methods: {
    handleModalNewSupplier () {
      this.showNewSupplierModal = !this.showNewSupplierModal
    },
    handleModalNewCategories () {
      this.showNewCategoriesModal = !this.showNewCategoriesModal
    }
  }
}
</script>

<style></style>
