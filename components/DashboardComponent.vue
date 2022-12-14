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
      <div>
        <nuxt-link v-if="home" to="/dashboard">
          <IconsHome />
        </nuxt-link>
      </div>
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
    back: {
      type: Boolean,
      default: true
    },
    home: {
      type: Boolean,
      default: true
    }
  },
  computed: {
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
