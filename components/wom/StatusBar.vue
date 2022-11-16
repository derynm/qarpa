<template>
  <div class="text-white">
    <div :class="statusCardColor">
      {{ statusText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: ''
    }
  },
  computed: {
    statusCardColor () {
      return {
        'bg-green-600 w-28 py-1 flex justify-center rounded-lg':
          this.status === 'done',
        'bg-orange-600 w-28 py-1 flex justify-center rounded-lg':
          this.status === 'todo'
      }
    },
    statusText () {
      if (this.status === 'todo') {
        return 'Proses'
      } else {
        return 'Selesai'
      }
    }
  }
}
</script>

<style></style>
