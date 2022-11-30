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
      .catch(err => console.log(err.response.status))
  },
  getSupplierDropdown (ctx) {
    return this.$axios
      .$get('dropdown/suppliers')
      .then(response => ctx.commit('setSupplier', response.data))
      .catch(err => console.log(err.response.status))
  },
  getCategoriesDropdown (ctx) {
    return this.$axios
      .$get('categories')
      .then(response => ctx.commit('setCategories', response.data))
      .catch(err => console.log(err.response.status))
  },
  getConditionDropdown (ctx) {
    return this.$axios
      .$get('dropdown/conditions/products')
      .then(response => ctx.commit('setCondition', response.data))
      .catch(err => console.log(err.response.status))
  },
  getUnitDropdown (ctx) {
    return this.$axios
      .$get('dropdown/units/products')
      .then(response => ctx.commit('setUnit', response.data))
      .catch(err => console.log(err.response.status))
  },
  getBranchDropdown (ctx) {
    return this.$axios
      .$get('dropdown/branches')
      .then(response => ctx.commit('setBranch', response.data))
      .catch(err => console.log(err.response.status))
  }
}
