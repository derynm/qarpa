<template>
  <div class="max-w-2xl mx-auto w-full bg-white min-h-screen">
    <div class="mx-auto min-h-screen max-w-lg flex flex-col justify-center">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Konfirmasi Email
          </h1>
          <p>Lengkapi form dibawah dengan menggunakan data yang valid</p>
        </div>
        <form @submit.prevent="handleSubmit">
          <div v-if="emailNotRegistered" class="pl-3 flex">
            <IconsWarningIcon />
            <p class="ml-1 text-danger text-[10px] font-semibold">
              Email tidak terdaftar
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
        </form>
        <modal-confirm-modal
          v-if="modalPop"
          text="Link reset kata sandi sudah dikirim, cek email anda!"
          text-button="Oke"
          @closeModal="closeModal()"
        />
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
      modalPop: false,
      emailNotRegistered: false,
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
        .$post('users/password/forgot', { email: this.emailCheck })
        .then((response) => {
          this.isLoading = false
          this.modalPop = !this.modalPop
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
          this.modalPop = false
          if (err.response.status === 404) {
            this.emailNotRegistered = true
          }
        })
    },
    closeModal () {
      this.modalPop = false
      this.$router.push('/user/login')
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
