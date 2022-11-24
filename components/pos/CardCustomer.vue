<template>
  <div
    class="card flex justify-between items-center shadow-md border p-2 cursor-pointer"
    @click="$emit('getPelanggan', item.name, item.id)"
  >
    <div class="content flex justify-between md:justify-start">
      <div class="text text-left">
        <p class="font-semibold">
          {{ item.name }}
        </p>
        <div class="alamat flex gap-2">
          <p>Alamat :</p>
          <p>{{ item.address }}</p>
        </div>
        <div class="kontak flex gap-2">
          <p>Kontak :</p>
          <p>{{ item.phone }}</p>
        </div>
      </div>
    </div>
    <div class="btn flex justify-center pt-2 md:pt-0">
      <button
        class="p-2 border border-red-600 rounded-lg"
        @click="$emit('click', item.id)"
      >
        <IconsTrash />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  emits: ['click'],
  methods: {}
}
</script>

<style></style>
