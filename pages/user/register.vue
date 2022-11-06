<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 text-center">
          <h1>Create Account</h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-8">
            <InputFieldBasicInput
              v-model="nameRegister"
              label="Nama"
              placeholder="Masukkan Nama Lengkap"
            />
          </div>
          <div class="mb-8">
            <InputFieldBasicInput
              v-model="businessRegister"
              label="Nama Usaha"
              placeholder="Masukkan Nama Usaha Anda"
            />
          </div>
          <div class="mb-8">
            <InputFieldPasswordInput
              v-model="passwordRegister"
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
              v-model="passwordConfirmRegister"
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
      </div>
    </div>
    <confirm-modal
      v-if="showModal"
      :title="'Akun Berhasil Dibuat'"
      :text-button="'Lanjutkan'"
      :text="'Silahkan Login Kembali untuk mengakses QARPA'"
      @closeModal="showModalHandler"
    />
  </div>
</template>

<script>
import ConfirmModal from '~/components/Modal/ConfirmModal.vue'
export default {
  components: { ConfirmModal },
  data () {
    return {
      isFocus: false,
      showPaswd: false,
      nameRegister: '',
      businessRegister: '',
      passwordRegister: '',
      passwordConfirmRegister: '',
      passwordMatch: false,
      passwordLength: false,
      isDisabled: true,
      isLoading: false,
      showModal: false,
      code: this.$route.query.code
    }
  },
  computed: {
    codeRegister () {
      return this.$store.state.codeRegister
    }
  },
  watch: {
    nameRegister () {
      this.checkInput()
    },
    businessRegister () {
      this.checkInput()
    },
    passwordRegister () {
      this.checkPasswordLength()
      this.checkInput()
    },
    passwordConfirmRegister () {
      this.checkInput()
    }
  },
  mounted () {
    if (!this.code) {
      this.$router.push('/user/register-email')
    }
  },
  methods: {
    typePaswdHandler () {
      this.showPaswd = !this.showPaswd
    },
    showModalHandler () {
      this.showModal = !this.showModal
    },
    checkInput () {
      if (
        this.nameRegister &&
        this.businessRegister &&
        this.passwordRegister &&
        this.passwordConfirmRegister !== '' &&
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
        if (this.passwordRegister.length < 6) {
          this.passwordLength = true
        } else {
          this.passwordLength = false
        }
      }, 1000)
    },
    checkPasswordMatch () {
      if (this.passwordRegister !== this.passwordConfirmRegister) {
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
          .$put('users/auth/signup/registration', {
            token: this.code,
            name: this.nameRegister,
            password: this.passwordRegister,
            company_name: this.businessRegister,
            full_address: 'indonesia'
          })
          .then((response) => {
            console.log(response)
            this.isLoading = false
          })
          .catch((error) => {
            console.log(error)
            this.isLoading = false
          })
      }
      if (this.passwordMatch) {
        this.isLoading = false
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
