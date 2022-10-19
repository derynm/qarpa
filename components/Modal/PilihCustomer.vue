<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div class="modal bg-white w-[300px] md:w-[50%] p-10 my-auto rounded-md">
      <div class="modal-content">
        <div class="title">
          <p class="font-bold">
            Pilih Customer
          </p>
        </div>
        <div class="btn py-5">
          <ButtonComponent
            text-fill="+ Tambah Customer Baru"
            @clicked="$emit('add')"
          />
        </div>
        <div class="customer flex flex-col gap-4">
          <PosCardCustomer />
          <PosCardCustomer />
          <PosCardCustomer />
        </div>
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
