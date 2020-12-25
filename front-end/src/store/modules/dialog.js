const state = {
  isDialog: false,
  accept: false,
  confirm: false,
  connection: false,
  account: null
};

const getters = {
  isDialog: state => state.isDialog,
  accept: state => state.accept,
  confirm: state => state.confirm,
  connection: state => state.connection,
  account: state => state.account
};

const mutations = {
  TOGGLE_DIALOG: (state, payload) => {
    state.isDialog = !state.isDialog
    state.accept = false
    state.confirm = false
  },
  TOGGLE_ACCEPT: (state, payload) => {
    state.accept = !state.accept
    state.isDialog = !state.isDialog
    state.account = payload
  },
  TOGGLE_CONFIRM: (state, payload) => {
    state.confirm = !state.confirm
    state.isDialog = !state.isDialog
  },
  CONNECTION: (state, payload) => {
    state.connection = !state.connection
    state.isDialog = !state.isDialog
  }
};

const actions = {
  toggleDialog: ({ commit, rootState }, payload) => {
    commit("TOGGLE_DIALOG", payload);
  },
  toggleAccept: ({ commit, rootState }, payload) => {
    commit("TOGGLE_ACCEPT", payload);
  },
  toggleConfirm: ({ commit, rootState }, payload) => {
    commit("TOGGLE_CONFIRM", payload);
  },
  connection: ({ commit, rootState }, payload) => {
    commit("CONNECTION", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
