<template>
  <div class="card-item flex flex-col p-2 gap-2 border text-center rounded-md">
    <p>{{ text }}</p>
    <p class="font-semibold">
      Rp.{{ toRupiah(money) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' },
    money: { type: Number, default: null }
  },
  methods: {
    toRupiah (ele) {
      return new Intl.NumberFormat('id-ID', {
        currency: 'IDR'
      }).format(ele)
    }
  }
}
</script>

<style></style>
