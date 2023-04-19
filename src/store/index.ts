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
    setFoodList(state:stateType, payload: []) {
      state.foodList = payload;
    },
  },
  actions: {
    async requestFood({ commit }) {
      // async requestFood(context) {
        const response: any = await API.get("/food");
        console.log(response);
        
        if (response.ok && response.data) {
          commit("setFoodList", [...response.data]);
        }

      // context.commit('')
    },
  },
  modules: {},
});
