import { createStore } from "vuex";
import API from "@/api/API";
import cloneDeep from "lodash.clonedeep";
// помещать все в предзаказ, а потом циклом передавать в стор вызывая мутацию каждый раз
type stateType = {
  foodList: [];
  foodListAll: [];
  userOrder: [];
  orderNote: string;
};

type menuItemType = {
  num?: number;
  price?: string;
  id?: string;
  description?: string;
};

export default createStore({
  state(): stateType {
    return {
      foodList: [],
      foodListAll: [],
      userOrder: [],
      orderNote: "",
    };
  },
  getters: {
    getQuantityById: (state: stateType) => (id: string) => {
      let obj: menuItemType =
        state.userOrder.find((el: any) => el.id == id) || {};
      return obj.num || 0;
    },
    getTotalPrice(state) {
      return state.userOrder.reduce((acc, el: any) => {
        return acc + el.price * el.num;
      }, 0);
    },
  },
  mutations: {
    setFoodList(state: stateType, payload: []) {
      state.foodList = payload;
    },
    setFoodListAll(state: stateType, payload: []) {
      state.foodListAll = payload;
    },
    setValue(state:any, payload:any) {
      console.log(payload.value);
      
        state[payload.field] = payload.value
    },
    setOrder(state: any, payload: { num: number; id: string }) {
      let index = state.userOrder.findIndex(
        (el: { id: any }) => el.id == payload.id
      );

      if (payload.num === 0) {
        // удаляем, если 0
        state.userOrder = state.userOrder.filter(
          (el: any) => el.id != payload.id
        );
        return;
      } else if (index > -1) {
        // если уже есть
        state.userOrder[index].num = payload.num;
      } else {
        // просто новый
        let foodItem = state.foodListAll.find((el: any) => el.id == payload.id);
        if (foodItem) {
          let newObj = cloneDeep(foodItem);
          newObj.num = 1;
          state.userOrder.push(newObj);
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
    },
  },
  modules: {},
});
