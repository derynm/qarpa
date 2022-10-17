<template>
  <div class="shadow-md p-4">
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl md:text-2xl">
        {{ item.name }}
      </p>
      <ButtonComponent
        text-fill="Buka"
        :custom-emit="emit"
        @click-button="clickButton"
      />
      <!-- <button @click="clickButton">
        Buka
      </button> -->
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
    <OpenCloseModal
      v-show="closeOpenModal"
      :text="modalText"
      @decline="closeOpenModal = false"
      @accept="closeToInputModal"
    />
    <InputKasirModal v-show="inputKasirModal" :id="item.id" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      closeOpenModal: false,
      inputKasirModal: false,
      emit: 'click-button',
      modalText: {
        content: 'Apakah Anda Yakin ingin buka Toko',
        btn1: 'Batal',
        btn2: 'Buka'
      }
    }
  },
  methods: {
    clickButton () {
      this.closeOpenModal = true
      console.log('clicked')
    },
    closeToInputModal () {
      this.closeOpenModal = false
      this.inputKasirModal = true
    }
  }
}
</script>

<style></style>
