<template>
  <div>
    <div class="container mx-auto flex h-screen items-center">
      <div class="mx-auto max-w-lg">
        <div class="mx-2 rounded-xl border-2 px-8 py-6 shadow md:mx-0 lg:mx-0">
          <div
            class="bg-slate-200 flex justify-center items-center rounded-full min-h-[260px] min-w-[260px] md:min-h-[320px] md:min-w-[320px]"
          >
            <h1 class="text-4xl md:text-5xl font-semibold">
              00 : 00 : 00
            </h1>
          </div>
          <div class="text-center my-6">
            <h2 class="text-2xl font-semibold">
              Ahmad Zakkan Ativana
            </h2>
            <p>Location :</p>
          </div>
          <div class="flex justify-between mx-4 mb-10 font-semibold">
            <div class="text-center">
              <p class="text-slate-300">
                Check In
              </p>
              <p class="text-green-500">
                --:--
              </p>
            </div>
            <div class="text-center">
              <p class="text-slate-300">
                Check In
              </p>
              <p class="text-red-600">
                --:--
              </p>
            </div>
          </div>
          <button-component :text-fill="'Check In'" class="w-full" />
        </div>
      </div>
    </div>
    <attendance-modal v-if="checkInModalShow" text-button="Lanjutkan" text-modal="Check In Berhasil" />
    <attendance-modal v-if="checkOutModalShow" text-button="Lanjutkan" text-modal="Check Out Berhasil" />
  </div>
</template>

<script>
import ButtonComponent from '~/components/ButtonComponent.vue'
import AttendanceModal from '~/components/Modal/AttendanceModal.vue'

export default {
  components: { ButtonComponent, AttendanceModal },
  data () {
    return {
      checkInModalShow: false,
      checkOutModalShow: false
    }
  }
}
</script>

<style></style>
