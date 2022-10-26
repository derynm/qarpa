<template>
  <div class="shadow-md p-4">
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl md:text-2xl">
        {{ item.name }}
      </p>
      <ButtonComponent text-fill="Buka" @clicked="validateModal = true" />
    </div>
    <div class="content flex justify-around text-center pt-4">
      <div class="profit">
        <p>Total Pendapatan</p>
        <p class="text-3xl py-2">
          {{ item.pendapatan }}
        </p>
      </div>
      <div class="order">
        <p>Total Order</p>
        <p class="text-3xl py-2">
          {{ item.order }}
        </p>
      </div>
    </div>
    <ModalValidate
      v-show="validateModal"
      :text="modalText"
      @decline="validateModal = false"
      @accept="acceptBtn"
    />
    <ModalInputKasir v-show="inputKasir" :id="item.id" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      validateModal: false,
      inputKasir: false,
      emit: 'click-button',
      modalText: {
        content: 'Apakah Anda Yakin ingin buka Toko',
        btn1: 'Batal',
        btn2: 'Buka'
      }
    }
  },
  methods: {
    acceptBtn () {
      this.validateModal = false
      this.inputKasir = true
    }
  }
}
</script>

<style></style>
