
export default ({
  
  getters: {
    getAllOrders: (state) => state.orders,
    getOrderByNo: (state) => (no) => {
      return state.orders.find(order => order.no === no);
    }
  },
  mutations: {
    ADD_ORDER(state, order) {
      state.orders.push(order);
    },
    UPDATE_ORDER(state, { no, updatedOrder }) {
      const index = state.orders.findIndex(order => order.no === no);
      if (index !== -1) {
        state.orders[index] = { ...state.orders[index], ...updatedOrder };
      }
    },
    DELETE_ORDER(state, no) {
      state.orders = state.orders.filter(order => order.no !== no);
    }
  },
  actions: {
    addOrder({ commit }, order) {
      commit('ADD_ORDER', order);
    },
    updateOrder({ commit }, { no, updatedOrder }) {
      commit('UPDATE_ORDER', { no, updatedOrder });
    },
    deleteOrder({ commit }, no) {
      commit('DELETE_ORDER', no);
    }
  },
  modules: {}
});

