import { createStore } from "vuex";
import API from "@/api/API";

type stateType = {
  foodList: [];
};

export default createStore({
  state(): stateType {
    return {
      foodList: [],
    };
  },
  getters: {},
  mutations: {
    setFoodList(state: stateType, payload: []) {
      state.foodList = payload;
    },
  },
  actions: {
    async requestFood({ commit }, payload) {
      console.log(`response`);

      const response: any = await API.get("/api/v1/menu", {
        kind: payload,
      });
      console.log(response);

      if (response.ok && response.data) {
        commit("setFoodList", [...response.data]);
      }
      // context.commit('')
    },
  },
  modules: {},
});
