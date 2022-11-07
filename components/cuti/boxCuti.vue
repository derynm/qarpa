<template>
  <div
    :class="`card-box-cuti flex flex-col text-center rounded-md gap-1 ${color} text-white min-w-[100px] min-h-[70px] flex flex-col justify-center items-center`"
  >
    <p>{{ total }}</p>
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  props: {
    total: { type: Number, default: null },
    color: { type: String, default: '' },
    status: { type: String, default: '' }
  }
}
</script>

<style>
select {
  outline: none;
}
</style>
