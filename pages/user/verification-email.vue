<template>
  <div class="container mx-auto flex h-screen items-center">
    <div class="mx-auto max-w-lg">
      <div class="mx-2 rounded-xl p-3 md:mx-0 lg:mx-0">
        <div class="mx-5 my-7 text-center">
          <h1 class="text-2xl font-bold">
            Kode Verifikasi Telah Dikirim
          </h1>
          <p>Masukkan kode yang telah dikirimkan ke email dibawah ini</p>
        </div>
        <form>
          <div class="mb-8 flex justify-center">
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input1"
                  v-model="codeVerification.code1"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                  @input="nextInput($event, 'input2')"
                >
              </div>
            </div>
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input2"
                  v-model="codeVerification.code2"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                  @input="nextInput($event, 'input3')"
                >
              </div>
            </div>
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input3"
                  v-model="codeVerification.code3"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                  @input="nextInput($event, 'input4')"
                >
              </div>
            </div>
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input4"
                  v-model="codeVerification.code4"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                  @input="nextInput($event, 'input5')"
                >
              </div>
            </div>
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input5"
                  v-model="codeVerification.code5"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                  @input="nextInput($event, 'input6')"
                >
              </div>
            </div>
            <div
              class="my-2 mx-2 rounded-md border-2 border-solid border-black p-1 w-full max-w-[60px]"
            >
              <div class="flex justify-center items-center">
                <input
                  ref="input6"
                  v-model="codeVerification.code6"
                  type="text"
                  maxlength="1"
                  class="w-full rounded-xl py-2 max-w-[50px] text-center font-extrabold text-lg "
                  @focus.prevent="isFocus = true"
                  @blur="isFocus = false"
                >
              </div>
            </div>
          </div>

          <button-component
            :text-fill="'Verifikasi Email'"
            class="w-full mb-8 py-3"
          />
          <button-component
            :text-fill="'Kirim ulang email'"
            :outlined="true"
            class="w-full mb-8 py-3"
          />
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
      codeVerification: {
        code1: null,
        code2: null,
        code3: null,
        code4: null,
        code5: null,
        code6: null
      },
      isDisabled: true
    }
  },
  mounted () {
    this.$refs.input1.focus()
  },
  methods: {
    nextInput (e, nextField) {
      if (e.target.value.length === 1) {
        this.$refs?.[nextField].focus()
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
