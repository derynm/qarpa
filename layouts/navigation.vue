<template>
  <div class="flex">
    <div class="max-w-2xl mx-auto">
      <DashboardComponent :title="pageTitle" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle () {
      return this.$store.state.pageTitle
    }
  }
}
</script>

<style></style>
