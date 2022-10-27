<template>
  <div
    class="profile flex justify-between bg-[#344397] text-white items-center rounded-xl mt-[-30px]"
  >
    <div class="left flex items-center">
      <IconsPosIcon class="rounded-full p-2" />
      <div class="bio">
        <p class="name">
          Nadya Loppies
        </p>
        <p class="role">
          Pemilik Usaha
        </p>
      </div>
    </div>
    <div class="right px-4">
      <nuxt-link to="/profile">
        <IconsArrowRight />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
