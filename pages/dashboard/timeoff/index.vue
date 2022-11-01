<template>
  <div class="container w-[300px] md:w-[50%] p-10 mx-auto border">
    <form>
      <div class="nama py-4">
        <p class="pb-1">
          Jenis Pengajuan
        </p>
        <select
          id=""
          name=""
          class="border-2 border-black rounded-md w-full p-1"
        >
          <option value="1">
            Sakit
          </option>
          <option value="2">
            Izin
          </option>
          <option value="3">
            Liburan
          </option>
        </select>
      </div>
      <div class="nama py-4">
        <p class="pb-1">
          Deskripsi
        </p>
        <input
          class="border-2 border-black rounded-md w-full p-1"
          type="text"
          placeholder="Deskripsi..."
        >
      </div>
      <div class="tgl-cuti py-4 flex gap-3">
        <div class="left w-full">
          <p class="pb-1">
            Tanggal mulai
          </p>
          <div
            class="border-2 border-black rounded-md w-full p-1 flex justify-between"
          >
            <input type="text" placeholder="Tanggal Mulai">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M2.5 8.33342H17.5M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z"
                stroke="#364152"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="right w-full">
          <p class="pb-1">
            Tanggal Berakhir
          </p>
          <div
            class="border-2 border-black rounded-md w-full p-1 flex justify-between"
          >
            <input type="text" placeholder="Tanggal Berakhir">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M2.5 8.33342H17.5M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z"
                stroke="#364152"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
    <div class="btn">
      <ButtonComponent class="w-full" text-fill="simpan" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'dashboard-pos',
  created () {
    this.setPageTitle('Cuti')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style></style>
