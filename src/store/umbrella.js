import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    ordered_foods: [],
    current_food: '',
    current_price: '',
    current_icon: '',
    Breakfast: [
      {
        icon: require("../assets/imgs/Ngwaci.jpg"),
        name: "Ngwaci",
        price: 20,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: 10,
        router: " ",
      },
      {
        icon: require("../assets/imgs/Chai.jpg"),
        name: "Chai",
        price: 10,
        router: " ",
      },
      {
        icon: require("../assets/imgs/Boiled-egg.jpg"),
        name: "Boiled-Eggs" ,
        price: 15,
        router: " ",
      },
      {
        icon: require("../assets/imgs/mandazi.jpg"),
        name: "Mandazi",
        price: 10,
        router: " ",
      },
      {
        icon: require("../assets/imgs/mkate.jpg"),
        name: "Loaf",
        price: 10,
        router: " ",
      },
      {
        icon: require("../assets/imgs/samosa.jpg"),
        name: "Samosa",
        price: 25,
        router: " ",
      },
      {
        icon: require("../assets/imgs/smokie.jpg"),
        name: "Smokie",
        price: 25,
        router: " ",
      },
      {
        icon: require("../assets/imgs/kahawa.jpg"),
        name: "Coffee",
        price: 10,
        router: " ",
      },
    ],
    Lunch: [
      {
        icon: require("@/assets/imgs/githeri.png"),
        name: "Githeri",
        price: 50,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/sukuma.webp"),
        name: "Veggie",
        price: 5,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beef.png"),
        name: "Beef",
        price: 20,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/rice.jpg"),
        name: "Rice",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beans.jpg"),
        name: "Beans",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ndengu.jpg"),
        name: "Ndengu",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/kuku.jpg"),
        name: "Kuku",
        price: 65,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ugali.webp"),
        name: "Ugali",
        price: 20,
        router: " ",
      },
    ],
    Supper: [
      {
        icon: require("@/assets/imgs/githeri.png"),
        name: "Githeri",
        price: 50,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/chapo.png"),
        name: "Chapati",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/sukuma.webp"),
        name: "Veggie",
        price: 5,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beef.png"),
        name: "Beef",
        price: 20,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/rice.jpg"),
        name: "Rice",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/beans.jpg"),
        name: "Beans",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ndengu.jpg"),
        name: "Ndengu",
        price: 10,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/kuku.jpg"),
        name: "Kuku",
        price: 65,
        router: " ",
      },
      {
        icon: require("@/assets/imgs/ugali.webp"),
        name: "Ugali",
        price: 20,
        router: " ",
      },
    ],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getprice(state){
      return state.Breakfast.price;
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
      state.current_food = food.name;
      state.current_price = food.price;
      console.log(`Invoking ${state.current_food} and ${state.current_price}`);

    },
    current_icon(state, icon) {
      state.current_icon = icon;
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
      console.log(state.current_food);
      for (let i = 0; i < state.ordered_foods.length; i++) {
        if (state.ordered_foods[i]["Food"] == state.current_food) {
          state.ordered_foods[i]["numTimes"] += 1;
          state.counter++;
          return;
        }
      }
      state.ordered_foods.push({
        "Food": state.current_food,
        'price': state.current_price,
        "icons": state.current_icon,
        "numTimes": 1,
      });
    },
    delete_order(state) {
      for (let i = 0; i < state.ordered_foods.length; i++) {
        if (state.ordered_foods[i]["Food"] == state.current_food) {
          state.ordered_foods[i]["numTimes"] = 0;
          state.ordered_foods.splice(i, 1);
        }
      }
      
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
      commit('current_price', data);
    },
    current_icon_action({ commit }, icons) {
      console.log(icons);
      commit('current_icon', icons);
    },
    remove_order({ commit }) {
      commit('remove_order');
    },
    add_order({ commit }) {
      commit('add_order');
    },
    delete_order({ commit }) {
      commit('delete_order');
    },
  },
})

export default store;