<template>
  <nuxt-link to="dashboard/profile">
    <div
      class="profile bg-[#354497] flex justify-between text-white items-center rounded-xl mt-[-30px]"
    >
      <div class="left flex items-center">
        <IconsPosIcon class="rounded-full p-2" />
        <div class="bio">
          <p class="name">
            {{ user.name }}
          </p>
          <p v-if="user.role === 'owner'" class="role">
            Pemilik Usaha
          </p>
          <p v-if="user.role === 'karyawan'" class="role">
            Karyawan
          </p>
        </div>
      </div>
      <div class="right px-4">
        <IconsArrowRight color="white" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style></style>
