import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    ordered_foods: [],
    current_food: '',
    Breakfast: [
      {
        icon: require("../assets/imgs/Ngwaci.jpg"),
        name: "Ngwaci",
        price: "Ksh.20",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("../assets/imgs/Chai.jpg"),
        name: "Chai",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("../assets/imgs/Boiled-egg.jpg"),
        name: "Boiled Eggs",
        price: "Ksh.15",
        router: " ",
      },
      {
        icon: require("../assets/imgs/mandazi.jpg"),
        name: "Mandazi",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("../assets/imgs/mkate.jpg"),
        name: "Loaf",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("../assets/imgs/samosa.jpg"),
        name: "Samosa",
        price: "Ksh.25",
        router: " ",
      },
      {
        icon: require("../assets/imgs/smokie.jpg"),
        name: "Smokie",
        price: "Ksh.25",
        router: " ",
      },
      {
        icon: require("../assets/imgs/kahawa.jpg"),
        name: "Coffee",
        price: "Ksh.10",
        router: " ",
      },
    ],
    Lunch: [
      {
        icon: require("@/assets/imgs/githeri.png"),
        name: "Githeri",
        price: "Ksh.50",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/sukuma.webp"),
        name: "Veggie",
        price: "Ksh.5",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beef.png"),
        name: "Beef",
        price: "Ksh.20",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/rice.jpg"),
        name: "Rice",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beans.jpg"),
        name: "Beans",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ndengu.jpg"),
        name: "Ndengu",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/kuku.jpg"),
        name: "Kuku",
        price: "Ksh.65",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ugali.webp"),
        name: "Ugali",
        price: "Ksh.20",
        router: " ",
      },
    ],
    Supper: [
      {
        icon: require("@/assets/imgs/githeri.png"),
        name: "Githeri",
        price: "Ksh.50",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/sukuma.webp"),
        name: "Veggie",
        price: "Ksh.5",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beef.png"),
        name: "Beef",
        price: "Ksh.20",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/rice.jpg"),
        name: "Rice",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beans.jpg"),
        name: "Beans",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ndengu.jpg"),
        name: "Ndengu",
        price: "Ksh.10",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/kuku.jpg"),
        name: "Kuku",
        price: "Ksh.65",
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ugali.webp"),
        name: "Ugali",
        price: "Ksh.20",
        router: " ",
      },
    ],
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  mutations: {
    increase(state, data) {
      state.count += data
    },
    decrease(state, data) {
      state.count -= data
    },
    current_food(state, food) {
      state.current_food = food;

    },
    remove_order(state) {
      for (let i = 0; i < state.ordered_foods.length; i++) {
        if (state.ordered_foods[i]["Food"] == state.current_food) {
          state.ordered_foods[i]["numTimes"] -= 1;
          state.counter--;
          if (state.ordered_foods[i]["numTimes"] < 1) {
            state.ordered_foods.splice(i, 1);
          }
        }
      }
    },
    add_order(state) {
      for (let i = 0; i < state.ordered_foods.length; i++) {
        if (state.ordered_foods[i]["Food"] == state.current_food) {
          state.ordered_foods[i]["numTimes"] += 1;
          state.counter++;
          return;
        }
      }
      state.ordered_foods.push({
        "Food": state.current_food,
        "numTimes": 1,
      });
    }
  },
  actions: {
    add_action({ commit }, data) {
      commit('increase', data);
    },
    sub_action({ commit }, data) {
      commit('decrease', data);
    },
    current_food_action({ commit }, data) {
      commit('current_food', data);
    },
    remove_order({ commit }) {
      commit('remove_order');
    },
    add_order({ commit }) {
      commit('add_order');
    },
  },
})

export default store;