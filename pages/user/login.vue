<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg shrink-0">
      <div
        class="mx-2 rounded-xl border-2 p-3 shadow drop-shadow-md md:mx-0 lg:mx-0"
      >
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Hi Bos, Welcome To QARPA !
          </h1>
          <p>welcome to QARPA, Develop your busineses with on touch</p>
        </div>
        <form>
          <div class="mb-8">
            <p>Email</p>
            <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
              <input
                v-model="emailLogin"
                type="text"
                class="w-full rounded-xl p-2"
                placeholder="Email"
                @focus.prevent="isFocus = true"
                @blur="isFocus = false"
              >
            </div>
          </div>
          <div class="mb-8">
            <p>Password</p>
            <div
              class="my-2 flex rounded-xl border-2 border-solid border-black p-1"
            >
              <input
                v-model="passwordLogin"
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
          <div class="flex justify-between mb-8">
            <div>
              <input type="checkbox">
              <label>Ingat Saya</label>
            </div>
            <p class="text-center underline">
              <a href="/"> Lupa Password ? </a>
            </p>
          </div>
          <!-- <button class="bg-yellow-300 mb-8">
            Sign In
          </button> -->
          <button-component
            :text-fill="'Sign In'"
            class="w-full mb-8"
            :disabled="isDisabled"
          />
          <p class="text-center">
            <a href="/user/register">
              Belum punya akun ?
              <span class="font-bold underline">Daftar Sekarang</span>
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
  layout: 'auth',
  data () {
    return {
      isFocus: false,
      showPaswd: false,
      emailLogin: null,
      passwordLogin: null,
      isDisabled: true
    }
  },

  // computed: {
  //   inputClass () {
  //     return {
  //       'border-solid border-2 border-red rounded-md': !this.isFocus,
  //       'border-solid border-2 border-black rounded-md': this.isFocus
  //     }
  //   }
  // },
  methods: {
    typePaswdHandler () {
      this.showPaswd = !this.showPaswd
    },
    disableButton () {
      if (
        (this.emailLogin && this.passwordLogin === null) ||
        (this.emailLogin && this.passwordLogin === '')
      ) {
        this.isDisabled = !this.isDisabled
      }
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
