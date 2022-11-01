<template>
  <div
    style="
      background-image: url('https://cdn.discordapp.com/attachments/1024706945304760320/1036946410106527905/Gradient_Asset-min.png');
    "
    class="profile flex justify-between text-white items-center rounded-xl mt-[-30px]"
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
        <IconsArrowRight color="white" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
