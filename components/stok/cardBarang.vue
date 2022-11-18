<template>
  <div
    class="card-barang flex justify-between border shadow-md rounded-md py-3 px-2 cursor-pointer"
    @click="editStok"
  >
    <div class="left flex gap-2">
      <IconsPosIcon />
      <div class="text-barang flex flex-col justify-center">
        <p class="font-semibold">
          {{ item.name }}
        </p>
        <p>Rp. {{ formatPrice }}</p>
      </div>
    </div>
    <div class="right flex flex-col justify-center">
      <p class="font-semibold">
        Stok
      </p>
      <p>{{ item.quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatPrice () {
      return new Intl.NumberFormat(['ban', 'id']).format(this.item.price)
    }
  },
  methods: {
    editStok () {
      this.$router.push(`stok/edit-produk/${this.item.id}`)
    }
  }
}
</script>

<style></style>
