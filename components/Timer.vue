<template>
  <div class="flex justify-center">
    <p>{{ minute }}</p>
    <p>.</p>
    <p>{{ second }}</p>
  </div>
</template>

<script>
export default {
  props: { start: { type: Boolean, default: true } },
  data () {
    return {
      second: 60,
      minute: 4
    }
  },
  mounted () {
    this.countDownTimerSecond()
    this.countDownTimerMinute()
  },
  methods: {
    countDownTimerSecond () {
      if (this.second > 0) {
        setTimeout(() => {
          this.second -= 1
          this.countDownTimerSecond()
        }, 1000)
      }
    },
    countDownTimerMinute () {
      if (this.minute > 0) {
        setTimeout(() => {
          this.minute -= 1
          this.second = 60
          this.countDownTimerMinute()
        }, 60000)
      }
    }
  }
}
</script>

<style></style>
