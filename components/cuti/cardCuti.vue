<template>
  <div class="border-b pb-2">
    <div class="name p-3">
      <p>{{ item.name }}</p>
    </div>
    <div class="card-cuti flex flex-col gap-1 p-3">
      <div class="flex justify-between items-center">
        <p>{{ item.title }}</p>
        <p :class="colorStatus">
          {{ item.status }}
          {{ item.leave_status }}
        </p>
      </div>
      <div class="flex justify-between">
        <p>Tanggal Mulai</p>
        <p>Tanggal Berakhir</p>
      </div>
      <div class="flex justify-between">
        <p>{{ item.start_at.split('-').reverse().join('/') }}</p>
        <p>{{ item.end_at.split('-').reverse().join('/') }}</p>
      </div>
    </div>
    <div
      v-if="showButton && item.status === 'menunggu'"
      class="btn flex justify-between px-3"
    >
      <ButtonGlobal
        class="min-w-[140px]"
        text="Setuju"
        padding="py-2 px-4"
        color="bg-primary"
        @click="$emit('approve', item.id)"
      />
      <ButtonGlobal
        class="min-w-[140px]"
        text="Tidak Setuju"
        padding="py-2 px-4"
        :outlined="true"
        @click="$emit('reject', item.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showButton: { type: Boolean, default: false },
    item: { type: Object }
  },
  emits: ['approve', 'reject'],
  data () {
    return {
      // startDate: this.formatDate()
    }
  },
  computed: {
    colorStatus () {
      return {
        'bg-[#f7b548] p-1 w-fit text-white':
          this.item.status === 'menunggu' ||
          this.item.leave_status === 'menunggu',
        'bg-[#6db570] p-1 w-fit text-white':
          this.item.status === 'disetujui' ||
          this.item.leave_status === 'disetujui',
        'bg-[#d61c4e] p-1 w-fit text-white':
          this.item.status === 'ditolak' || this.item.leave_status === 'ditolak'
      }
    }
  }
}
</script>

<style></style>
