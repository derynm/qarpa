<template>
  <div class="border-2 border-[#344397] rounded-md shadow-md p-4">
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl">
        {{ item.name }}
      </p>
      <!-- <ButtonComponent
        class="p-2"
        text-fill="Buka"
        @clicked="validateModal = true"
      /> -->
      <ButtonGlobal
        v-if="!item.status"
        text="Buka"
        color="bg-primary"
        padding="p-2"
        @click="validateModal = true"
      />
      <ButtonGlobal
        v-else
        text="Tutup"
        color="bg-red-700"
        padding="p-2"
        @click="validateModal = true"
      />
    </div>
    <div class="date py-2">
      <p>{{ timestamp }}</p>
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
      v-if="!item.status"
      v-show="validateModal"
      :text="modalText[0]"
      @decline="validateModal = false"
      @accept="acceptBtn"
    />
    <ModalValidate
      v-else
      v-show="validateModal"
      :text="modalText[1]"
      @decline="validateModal = false"
      @accept="handleClose"
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
      timestamp: '',
      inputKasir: false,
      emit: 'click-button',
      modalText: [
        {
          content: 'Yakin ingin Buka Toko Sekarang?',
          btn1: 'Tidak',
          btn2: 'Yakin'
        },
        {
          content: 'Yakin ingin Tutup Toko Sekarang?',
          btn1: 'Tidak',
          btn2: 'Yakin'
        }
      ]
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    acceptBtn () {
      this.validateModal = false
      this.inputKasir = true
    },
    getDate () {
      const today = new Date()
      const month = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ][today.getMonth()]
      const date = today.getDate() + ' ' + month + ' ' + today.getFullYear()
      const dateTime = date
      this.timestamp = dateTime
    },
    handleClose () {
      console.log(this.item.id)
    }
  }
}
</script>

<style></style>
