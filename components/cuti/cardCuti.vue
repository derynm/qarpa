<template>
  <div v-if="filterValue == filter || filterValue == ''" class="border-b pb-2">
    <div class="card-cuti flex justify-between p-2">
      <div class="left">
        <p>{{ jenisIzin }}</p>
        <p>Tanggal Mulai</p>
        <p>{{ tglMulai }}</p>
      </div>
      <div class="right text-right flex flex-col items-end">
        <p :class="colorStatus">
          {{ status }}
        </p>
        <p>Tanggal Berakhir</p>
        <p>{{ tglBerakhir }}</p>
      </div>
    </div>
    <div v-if="showButton" class="btn flex justify-evenly">
      <ButtonGlobal
        class="min-w-[140px]"
        text="Setuju"
        padding="py-2 px-4"
        color="bg-primary"
      />
      <ButtonGlobal
        class="min-w-[140px]"
        text="Tidak Setuju"
        padding="py-2 px-4"
        outlined="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jenisIzin: { type: String, default: '' },
    filterValue: { type: String, default: '' },
    filter: { type: String, default: '' },
    status: { type: String, default: '' },
    tglMulai: { type: String, default: '' },
    tglBerakhir: { type: String, default: '' },
    showButton: { type: Boolean, default: false }
  },
  data () {
    return {
      // showButton: false
    }
  },
  computed: {
    colorStatus () {
      return {
        'bg-[#f7b548] p-1 w-fit text-white': this.status === 'Menunggu',
        'bg-[#6db570] p-1 w-fit text-white': this.status === 'Disetujui',
        'bg-[#d61c4e] p-1 w-fit text-white': this.status === 'Ditolak'
      }
    }
  }
}
</script>

<style></style>
