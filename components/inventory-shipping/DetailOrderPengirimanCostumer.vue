<template>
  <div>
    <div class="flex justify-between w-full">
      <p>05 Oktober 2022</p>
      <button-global text="pilih pelanggan" color="bg-warm" padding="p-3" />
    </div>
    <div class="flex flex-col">
      <div class="flex">
        <icons-icons-shipping-location-point />
        <h3 class="text-xl font-semibold">
          Alamat Cabang
        </h3>
      </div>
      <p class="text-lg font-semibold">
        Kontak : 08123883839
      </p>
      <p class="text-sm max-w-[85%] md:max-w-[50%]">
        Toko Cabang 1 Jalan Sukun No.62, RT.2/RW.14, Condongcatur, Depok (dekat
        laundry), KAB. SLEMAN - DEPOK, DI YOGYAKARTA, ID 55283
      </p>
    </div>
    <div>
      <p class="font-semibold my-5">
        Daftar Produk
      </p>
      <inventory-shipping-card-product-shipping
        v-for="(product, index) in dummyProduct"
        :key="index"
        :product_name="product.product_name"
        :price="product.price"
        :stock="product.stock"
      />
    </div>
    <input-field-discount-input label="Diskon" placeholder="Rp 0" />
    <div class="flex flex-col mb-3">
      <div class="flex w-ful justify-between my-3">
        <p class="font-semibold">
          Diskon
        </p>
        <p>40</p>
      </div>
      <hr class="mb-3">
      <div class="flex w-ful justify-between mb-6">
        <p class="font-semibold">
          Total Pembayaran :
        </p>
        <p>Rp. 101.000.</p>
      </div>
      <button-global text="Detail Order" color="bg-primary" padding="py-3" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dummyProduct: [
        {
          product_name: 'cappuccino',
          stock: '120',
          price: '15000'
        },
        {
          product_name: 'Bacon & Egg Toast',
          stock: '190',
          price: '20000'
        }
      ]
    }
  }
}
</script>

<style></style>
