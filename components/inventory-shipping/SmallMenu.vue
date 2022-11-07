<template>
  <div tabindex="0" @blur="hideMenu = true">
    <div
      :class="`${
        hideMenu
          ? 'bg-white'
          : 'bg-warm justify-between w-[120px] absolute -left-[7.5rem]'
      } flex p-1 `"
      @click="showMenu"
    >
      <div v-if="!hideMenu" class="text-white" @click.stop="">
        <p>Tandai Selesai</p>
        <p>Lihat Detail</p>
      </div>
      <icons-icons-wom-menu
        :color="hideMenu ? 'black' : 'white'"
        @click="showMenu"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideMenu: true
    }
  },
  methods: {
    showMenu () {
      this.hideMenu = !this.hideMenu
    }
  }
}
</script>

<style></style>
