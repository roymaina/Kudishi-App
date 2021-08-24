import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0,
        ordered_foods: [ ],
        current_food: ''
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
        current_food(state, food){
            state.current_food = food;
            
        },
        remove_order(state){
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
        add_order(state){
            for (let i = 0; i < state.ordered_foods.length; i++) {
                if (state.ordered_foods[i]["Food"] == state.current_food) {
                  state.ordered_foods[i]["numTimes"] += 1;
                  // console.log(state.ordered_foods);
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
            console.log(data);
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