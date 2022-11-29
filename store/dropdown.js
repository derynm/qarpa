export const state = () => ({
  employees: [],
  supplier: [],
  categories: [],
  condition: [],
  unit: [],
  branch: []
})

export const mutations = {
  setEmployee (state, value) {
    state.employees = value
  },
  setSupplier (state, value) {
    state.supplier = value
  },
  setCategories (state, value) {
    state.categories = value
  },
  setCondition (state, value) {
    state.condition = value
  },
  setUnit (state, value) {
    state.unit = value
  },
  setBranch (state, value) {
    state.branch = value
  }
}

export const actions = {
  getEmployeeDropdown (ctx) {
    return this.$axios
      .$get('users/dropdown')
      .then(response => ctx.commit('setEmployee', response.data))
  },
  getSupplierDropdown (ctx) {
    return this.$axios
      .$get('dropdown/suppliers')
      .then(response => ctx.commit('setSupplier', response.data))
  },
  getCategoriesDropdown (ctx) {
    return this.$axios
      .$get('categories')
      .then(response => ctx.commit('setCategories', response.data))
  },
  getConditionDropdown (ctx) {
    return this.$axios
      .$get('dropdown/conditions/products')
      .then(response => ctx.commit('setCondition', response.data))
  },
  getUnitDropdown (ctx) {
    return this.$axios
      .$get('dropdown/units/products')
      .then(response => ctx.commit('setUnit', response.data))
  },
  getBranchDropdown (ctx) {
    return this.$axios
      .$get('dropdown/branches')
      .then(response => ctx.commit('setBranch', response.data))
  }
}
