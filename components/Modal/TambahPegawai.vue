<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div class="modal bg-white w-[300px] md:w-[50%] p-10 my-auto rounded-md">
      <div class="modal-text pb-2">
        <p class="font-bold text-center">
          Tambah Pegawai Baru
        </p>
        <form>
          <div class="nama py-4">
            <p class="pb-1">
              Nama Karyawan
            </p>
            <input
              class="border-2 border-black rounded-md w-full p-1"
              type="text"
              placeholder="Tulisakan nama Karyawan disini..."
            >
          </div>
          <div class="email py-4">
            <p class="pb-1">
              Email Karyawan
            </p>
            <input
              class="border-2 border-black rounded-md w-full p-1"
              type="text"
              placeholder="Tulisakan Email disini..."
            >
          </div>
          <div class="date py-4">
            <p class="pb-1">
              Waktu Selesai Pengerjaan
            </p>
            <input
              class="border-2 border-black rounded-md w-full p-1"
              type="text"
              placeholder="10/09/2022"
            >
          </div>
          <div class="alamat-pos py-4">
            <p class="pb-1">
              Pilih Karyawan
            </p>
            <select
              id=""
              class="border-2 border-black rounded-md w-full p-1"
              name=""
            >
              <option value="1">
                Karyawan 1
              </option>
              <option value="2">
                Karyawan 2
              </option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-button px-1">
        <ButtonComponent
          class="w-full"
          text-fill="Kirim Tugas"
          @clicked="$emit('accept')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   emits: ['close-modal']
  //   props: {
  //     id: { type: String },
  //     text: { type: Object }
  //   }
}
</script>

<style></style>
