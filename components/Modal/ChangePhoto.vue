<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <div class="flex flex-col items-center">
        <input type="file" accept="image/*" @change="handleInput($event)">
        <div class="flex mt-5">
          <button-global
            text="Batal"
            :outlined="true"
            padding="py-2 px-2 min-w-[90px] mx-3"
            @click="$emit('closeModal')"
          />
          <button-global
            text="Update"
            color="bg-primary"
            padding="py-2 px-2 min-w-[90px] mx-3"
            @click="handleUpdate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeModal'],
  data () {
    return {
      dataPhoto: null
    }
  },
  methods: {
    handleInput (e) {
      this.dataPhoto = e.target.files[0]
    },
    handleUpdate () {
      this.$store
        .dispatch('updateNewProfile', this.dataPhoto)
        .then(() => {
          this.$emit('closeModal')
          this.$router.go()
        })
        .catch(() => alert('Gagal merubah avatar'))
    }
  }
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full h-44 p-3 mx-2;
}
</style>
