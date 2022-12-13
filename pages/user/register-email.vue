<template>
  <div class="max-w-2xl mx-auto w-full bg-white min-h-screen">
    <div class="mx-auto min-h-screen max-w-lg flex flex-col justify-center">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <p>Halo Usahawan, ayo bergabung bersama Qarpa!</p>
        </div>
        <form @submit.prevent="handleSubmit">
          <div v-if="emailTaken" class="pl-3 flex">
            <IconsWarningIcon />
            <p class="ml-1 text-danger text-[10px] font-semibold">
              Email tidak valid
            </p>
          </div>
          <div class="mb-8">
            <InputFieldEmailInput
              v-model="emailCheck"
              label="Email"
              placeholder="Masukkan Email Anda"
            />
            <div v-if="!emailValid" class="pl-3 flex">
              <IconsWarningIcon />
              <p class="ml-1 text-danger text-[10px] font-semibold">
                Email tidak valid
              </p>
            </div>
          </div>

          <button-component
            v-if="!isLoading"
            text-fill="Lanjutkan"
            class="w-full mb-8 py-3"
            :disabled="isDisabled"
          />
          <div v-if="isLoading" class="flex justify-center mb-8">
            <Loading />
          </div>

          <p class="text-center font-bold">
            <a href="/user/login">
              Sudah punya Akun?
              <span class="text-secondary">Masuk Sekarang</span>
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
      emailValid: true,
      isDisabled: true,
      isLoading: false,
      debounce: null,
      emailTaken: false,
      // eslint-disable-next-line
      reg: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    }
  },
  watch: {
    emailCheck () {
      this.checkEmail()
    }
  },

  methods: {
    checkEmail () {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (!this.reg.test(this.emailCheck)) {
          this.emailValid = false
          this.isDisabled = true
        } else {
          this.emailValid = true
          this.isDisabled = false
        }
      }, 600)
    },
    handleSubmit () {
      this.isLoading = true
      this.$axios
        .$post('users/auth/signup', { email: this.emailCheck })
        .then(() => {
          this.isLoading = false
          this.$router.push({
            path: '/user/verification-email',
            query: { email: this.emailCheck }
          })
        })
        .catch(() => {
          this.isLoading = false
          this.emailTaken = true
        })
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
