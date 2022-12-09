<template>
  <div>
    <div class="dropdown my-4">
      <select
        id=""
        v-model="dropdownValue"
        class="w-full rounded-lg px-3 py-2 border-2 border-black"
        name=""
        @change="setDropdown"
      >
        <option :value="0">
          {{ role === 'owner' ? 'Pilih Cabang' : 'Pilih Kategori' }}
        </option>
        <option
          v-for="item in filteredDropdown"
          :key="role === 'owner' ? item.id : item.id"
          :value="role === 'owner' ? item.id : item.id"
          class="capitalize"
        >
          {{ role === 'owner' ? item.value : item.value }}
        </option>
      </select>
    </div>
    <div class="content min-h-[70vh] flex flex-col justify-between">
      <div v-if="isLoading" />
      <div v-if="isLoading" class="loading flex">
        <Loading class="m-auto" />
      </div>
      <div v-if="!isLoading">
        <div
          v-if="dropdownValue === 0 && role === 'owner'"
          class="empty flex flex-col items-center text-center mt-10"
        >
          <IconsKosong />
          <p class="font-semibold">
            Belum ada cabang yang dipilih nih
          </p>
          <p>
            Kamu perlu pilih cabang dulu, untuk melihat stok produk terkini dari
            cabangmu
          </p>
        </div>
        <div
          v-if="dropdownValue !== 0 && role === 'owner'"
          class="dynamic-component flex flex-col gap-5"
        >
          <CardProduct
            v-for="item in filteredStok"
            :key="item.id"
            :item="item"
            :show-stok="true"
            :id-cabang="branchId"
          />
        </div>
        <div
          v-if="role === 'employee'"
          class="dynamic-component flex flex-col gap-5"
        >
          <CardProduct
            v-for="item in filteredStok"
            :key="item.id"
            :item="item"
            :show-stok="true"
          />
        </div>
      </div>
      <div class="btn flex justify-end my-4">
        <nuxt-link
          :to="{ path: 'stok/tambah-produk', query: { cabang: branchId } }"
        >
          <ButtonComponent
            class="p-2"
            :disabled="branchId === 0 ? true : false"
            text-fill="+ Produk"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredDropdown: {
      type: Array,
      default: () => []
    },
    filteredStok: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    branchId: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      dropdownValue: 0,
      role: this.$auth.user.role
    }
  },
  methods: {
    setDropdown () {
      this.$emit('filter', this.dropdownValue)
    }
  }
}
</script>

<style></style>
