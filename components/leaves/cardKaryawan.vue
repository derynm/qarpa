<template>
  <div class="card flex justify-between items-center">
    <div class="left">
      <div class="detail mb-4">
        <p>Nama Karyawan</p>
        <p>Jenis Time Off (Sakit, Izin, Liburan)</p>
      </div>
      <div class="date flex gap-4">
        <div class="start">
          <p>Tanggal Mulai</p>
          <p>10/10/2022</p>
        </div>
        <div class="end">
          <p>Tanggal Berakhir</p>
          <p>13/10/2022</p>
        </div>
      </div>
    </div>
    <div class="right">
      <ButtonComponent text-fill="Tidak Setuju" />
      <ButtonComponent text-fill="Setuju" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
