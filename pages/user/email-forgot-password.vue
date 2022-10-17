<template>
    <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg shrink-0">
      <div
        class="mx-2 rounded-xl border-2 p-3 shadow md:mx-0 lg:mx-0"
      >
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Ganti Kata Sandi
          </h1>
          <p>Masukkan email anda untuk mengganti kata sandi</p>
        </div>
        <form>
          <div class="mb-8">
            <p>Email</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="emailCheck"
                type="text"
                class="w-full rounded-xl p-2"
                placeholder="Email"
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>

          <button-component
            :text-fill="'Ganti Kata Sandi'"
            class="w-full mb-8"
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
      isFocus: false,
      emailCheck: null,
      isDisabled: true
    }
  }

}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
