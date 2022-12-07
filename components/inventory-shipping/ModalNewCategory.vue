<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <h3 class="font-semibold text-xl">
        Kategori
      </h3>
      <input-field-basic-input
        v-model="form.name"
        label="Kategori Baru"
        placeholder="Kategori Baru"
      />

      <div class="flex justify-center">
        <button-global
          outlined
          padding="p-3"
          text="Batal"
          class="mr-3"
          @click="$emit('closeModal')"
        />
        <button-global
          :disabled="isDisable"
          color="bg-primary"
          padding="p-3"
          text="Yakin"
          @click="NewCategories"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      form: {
        name: ''
      },
      isDisable: true
    }
  },
  watch: {
    'form.name' () {
      this.handleButton()
    }
  },
  methods: {
    ...mapActions('shipping', ['postNewCategories']),
    ...mapMutations('shipping', ['setIsLoading']),
    NewCategories () {
      this.postNewCategories(this.form)
        .then(() => this.$emit('closeModal'))
        .catch((err) => {
          console.log(err)
          this.setIsLoading(false)
        })
    },
    handleButton () {
      if (this.form.name === null || this.form.name === '') {
        this.isDisable = true
      } else {
        this.isDisable = false
      }
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
  @apply flex flex-col justify-around bg-white shadow rounded-md max-w-lg w-full p-6 mx-2;
}
</style>
