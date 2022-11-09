<template>
  <div
    class="border-2 border-[#344397] rounded-md shadow-md p-4"
    @click="backToBranch"
  >
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-xl">
        {{ item.name }}
      </p>
      <div class="btn" @click.stop="">
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
    <div @click.stop="">
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
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      validateModal: false,
      timestamp: '',
      inputKasir: false,
      // emit: 'click-button',
      pos: '',
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
    // localStorage.removeItem('POS_DATA')
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
    async handleClose () {
      const temp = JSON.parse(localStorage.getItem('POS_DATA'))
      // console.log(temp)
      const posId = temp.find(el => el.branch_id === this.item.id).pos_id
      await this.$axios.$put(`branches/pos/close?pos_id=${posId}`)

      localStorage.setItem(
        'POS_DATA',
        JSON.stringify(temp.filter(el => el.branch_id !== this.item.id))
      )
      // console.log(localStorage.getItem('POS_DATA'))
      // await this.$axios
      //   .$get('branches')
      //   .then(response => console.log(response.data))
      this.validateModal = false
      // this.key++
      location.reload()
    },
    backToBranch () {
      if (this.item.status === true) {
        this.$router.push(`pos/${this.item.id}`)
      }
    }
  }
}
</script>

<style></style>
