<template>
  <div class="modal-overlay" @click="$emit('closeModal')">
    <div class="modal-body" @click.stop="">
      <h3 class="font-semibold text-xl">
        Suplier
      </h3>
      <form>
        <input-field-basic-input
          v-model="form.name"
          label="Nama Suplier"
          placeholder="Nama"
        />
        <input-field-basic-input
          v-model="form.address"
          label="Alamat"
          placeholder="Alamat"
        />
        <input-field-basic-input
          v-model="form.phone"
          label="Nomor Handphone"
          placeholder="Nomor Handphone"
          type="number"
        />
        <input-field-email-input
          v-model="form.email"
          label="Email"
          placeholder="Email"
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
            color="bg-primary"
            padding="p-3"
            text="Simpan"
            @click="NewSupplier"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  emits: ['submit', 'closeModal'],
  data () {
    return {
      form: {
        name: null,
        address: null,
        phone: null,
        email: null
      }
    }
  },
  methods: {
    ...mapActions('shipping', ['postNewSupplier']),
    ...mapMutations('shipping', ['setIsLoading']),
    NewSupplier () {
      this.postNewSupplier(this.form)
        .then(() => this.$emit('closeModal'))
        .catch((err) => {
          console.log(err)
          this.setIsLoading(false)
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
  @apply flex flex-col justify-around bg-white shadow rounded-md max-w-lg w-full p-6 mx-2;
}
</style>
