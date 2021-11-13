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
    <!-- hello {{icons}} -->
    <!-- <button @click="$store.commit('decrease')">Decrease</button>
    <span>{{counter}}</span>
    <button @click="$store.commit('increase')">Increase</button> -->
    <!-- <button @click="sub">Subtract</button>
    <span>{{counter}}</span>
    <button @click="add">Add</button> -->
    <div class="FoodnOrder">
      <div v-for="(food, i) in ordered_foods" :key="i">
        {{ food.food }} 
        <span @click="current_food_action(food.food), add_order()" class="add">+</span>
            {{food.times}}
            <span @click="current_food_action(food.food), remove_order()" class="remove">-</span>
         
        </div>
      <!-- <span id="Numberoftimes" v-for="(n, x) in  ordered_foods" :key="x">{{ x }}</span> -->
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
      current_food_counter:0,
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      current_food: (state) => state.current_food,
      ordered_foods: (state) => (state.ordered_foods).map((e)=>{
         return {
           'food' : e.Food, 
           'times' : e.numTimes,
         }
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
        return e['numTimes']
      })[0]
    },
  },
  mounted() {
    this.current_food_counter = this.ordered_foods
    .filter(
      (e)=>{
        return e['Food'] == this.current_food;
      }
    ).map(e=>e.numTimes)[0];
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

#Title{
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight:bold;
  font-size: 150%;
  /*  */
  margin-left: -5%;
}
.FoodnOrder{
  width: 100%;
  height: 89%;
  overflow-y: scroll;

}

.FoodnOrder div{
  width: auto;
  height: 70px;
  font-weight: bold;
  /* border: 1px solid red; */
  margin-bottom: 5%;
  margin-top:5%;
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
</style>