<template>
  <div class="card flex justify-between items-center border-2 rounded-lg p-3">
    <div class="left flex gap-2 items-center">
      <IconsPosIcon />
      <div class="bio">
        <div class="name">
          {{ item.name }}
        </div>
        <div class="email">
          {{ item.email }}
        </div>
      </div>
    </div>
    <div class="right btn flex justify-center pt-2 md:pt-0">
      <button class="p-2 border border-red-600 rounded-lg">
        <IconsTrash />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style></style>
