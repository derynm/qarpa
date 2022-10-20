<template>
  <div>
    <DashboardComponent :title="pageTitle" />
    <Nuxt />
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
