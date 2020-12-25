const state = {
  data: null
};

const getters = {
  data: state => state.data
};

const mutations = {
  SET_DATA: (state, payload) => {
    const listData = payload.listData;
    state.data = listData.filter(
      info =>
        Number(info.age) > payload.payload.firstAge &&
        Number(info.age) < payload.payload.lastAge &&
        info.location.toLowerCase().indexOf(payload.payload.location) != -1
    );
  }
};

const actions = {
  setData: ({ commit, rootState }, payload) => {
    commit("SET_DATA", {
      listData: rootState.listData,
      payload: payload
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
