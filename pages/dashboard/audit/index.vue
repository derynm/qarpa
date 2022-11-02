<template>
  <div>
    <div v-if="isEmpty" class="isEmpty px-2">
      <ButtonComponent
        class="p-2"
        text-fill="Click"
        @clicked="isEmpty = !isEmpty"
      />
      <div class="btn mb-6">
        <div class="dropdown">
          <select id="" class="rounded-md p-2 border-2" name="">
            <option value="1">
              Cabang 1
            </option>
            <option value="2">
              Cabang 2
            </option>
          </select>
        </div>
      </div>
      <div class="container text-center min-h-[65vh] flex items-center">
        <p>
          Belum ada cabang yang dipilih Silahkan pilih cabang terlebih dahulu
          untuk melihat rekapan kas
        </p>
      </div>
    </div>
    <div v-if="!isEmpty" class="!isEmpty px-2">
      <ButtonComponent
        class="p-2"
        text-fill="Click"
        @clicked="isEmpty = !isEmpty"
      />
      <div class="btn mb-6 flex gap-2">
        <button class="border-2 p-2 rounded-md flex items-center gap-2">
          <p>All</p>
          <IconsCalender />
        </button>
        <div class="dropdown rounded-md border-2">
          <fieldset class="bg-white">
            <select id="" class="rounded-xl p-2" name="">
              <option value="1">
                Cabang 1
              </option>
              <option value="2">
                Cabang 2
              </option>
            </select>
          </fieldset>
        </div>
      </div>
      <div class="container flex flex-col gap-3">
        <AuditCardAudit />
        <AuditCardAudit />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'navigation',
  data () {
    return {
      isEmpty: true
    }
  },
  created () {
    this.setPageTitle('Audit')
  },
  methods: {
    ...mapMutations(['setPageTitle'])
  }
}
</script>

<style>
select {
  outline: none;
}
</style>
