<template>
  <svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.95906 7.82625C8.34958 7.43572 8.34958 6.80256 7.95906 6.41203L1.95906 0.412034C1.56854 0.0215094 0.935371 0.0215094 0.544847 0.412034C0.154323 0.802558 0.154323 1.43572 0.544847 1.82625L5.83774 7.11914L0.544846 12.412C0.154322 12.8026 0.154322 13.4357 0.544846 13.8262C0.93537 14.2168 1.56854 14.2168 1.95906 13.8262L7.95906 7.82625Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: String
  }
}
</script>

<style></style>
