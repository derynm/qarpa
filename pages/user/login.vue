<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Hai Bos, Qarpa!
          </h1>
          <p>Masuk dulu yuk untuk kerja bareng di Qarpa</p>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="mb-8">
            <InputFieldEmailInput
              v-model="dataLogin.email"
              label="Email"
              placeholder="Masukkan Email Anda"
            />
            <div v-if="emailEror" class="pl-3 flex">
              <IconsWarningIcon />
              <p class="ml-1 text-danger text-[10px] font-semibold">
                Email yang Anda masukkan salah
              </p>
            </div>
          </div>
          <div class="mb-8">
            <InputFieldPasswordInput
              v-model="dataLogin.password"
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi Anda"
            />
            <div v-if="paswdError" class="pl-3 flex">
              <IconsWarningIcon />
              <p class="ml-1 text-danger text-[10px] font-semibold">
                Kata Sandi Anda salah
              </p>
            </div>
          </div>
          <div class="flex justify-center mb-8">
            <p class="text-center text-blue-700">
              <a href="/user/email-forgot-password"> Lupa Kata Sandi ? </a>
            </p>
          </div>
          <button-component
            :text-fill="'Sign In'"
            class="w-full mb-8 py-3"
            :disabled="isDisabled"
          />
          <p class="text-center font-bold">
            <a href="/user/register-email">
              Belum punya akun ?
              <span class="text-secondary">Daftar Sekarang</span>
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue'
export default {
  components: { ButtonComponent },
  layout: 'auth',
  data () {
    return {
      isFocus: false,
      dataLogin: {
        email: '',
        password: ''
      },
      emailEror: false,
      paswdError: false,
      showPaswd: false,
      isDisabled: true
    }
  },
  watch: {
    'dataLogin.email' () {
      this.disableButton()
    },
    'dataLogin.password' () {
      this.disableButton()
    }
  },

  methods: {
    typePaswdHandler () {
      this.showPaswd = !this.showPaswd
    },
    disableButton () {
      if (this.dataLogin.email && this.dataLogin.password !== '') {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    async handleLogin () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            user: {
              email: this.dataLogin.email,
              password: this.dataLogin.password
            }
          }
        })
      } catch (error) {
        console.log(error.response)
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
