<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <div class="flex flex-col items-center">
        <div v-if="!isLoading" class="flex flex-col items-center">
          <input
            type="file"
            class="file:bg-primary file:rounded-md file:text-white file:border-none file:px-2 file:py-1"
            accept="image/png, image/jpeg, image/jpg"
            @change="handleInput($event)"
          >
          <div v-if="imageValid" class="pl-3 my-1 flex">
            <IconsWarningIcon />
            <p class="ml-1 text-danger text-[10px] font-semibold">
              Ukuran gambar maksimmum 1 MB
            </p>
          </div>
          <p class="ml-1 my-1 text-slate-400 text-[10px] font-semibold">
            Ukuran gambar yang di upload maksimal 1MB dengan format
            .jpeg/.jpg/.png
          </p>
          <div class="flex mt-2">
            <button-global
              text="Batal"
              :outlined="true"
              padding="py-1 px-2 min-w-[90px] mx-3"
              @click="$emit('closeModal')"
            />
            <button-global
              text="Update"
              color="bg-primary"
              padding="py-1 px-2 min-w-[90px] mx-3"
              :disabled="isDisable"
              @click="handleUpdate"
            />
          </div>
        </div>
        <loading v-else />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeModal'],
  data () {
    return {
      dataPhoto: null,
      imageValid: null,
      isDisable: true,
      isLoading: false
    }
  },
  watch: {
    dataPhoto () {
      if (this.dataPhoto) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
    }
  },
  methods: {
    handleInput (e) {
      this.dataPhoto = e.target.files[0]
      if (this.dataPhoto?.size > 1100000) {
        this.imageValid = true
        setTimeout(() => {
          this.imageValid = false
        }, '5000')
        this.dataPhoto = null
      }
    },
    handleUpdate () {
      this.isLoading = true
      this.$store
        .dispatch('updateNewProfile', this.dataPhoto)
        .then(() => {
          this.$emit('closeModal')
          this.isLoading = false
          this.$router.go()
        })
        .catch(() => {
          this.isLoading = false
          alert('Gagal merubah avatar')
        })
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
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full max-h-48 px-3 py-7 mx-2;
}
</style>
