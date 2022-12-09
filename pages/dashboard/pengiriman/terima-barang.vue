<template>
  <div class="flex flex-col justify-between mx-3 h-screen">
    <div>
      <input-field-drop-down-input
        v-model="form.supplier"
        place-holder="Supplier"
        label="Nama Suplier"
        :item="supplier"
      />
      <p
        class="text-primary font-semibold ml-6 cursor-pointer"
        @click="handleModalNewSupplier"
      >
        + Tambah Suplier Baru
      </p>
      <input-field-basic-input
        v-model="form.namaProduk"
        label="Nama Produk"
        placeholder="Nama Produk"
      />
      <div class="grid grid-cols-4 gap-2">
        <input-field-basic-input
          v-model="form.jumlah"
          label="Jumlah"
          placeholder="Jumlah"
          class="col-span-2 md:col-span-3"
        />
        <input-field-drop-down-input
          v-model="form.satuan"
          class="col-span-2 md:col-span-1"
          label="Satuan"
          :use-name="true"
          :item="unit"
        />
      </div>
      <!-- <input-field-drop-down-input
        v-model="form.kondisi"
        place-holder="Kondisi Barang"
        label="Kondisi Barang"
        :item="condition"
        :use-name="true"
      /> -->
      <input-field-drop-down-input
        v-model="form.kategori"
        place-holder="Kategori"
        label="Kategori"
        :item="categories"
      />
      <p
        class="text-primary font-semibold ml-6 cursor-pointer"
        @click="handleModalNewCategories"
      >
        + Tambah Kategori Baru
      </p>
      <input-field-basic-input
        v-model="form.hargaBarang"
        label="Harga Barang"
        placeholder="Harga Barang"
      />
      <input-field-basic-input
        v-model="form.totalHarga"
        label="Total Harga"
        placeholder="Total Harga"
        class="mb-3"
      />
      <drop-down
        v-if="!$auth.user.branch_id"
        v-model="form.cabang"
        place-holder="Pilih Cabang"
        class="w-full border-2 outline outline-2 mb-5"
        :item="branch"
        :use-id="true"
      />
      <div
        v-if="$auth.user.role === 'employee'"
        class="border-2 outline outline-2 mb-5 rounded-md"
      >
        <p class="py-2 px-3">
          cabang <b>{{ cabangById.name }}</b>
        </p>
      </div>
    </div>
    <button-global
      text="Terima Barang"
      color="bg-primary"
      padding="py-3"
      class="mb-3"
      :disabled="isDisable"
      @click="handleInput"
    />
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
      showNewCategoriesModal: false,
      form: {
        supplier: '',
        namaProduk: '',
        jumlah: '',
        satuan: '',
        kategori: '',
        hargaBarang: '',
        totalHarga: '',
        cabang: this.$auth.user.branch_id ?? ''
      },
      isDisable: true
    }
  },
  async fetch ({ store }) {
    await store.dispatch('dropdown/getSupplierDropdown')
    await store.dispatch('dropdown/getCategoriesDropdown')
    await store.dispatch('dropdown/getConditionDropdown')
    await store.dispatch('dropdown/getUnitDropdown')
    await store.dispatch('dropdown/getBranchDropdown')
  },
  computed: {
    ...mapState('dropdown', [
      'supplier',
      'categories',
      'condition',
      'unit',
      'branch'
    ]),
    ...mapState('pos', ['cabangById'])
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.checkInput()
      }
    }
  },
  mounted () {
    if (this.$auth.user.role === 'employee') {
      this.$store.dispatch('pos/getCabangById', this.$auth.user.branch_id)
    }
  },
  methods: {
    handleModalNewSupplier () {
      this.showNewSupplierModal = !this.showNewSupplierModal
    },
    handleModalNewCategories () {
      this.showNewCategoriesModal = !this.showNewCategoriesModal
    },
    checkInput () {
      this.isDisable = !Object.keys(this.form).every(e => this.form[e] !== '')
    },
    handleInput () {
      this.$store
        .dispatch('shipping/postReciveItem', this.form)
        .then(() => this.$router.replace('/dashboard/pengiriman'))
        .catch(() => alert('Input gagal'))
    }
  }
}
</script>

<style></style>
