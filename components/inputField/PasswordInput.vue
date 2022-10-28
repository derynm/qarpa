<template>
  <fieldset
    class="my-2 flex rounded-md border-2 border-solid border-black p-1 bg-white"
  >
    <legend class="ml-6 px-2 text-lg">
      {{ label }}
    </legend>
    <IconsLockIcon class="ml-2" />
    <input
      :type="showPaswd ? 'text' : 'password'"
      :placeholder="placeholder"
      :value="value"
      class="w-full px-3 pb-2"
      @input="updateValue($event.target.value)"
    >

    <div @click="typePaswdHandler">
      <IconsIconsInputShowPaswdIcon v-if="!showPaswd" class="mr-1" />
      <IconsIconsInputUnShowPaswdIcon v-if="showPaswd" class="mr-1" />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
    placeholder: { type: String, default: null },
    value: { type: String, default: '' },
    icon: { type: Boolean, default: true }
  },
  data () {
    return {
      showPaswd: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
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
input {
  background-color: rgba(255, 255, 255, 0);
}
</style>
