<template>
  <div id="Cart-container">
    <div id="backnspan">
      <div id="back" @click="backtoFoods">
        <img src="..//assets/imgs/back.svg" />
      </div>
      <div id="spannimage">
        <span id="Title">My Orders</span>
        <img src="../assets/imgs/droolingface.png" />
      </div>
    </div>
    <div class="FoodnOrder">
      <div v-for="(food, i) in ordered_foods" :key="i">
        {{ food.food }}
        <span style="margin: 0px 20px">Ksh.{{ food.price }}</span>
        <span
          @click="
            current_food_action({ name: food.food, price: food.price }),
              add_order()
          "
          class="add"
          >+</span
        >
        {{ food.times }}
        <span
          @click="
            current_food_action({ name: food.food, price: food.price }),
              remove_order()
          "
          class="remove"
          >-</span
        >
      </div>
    </div>
         <div v-show="ordered_foods.length > 0" class="totalorder">
        <span>Total order: {{total_order}}</span>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { icons } from "../views/exportdocs/export.js";
export default {
  data() {
    return {
      food: "my order food",
      icons,
      current_food_counter: 0,
      total_order: null,
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      current_food: (state) => state.current_food,
      current_price: (state) => state.current_price,
      total_order: null,
      ordered_foods: (state) =>
        state.ordered_foods.map((e) => {
          return {
            food: e.Food,
            price: e.price,
            times: e.numTimes,
          };
        }),
    }),
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapMutations({
      add: "increase",
      sub: "decrease",
    }),
    ...mapActions(["add_order", "remove_order", "current_food_action"]),
    backtoFoods() {
      this.$router.go(-1);
    },
    checkFood() {
      this.current_food_counter = this.ordered_foods
        .filter((e) => {
          return e["Food"] == this.current_food;
        })
        .map((e) => {
          return e["numTimes"];
        })[0];
    },
    getTotalOrder() {
      this.total_order = this.ordered_foods
        .map((e) => {
          return e.price * e.times;
        })
        .reduce((a, b) => {
          return a + b;
        });
    },
  },
  mounted() {
    this.current_food_counter = this.ordered_foods
      .filter((e) => {
        return e["Food"] == this.current_food;
      })
      .map((e) => e.numTimes)[0];
    this.getTotalOrder();
  },
};
</script>
<style scoped>
#Cart-container {
  background-color: #f1eeee;
  height: 100vh;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* border-radius: 35px; */
  overflow: hidden;
  position: relative;
}
#back {
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px 0px 0px 10px;
  border: none;
  margin-bottom: 4%;
}

#spannimage {
  display: flex;
  margin-left: 25%;
  align-items: center;
  margin-top: -5%;
}

#spannimage img {
  width: 40px;
  height: 40px;
  padding-left: 10px;
}

#Title {
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: bold;
  font-size: 150%;
  /*  */
  margin-left: -5%;
}
.FoodnOrder {
  overflow-y: scroll;
}

.FoodnOrder div {
  width: auto;
  height: 70px;
  font-weight: bold;
  /* border: 1px solid red; */
  margin-bottom: 5%;
  margin-top: 5%;
  padding-right: 50px;
  padding-left: 5%;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
  text-align-last: justify;
  /* background-color: red; */
}
.remove {
  cursor: pointer;
  background-color: #000;
  padding: 2px 5px;
  color: #fff;
  border-radius: 3px;
}
.add {
  cursor: pointer;
  background-color: #000;
  padding: 2px 5px;
  color: #fff;
  border-radius: 3px;
}
.totalorder span {
  width: auto;
  height: 70px;
  font-weight: bold;
  /* border: 1px solid red; */
  margin-bottom: 5%;
  margin-top: 5%;
  padding-right: 50px;
  padding-left: 5%;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
  text-align-last: justify;
}
</style>