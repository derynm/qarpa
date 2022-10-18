<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg shrink-0">
      <div class="mx-2 rounded-xl border-2 p-3 shadow md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Ganti Kata Sandi
          </h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
        </div>
        <form>
          <div>
            <p>Kata Sandi Baru</p>
            <div
              class="my-2 flex rounded-xl border-2 border-solid border-black p-1"
            >
              <input
                v-model="newPassword"
                class="w-full p-2"
                placeholder="Tuliskan kata sandi baru anda disini....."
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
          <div class="mb-8">
            <p>Konfirmasi Kata Sandi Baru</p>
            <div
              class="my-2 flex rounded-xl border-2 border-solid border-black p-1"
            >
              <input
                v-model="newPasswordConfirm"
                class="w-full p-2"
                placeholder="Tuliskan kembali kata sandi baru"
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

          <button-component
            :text-fill="'Sign In'"
            class="w-full mb-8"
            :disabled="isDisabled"
          />
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
      newPassword: null,
      newPasswordConfirm: null,
      isDisabled: true
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
