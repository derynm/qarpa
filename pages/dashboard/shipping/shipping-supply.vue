<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg w-full">
      <div class="mx-2 rounded-xl border-2 p-3 shadow md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Penerimaan Barang Supplier
          </h1>
        </div>
        <form>
          <div class="mb-3">
            <p>Nama Barang</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="productName"
                type="text"
                class="w-full rounded-xl p-2"
                placeholder="Nama Barang..."
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div class="grid grid-cols-4 gap-0 md:gap-2">
            <div class="mb-0 md:mb-3 col-span-4 md:col-span-3">
              <p>Jumlah Barang</p>
              <div
                class="my-2 rounded-xl border-2 border-solid border-black p-1"
              >
                <input
                  v-model="productAmount"
                  type="text"
                  class="w-full rounded-xl p-2"
                  placeholder="Jumlah Barang.."
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                >
              </div>
            </div>
            <div class="mb-3 col-span-2 md:col-span-1">
              <p>Satuan Unit</p>
              <div
                class="my-2 rounded-xl border-2 border-solid border-black p-1"
              >
                <select
                  v-model="unitProduct"
                  name="productUnit"
                  class="w-full rounded-xl p-2"
                >
                  <option
                    v-for="(value, index) in dataUnit"
                    :key="index"
                    :value="value.unit"
                  >
                    {{ value.unit }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <p>Kondisi Barang</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <select
                v-model="conditionProduct"
                name="productUnit"
                class="w-full rounded-xl p-2"
              >
                <option
                  v-for="(value, index) in dataCondition"
                  :key="index"
                  :value="value.condition"
                >
                  {{ value.condition }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <p>Kategori Barang</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <select
                v-model="categoryProduct"
                name="productUnit"
                class="w-full rounded-xl p-2"
              >
                <option
                  v-for="(value, index) in dataCategory"
                  :key="index"
                  :value="value.category"
                >
                  {{ value.category }}
                </option>
              </select>
            </div>
          </div>
          <button-component text-fill="Tambah Costumer" class="w-full mb-3" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productName: '',
      productAmount: '',
      unitProduct: '',
      conditionProduct: '',
      categoryProduct: '',

      dataUnit: [{ id: 1, unit: 'KG' }],
      dataCondition: [
        { id: 1, condition: 'Baik' },
        { id: 2, condition: 'Reject' },
        { id: 3, condition: 'Kadaluwarsa' }
      ],
      dataCategory: [
        { id: 1, category: 'Bahan Baku' },
        { id: 2, category: 'Mentah' },
        { id: 3, category: 'Sudah Jadi' }
      ]
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
select:focus {
  outline: none;
}
</style>
