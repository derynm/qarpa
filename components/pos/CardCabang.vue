<template>
  <div
    class="border-2 rounded-md shadow-md p-4 cursor-pointer"
    @click="backToBranch"
  >
    <div class="header flex justify-between items-center">
      <p class="font-semibold text-2xl">
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
    <div class="info py-2">
      <p class="text-gray-600">
        Informasi Cabang
      </p>
    </div>
    <div class="detail text-primary font-semibold">
      <div class="address flex gap-1 items-center">
        <IconsPosAddress />
        <p>{{ item.address }}</p>
      </div>
      <div class="phone flex gap-1 items-center">
        <IconsPosPhone />
        <p>{{ item.phone }}</p>
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
      inputKasir: false,
      pos: [],
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
      ],
      role: this.$auth.user.role
    }
  },
  methods: {
    acceptBtn () {
      this.validateModal = false
      this.inputKasir = true
    },
    handleClose () {
      if (this.role === 'owner') {
        this.$axios.$get('owner/branches').then((response) => {
          this.pos = response.data
          const posId = this.pos.find(e => e.id === this.item.id).pos_id

          this.$axios.$put(`branches/pos/close?pos_id=${posId}`).then(() => {
            location.reload()
          })
        })
      } else {
        this.$axios.$get('employee/branches').then((response) => {
          this.pos = response.data
          const posId = this.pos.find(e => e.id === this.item.id).pos_id
          this.$axios.$put(`branches/pos/close?pos_id=${posId}`).then(() => {
            location.reload()
          })
        })
      }
      this.validateModal = false
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
