<template>
  <div class="border-2 border-[#344397] rounded-md shadow-md p-4">
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl">
        {{ item.name }}
      </p>
      <ButtonComponent
        class="p-2"
        text-fill="Buka"
        @clicked="validateModal = true"
      />
    </div>
    <div class="date py-2">
      <p>05 Oktober 2022</p>
    </div>
    <div class="content flex justify-around text-center pt-4">
      <div class="profit">
        <p>
          {{ item.pendapatan }}
        </p>
        <p class="font-semibold">
          Total Pendapatan
        </p>
      </div>
      <div class="order">
        <p>
          {{ item.order }}
        </p>
        <p class="font-semibold">
          Total Order
        </p>
      </div>
    </div>
    <ModalValidate
      v-show="validateModal"
      :text="modalText"
      @decline="validateModal = false"
      @accept="acceptBtn"
    />
    <ModalInputKasir
      v-show="inputKasir"
      :id="item.id"
      @decline="inputKasir = false"
    />
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
        content: 'Yakin ingin Buka Toko Sekarang?',
        btn1: 'Tidak',
        btn2: 'Yakin'
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
