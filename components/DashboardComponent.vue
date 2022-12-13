<template>
  <div class="nav flex justify-between py-10 items-center px-4">
    <div :class="headerClass">
      <div v-if="back" class="cursor-pointer" @click="$router.go(-1)">
        <IconsBackIcon />
      </div>
      <div class="title-dashboard">
        <p class="text-xl lg:text-3xl font-bold">
          {{ title }}
        </p>
      </div>
      <div />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    notif: Boolean,
    back: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    IconClass () {
      return {
        'icon grid justify-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5':
          this.notif,
        'icon grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4':
          !this.notif
      }
    },
    headerClass () {
      return {
        'flex justify-between items-center gap-8 w-full': this.back,
        'flex justify-center items-center gap-8 w-full': !this.back
      }
    }
  }
}
</script>

<style></style>
