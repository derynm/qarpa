<template>
  <div class="modal-overlay">
    <div class="modal-body">
      <h1 class="text-2xl font-bold mb-5">
        Buat Tugas Baru
      </h1>
      <form class="text-left">
        <div class="mb-3">
          <p>Tugas</p>
          <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
            <input
              v-model="taskName"
              type="text"
              class="w-full rounded-xl p-2"
              placeholder="Masukkan task baru disini..."
            >
          </div>
        </div>
        <div class="mb-3">
          <p>Catatan</p>
          <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
            <input
              v-model="taskNote"
              type="text"
              class="w-full rounded-xl p-2"
              placeholder="Masukan Catatan..."
            >
          </div>
        </div>
        <div class="mb-3">
          <p>Waktu Selesai Pengerjaan ( Deadline )</p>
          <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
            <input
              v-model="taskDate"
              type="date"
              class="w-full rounded-xl p-2"
              placeholder="Masukan Catatan..."
            >
          </div>
        </div>
        <div class="mb-3">
          <p>Pilih Karyawan</p>
          <div class="my-2 rounded-xl border-2 border-solid border-black p-1">
            <select
              v-model="taskOwner"
              name="productUnit"
              class="w-full rounded-xl p-2"
            >
              <option value="">
                budi
              </option>

              <option value="">
                nala
              </option>
            </select>
          </div>
        </div>
      </form>
      <button-component
        class="w-full"
        text-fill="Kirim Tugas"
        @clicked="$emit('success')"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../ButtonComponent.vue'
export default {
  components: { ButtonComponent },
  emits: ['closeModal', 'success'],
  data () {
    return {
      taskName: null,
      taskNote: null,
      taskDate: null,
      taskOwner: null
    }
  }
}
</script>

<style lang="postcss" scoped>
.modal-overlay {
  background-color: #0000004e;
  @apply fixed flex justify-center top-0 bottom-0 left-0 right-0 items-center;
}
.modal-body {
  @apply flex flex-col justify-around text-center bg-white shadow rounded-md max-w-lg w-full p-3 mx-2;
}
input:focus {
  outline: none;
}
select:focus {
  outline: none;
}
</style>
