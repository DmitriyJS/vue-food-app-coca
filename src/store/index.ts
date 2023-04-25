import { createStore } from "vuex";
import API from "@/api/API";
import cloneDeep from "lodash.clonedeep";

type stateType = {
  foodList: [];
  foodListAll: [];
  userOrder: [];
};

export default createStore({
  state(): stateType {
    return {
      foodList: [],
      foodListAll: [],
      userOrder: [],
    };
  },
  getters: {},
  mutations: {
    setFoodList(state: stateType, payload: []) {
      state.foodList = payload;
    },
    setFoodListAll(state: stateType, payload: []) {
      state.foodListAll = payload;
    },
    addToOrder(state: any, payload: { num: number; id: string }) {
      console.log(payload, `test`);
      let index = state.userOrder.findIndex(
        (el: { id: any }) => el.id == payload.id
      );

      if (index > -1) {
        state.userOrder[index].num = payload.num;
      } else {
        let foodItem = state.foodListAll.find((el: any) => el.id == payload.id);
        if (foodItem) {
          state.userOrder.push(cloneDeep(foodItem));
        }
      }
    },
  },
  actions: {
    async requestFood({ commit }, payload: any) {
      console.log(`response`, payload);
      const response: any = await API.get("/api/v1/menu", {
        kind: payload,
      });
      console.log(response);

      if (response.ok && response.data) {
        commit("setFoodList", [...response.data]);
      }
      // context.commit('')
    },
    async requestAllFood({ commit }, payload) {
      console.log(`response hahaha`, payload);
      const response: any = await API.get("/api/v1/menu", {
        kind: payload,
      });
      console.log(response);
      if (response.ok && response.data) {
        commit("setFoodListAll", [...response.data]);
      }
      // context.commit('')
    },
  },
  modules: {},
});
