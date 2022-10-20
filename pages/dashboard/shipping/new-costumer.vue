<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg w-full">
      <div class="mx-2 rounded-xl border-2 p-3 shadow md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Tambah Costumer Baru
          </h1>
        </div>
        <form>
          <div class="mb-3">
            <p>Nama Costumer</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="costumerName"
                type="text"
                class="w-full rounded-xl p-2"
                placeholder="Tulis Nama Customer Disini..."
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div class="mb-3">
            <p>No.WhatsApp Customer</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="costumerNumber"
                type="number"
                class="w-full rounded-xl p-2"
                placeholder="No.WhatsApp Customer..."
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div class="mb-3">
            <p>Alamat Customer</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="costumerName"
                type="text"
                class="w-full rounded-xl p-2"
                placeholder="Alamat Customer..."
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <button-component
            text-fill="Tambah Costumer"
            class="w-full mb-3"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      costumerName: null,
      costumerNumber: null,
      costumerAddress: null
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
