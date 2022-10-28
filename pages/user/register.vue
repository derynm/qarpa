<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 text-center">
          <h1>Create Account</h1>
          <p>Lengkapi form di bawah dengan menggunakan data Anda yang valid</p>
        </div>
        <form @submit.prevent="">
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
            <div v-if="passwordMatch" class="pl-3 flex">
              <IconsWarningIcon />
              <p class="ml-1 text-danger text-[10px] font-semibold">
                Email tidak valid
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
                Email tidak valid
              </p>
            </div>
          </div>
          <button-component
            :text-fill="'Daftar Akun'"
            class="w-full mb-8 py-3"
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
import ButtonComponent from '~/components/ButtonComponent.vue'
import ConfirmModal from '~/components/Modal/ConfirmModal.vue'
export default {
  components: { ButtonComponent, ConfirmModal },
  data () {
    return {
      isFocus: false,
      showPaswd: false,
      nameRegister: '',
      businessRegister: '',
      passwordRegister: '',
      passwordConfirmRegister: '',
      passwordMatch: false,
      showModal: false,
      code: this.$route.query.code
    }
  },
  computed: {
    codeRegister () {
      return this.$store.state.codeRegister
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
    async handleSubmit () {
      await this.$axios
        .$put('users/auth/signup/registration', {
          token: this.codeRegister,
          name: this.nameRegister,
          password: this.passwordRegister,
          company_name: this.businessRegister
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
