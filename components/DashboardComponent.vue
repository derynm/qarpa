<template>
  <div
    class="nav flex justify-between py-10 items-center px-4 md:px-8 lg:px-12"
  >
    <div class="title-dashboard">
      <p class="text-xl lg:text-3xl font-bold">
        {{ title }}
      </p>
    </div>
    <div
      class="icon grid justify-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      <Profile
        class="icon-profile col-span-2 md:col-span-3 lg:col-span-4 border shadow-md rounded-lg p-2 grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center mr-1"
      />
      <Notification
        v-if="notif"
        class="icon-notif border shadow-md rounded-lg p-2 flex justify-center items-center"
      />
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
    notif: Boolean
  }
}
</script>

<style></style>
