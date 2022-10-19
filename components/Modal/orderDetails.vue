<template>
  <div
    class="modal-overlay fixed top-0 bottom-0 right-0 left-0 flex justify-center bg-gray-400/40"
  >
    <div
      class="modal bg-white w-[90%] md:w-[50%] p-2 md:p-8 my-auto rounded-md"
    >
      <div class="modal-content">
        <div class="title text-center border-b pb-2">
          <p class="text-xl font-semibold">
            Order Details
          </p>
        </div>
        <div class="product shadow-md p-2 my-2">
          <div class="product-title py-3">
            <p>Produk</p>
          </div>
          <div class="product-content flex justify-between">
            <div class="left">
              <div class="product-name">
                Cappucinno
              </div>
            </div>
            <div class="right flex gap-4">
              <div class="product-quantity flex gap-1">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
              <div class="product-price">
                Rp.15000
              </div>
            </div>
          </div>
        </div>
        <div class="payment shadow-md p-2 mb-4">
          <div class="payment-method">
            <p>Metode Pembayaran</p>
            <div class="pick-payment flex justify-between items-center p-2">
              <div class="left flex items-center">
                <IconsAtmCardIcon />
                <p class="pl-2">
                  Transfer Bank
                </p>
              </div>
              <div class="right">
                <IconsArrowRightIcon />
              </div>
            </div>
            <div class="discount pb-5 border-b border-dotted border-black">
              <p>Diskon</p>
              <div class="input-diskon flex p-2 border rounded-md">
                <IconsDiscountIcon />
                <input
                  class="pl-2 w-full"
                  type="text"
                  placeholder="Masukkan Diskon Disini.."
                >
              </div>
            </div>
            <div class="ket flex justify-between py-5 border-b border-black">
              <div class="left">
                <p>Subtotal</p>
                <p>Diskon</p>
              </div>
              <div class="right">
                <p>Rp.101.000</p>
                <p>-</p>
              </div>
            </div>
            <div class="total flex justify-between pt-4">
              <div class="left">
                <p class="font-semibold">
                  Total
                </p>
              </div>
              <div class="right">
                <p>Rp.101.000</p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <ButtonComponent class="w-full" text-fill="Bayar Sekarang" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: Object
  },
  emits: ['accept, decline']
}
</script>

<style></style>
