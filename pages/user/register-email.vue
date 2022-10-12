<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg shrink-0">
      <div
        class="mx-2 rounded-xl border-2 p-3 shadow drop-shadow-md md:mx-0 lg:mx-0"
      >
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Mari bergabung dengan QARPA !
          </h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
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
            :text-fill="'Sign In'"
            class="w-full mb-8"
            :disabled="isDisabled"
          />
          <p class="text-center">
            <a href="/user/login">
              Sudah punya akun ?
              <span class="font-bold underline">Masuk Sekarang</span>
            </a>
          </p>
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
