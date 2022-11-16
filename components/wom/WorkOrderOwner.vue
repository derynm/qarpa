<template>
  <div class="relative px-3">
    <drop-down v-model="sort" :item="dataSort" class="w-full" />
    <div class="py-3">
      <wom-card-task-wom
        v-for="(item, index) in dataTask"
        :key="index"
        :item="item"
      />
    </div>
    <button-global
      class="absolute bottom-30 right-6"
      text="+ Tugas Baru"
      color="bg-primary"
      padding="p-2"
      @click="toNewTask"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    item: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      dataSort: [
        { id: 1, value: 'Semua' },
        { id: 2, value: 'Selesai' },
        { id: 3, value: 'Proses' }
      ],
      sort: null,
      filteredItem: []
    }
  },
  watch: {
    sort () {
      this.filterStatus(this.sort)
      console.log(this.sort)
    }
  },
  computed: {
    ...mapState('wom', ['allTask']),
    dataTask () {
      if (!this.sort) {
        return this.allTask.data
      } else {
        return this.filteredItem
      }
    }
  },
  methods: {
    toNewTask () {
      this.$router.push('/dashboard/wom/new-task')
    },
    filterStatus (stat) {
      if (stat === 'Semua') {
        return (this.filteredItem = this.allTask.data)
      } else if (stat === 'Selesai') {
        this.filteredItem = this.allTask.data.filter((e) => {
          return e.status === 'done'
        })
      } else {
        this.filteredItem = this.allTask.data.filter((e) => {
          return e.status === 'todo'
        })
      }
    }
  }
}
</script>

<style></style>
