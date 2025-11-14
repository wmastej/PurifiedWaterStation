import { createStore } from 'vuex';

import waterStation from './modules/WaterStation/index.js';

const store = createStore({

  state() {
    return {

    };
  },

  modules: {
    waterStation: waterStation,
  },
  mutations: {},
  actions: {},
  getters: {},

});

export default store;