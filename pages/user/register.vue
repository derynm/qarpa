<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg">
      <div
        class="mx-2 rounded-xl border-2 p-3 shadow md:mx-0 lg:mx-0"
      >
        <div class="mx-5 text-center">
          <h1>Create Account</h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
        </div>
        <form>
          <div class="mb-8">
            <p>Nama</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                type="text"
                v-model="nameRegister"
                class="w-full rounded-xl p-2"
                placeholder="Nama"
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div class="mb-8">
            <p>Nama Program Usaha</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                type="text"
                v-model="businessRegister"
                class="w-full rounded-xl p-2"
                placeholder="Program usaha anda"
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div
            class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mb-8"
          >
            <div>
              <p>Password</p>
              <div
                class="my-2 flex rounded-xl border-2 border-solid border-black p-1 mb-8 md:mb-0 lg:mb-0"
              >
                <input
                  v-model="passwordRegister"
                  class="w-full p-2"
                  placeholder="Password"
                  :type="showPaswd ? 'text' : 'password'"
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                >
                <div
                  class="flex flex-col justify-center"
                  @click="typePaswdHandler"
                >
                  <show-paswd-icon v-if="!showPaswd" class="mr-1" />
                  <un-show-paswd-icon v-if="showPaswd" class="mr-1" />
                </div>
              </div>
            </div>
            <div>
              <p>Konfirmasi Password</p>
              <div
                class="my-2 flex rounded-xl border-2 border-solid border-black p-1 mb-8 md:mb-0 lg:mb-0"
              >
                <input
                  class="w-full p-2"
                  v-model="passwordConfirmRegister"
                  placeholder="Password"
                  :type="showPaswd ? 'text' : 'password'"
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                >
                <div
                  class="flex flex-col justify-center"
                  @click="typePaswdHandler"
                >
                  <show-paswd-icon v-if="!showPaswd" class="mr-1" />
                  <un-show-paswd-icon v-if="showPaswd" class="mr-1" />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <input type="checkbox">
            <label>Saya setuju dengan
              <span class="underline-offset-8 font-semibold underline">syarat dan ketentuan
              </span></label>
          </div>
          <!-- <button class="bg-yellow-300 mb-8">
            Sign Up
          </button> -->
          <button-component :text-fill="'Sign Up'" class="w-full mb-8" />
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
import ButtonComponent from '~/components/ButtonComponent.vue'
import ShowPaswdIcon from '~/components/icons/icons-input/showPaswdIcon.vue'
import unShowPaswdIcon from '~/components/icons/icons-input/unShowPaswdIcon.vue'
export default {
  components: { ShowPaswdIcon, unShowPaswdIcon, ButtonComponent },
  data () {
    return {
      isFocus: false,
      showPaswd: false,
      nameRegister: null,
      businessRegister: null,
      passwordRegister: null,
      passwordConfirmRegister: null
    }
  },
  methods: {
    typePaswdHandler () {
      this.showPaswd = !this.showPaswd
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
