<template>
  <div class="max-w-2xl mx-auto w-full bg-white min-h-screen">
    <div class="mx-auto min-h-screen max-w-lg flex flex-col justify-center">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Ganti Kata Sandi
          </h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-8">
            <InputFieldPasswordInput
              v-model="newPassword"
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi"
            />
            <div v-if="passwordMatch || passwordLength" class="pl-3 flex">
              <IconsWarningIcon />
              <p
                v-if="passwordMatch"
                class="ml-1 text-danger text-[10px] font-semibold"
              >
                Password tidak sama
              </p>
              <p
                v-if="passwordLength"
                class="ml-1 text-danger text-[10px] font-semibold"
              >
                Password terlalu pendek (minimal 6 karakter)
              </p>
            </div>
          </div>
          <div class="mb-8">
            <InputFieldPasswordInput
              v-model="newPasswordConfirm"
              label="Konfirmasi Kata Sandi"
              placeholder="Konfirmasi Kata Sandi Anda"
            />
            <div v-if="passwordMatch" class="pl-3 flex">
              <IconsWarningIcon />
              <p class="ml-1 text-danger text-[10px] font-semibold">
                Password tidak sama
              </p>
            </div>
          </div>

          <button-component
            v-if="!isLoading"
            text-fill="Daftar Akun"
            class="w-full mb-8 py-3"
            :disabled="isDisabled"
          />
          <div v-if="isLoading" class="flex justify-center mb-8">
            <Loading />
          </div>
        </form>
        <modal-confirm-modal
          v-if="modalPop"
          text="Kata Sandi berhasil diubah! Anda bisa masuk sekarang."
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
      showPaswd: false,
      newPassword: null,
      newPasswordConfirm: null,
      passwordMatch: false,
      passwordLength: false,
      isDisabled: true,
      modalPop: false,
      isLoading: false,
      code: this.$route.query.token
    }
  },
  watch: {
    newPassword () {
      this.checkPasswordLength()
      this.checkInput()
    },
    newPasswordConfirm () {
      this.checkInput()
    }
  },
  methods: {
    typePaswdHandler () {
      this.showPaswd = !this.showPaswd
    },
    checkInput () {
      if (
        this.newPassword &&
        this.newPasswordConfirm !== '' &&
        !this.passwordLength
      ) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    checkPasswordLength () {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (this.newPassword.length < 6) {
          this.passwordLength = true
        } else {
          this.passwordLength = false
        }
      }, 1000)
    },
    checkPasswordMatch () {
      if (this.newPassword !== this.newPasswordConfirm) {
        this.passwordMatch = true
      } else {
        this.passwordMatch = false
      }
    },
    handleSubmit () {
      this.checkPasswordMatch()
      this.isLoading = true
      if (!this.passwordMatch) {
        this.$axios
          .$post('users/password/reset', {
            token: this.code,
            password: this.newPassword
          })
          .then((response) => {
            this.isLoading = false
            this.modalPop = !this.modalPop
          })
          .catch((error) => {
            console.log(error)
            this.isLoading = false
          })
      }
      if (this.passwordMatch) {
        this.isLoading = false
      }
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
