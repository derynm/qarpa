<template>
  <div>
    <div class="bg-primary h-[216px]">
      <div class="h-[60px] flex items-center w-full px-3 justify-between">
        <IconsBackIcon color-fill="white" />
        <h3 class="font-semibold text-white text-xl">
          Presensi
        </h3>
        <div />
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div
        class="min-h-[200px] min-w-[200px] md:min-h-[280px] md:min-w-[280px] rounded-full bg-warm flex items-center justify-center border-[6px] border-white -mt-[100px] md:-mt-[140px]"
      >
        <h1 class="text-3xl md:text-5xl font-semibold">
          00 : 00 : 00
        </h1>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="items-center w-full my-3">
        <h3 class="font-semibold text-lg text-center mx-auto mb-3">
          {{ $auth.user.name }}
        </h3>
        <div class="flex justify-center">
          <button-global
            padding="py-1 px-3"
            color="bg-green-700"
            text="Check In"
            @click="$emit('checkIn')"
          />
          <button-global
            padding="py-1 px-3"
            color="bg-red-700"
            text="Check Out"
            @click="$emit('checkOut')"
          />
        </div>
      </div>
    </div>
    <div class="px-3">
      <h3 class="font-bold mb-2">
        Riwayat Presensi
      </h3>
      <div class="max-h-[190px] overflow-y-auto snap-y">
        <presensi-card-riwayat-presesnsi
          v-for="(value, index) in 4"
          :key="index"
          class="snap-start"
          date="11 Oktober 2022"
          time="12.30 - 16.30"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['location', 'checkIn', 'checkOut'],
  async fetch ({ store }) {
    await store.dispatch('getPresensiStatus')
  },
  mounted () {
    this.$emit('location')
  }
}
</script>

<style></style>
