<template>
  <div class="flex">
    <div class="max-w-2xl mx-auto w-full bg-white min-h-screen">
      <DashboardComponent
        :title="pageTitle"
        class="px-12"
        :back="false"
        :home="false"
      />
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
