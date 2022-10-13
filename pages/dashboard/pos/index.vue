<template>
  <div class="container px-4 md:px-8 lg:px-12 mx-auto">
    <div class="button flex pb-6">
      <ButtonComponent class="" :text-fill="'+ Tambah Cabang'" />
    </div>
    <div class="card-cabang grid grid-cols-1 md:grid-cols-2 gap-2">
      <CardCabang v-for="item in cabang" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard-pos',
  data () {
    return {
      cabang: [
        {
          id: 1,
          name: 'Cabang 1',
          pendapatan: 80,
          order: 53
        },
        {
          id: 2,
          name: 'Cabang 2',
          pendapatan: 40,
          order: 12
        },
        {
          id: 3,
          name: 'Cabang 3',
          pendapatan: 40,
          order: 12
        },
        {
          id: 4,
          name: 'Cabang 4',
          pendapatan: 40,
          order: 12
        }
      ]
    }
  }
  // container px-6 md:px-0 mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl
}
</script>

<style></style>
