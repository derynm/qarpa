<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div class="modal bg-white w-[300px] md:w-[50%] p-10 my-auto rounded-md">
      <div class="modal-text pb-2">
        <p class="font-bold text-center">
          Tambahkan Customer Baru
        </p>
        <form>
          <div class="nama py-4">
            <p class="pb-1">
              Nama Customer
            </p>
            <input
              class="border-2 border-black rounded-md w-full p-1"
              type="text"
              placeholder="Tulisakan nama customer disini..."
            >
          </div>
          <div class="nama py-4">
            <p class="pb-1">
              No. WhatsApp Customer
            </p>
            <input
              class="border-2 border-black rounded-md w-full p-1"
              type="text"
              placeholder="No. WhatsApp customer"
            >
          </div>
          <div class="alamat-pos py-4 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div class="alamat md:col-span-2">
              <p class="pb-1">
                Alamat
              </p>
              <input
                class="border-2 border-black rounded-md w-full p-1"
                type="text"
                placeholder="Alamat Customer"
              >
            </div>
            <div class="pos">
              <p class="pb-1">
                Pos
              </p>
              <input
                class="border-2 border-black rounded-md w-full p-1"
                type="text"
                placeholder="Kode Pos Customer"
              >
            </div>
          </div>
        </form>
      </div>
      <div class="modal-button flex gap-4 justify-center px-1">
        <ButtonComponent
          class="w-full"
          :text-fill="text.btn1"
          @clicked="$emit('decline')"
        />
        <ButtonComponent
          class="w-full"
          :text-fill="text.btn2"
          @clicked="$emit('accept')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   emits: ['close-modal']
  props: {
    id: { type: String },
    text: { type: Object }
  }
}
</script>

<style></style>
