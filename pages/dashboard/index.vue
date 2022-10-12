<template>
  <div class="bg-gray-400 min-h-screen">
    <div
      class="nav flex justify-between py-10 items-center px-4 md:px-8 lg:px-12"
    >
      <div class="title-dashboard">
        <p class="text-2xl lg:text-3xl font-bold">
          QARPA
        </p>
      </div>
      <div
        class="icon grid justify-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <Profile
          class="icon-profile col-span-2 md:col-span-3 lg:col-span-4 border shadow-md rounded-lg p-2 grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center mr-1"
        />
        <Notification
          class="icon-notif border shadow-md rounded-lg p-2 flex justify-center items-center"
        />
      </div>
    </div>
    <div class="container mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl">
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center"
      >
        <IconMenu
          v-for="item in itemMenu"
          :key="item"
          class="w-36 md:w-44"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemMenu: [
        'Point of Sales',
        'Work Order Management',
        'Attendace',
        'Timeoff',
        'Inventory'
      ]
    }
  }
}
</script>

<style></style>
