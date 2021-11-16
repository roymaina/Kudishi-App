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
        <img :src="food.icon" class="cart_image"/>
<<<<<<< HEAD
        <span @click="current_food_action({ name: food.food, price: food.price }), add_order()" class="add">+</span>
           <span class="count">{{food.times}}</span> 
            <span @click="current_food_action({ name: food.food, price: food.price }), remove_order()" class="remove">-</span>
         <span @click="current_food_action({name: food.food, price: food.price}), delete_order()"  class="delete"><img src="../assets/imgs/delete.png" ></span>
         <span class="price" style="margin: 0px 20px">Ksh.{{ food.price }}</span>
        </div>
      <!-- <span id="Numberoftimes" v-for="(n, x) in  ordered_foods" :key="x">{{ x }}</span> -->
    </div>
    <div v-show="ordered_foods.length > 0" class="totalorder">
        <span>Total order: {{total_order}}</span>
      </div>
=======
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
          >-</span >
        <span 
        @click="
        current_food_action({name:food.food}),
        delete_order()
        "  
        class="delete"
        ><img src="../assets/imgs/delete.png" class="deleteimage"></span>
        <!-- <span class="foodname">{{ food.food }} </span> -->
      </div>
      </div>
      <!-- <div class="foodcontent" v-for="(food, index) in ordered_foods" :key="index"> -->
        <!-- <span class="foodname">{{ food.food }} </span>
        <img :src="food.icon" class="cart_image"/> -->
        <!-- <span @click="current_food_action(food.food), add_order()" class="add">+</span>
           <span class="count">{{food.times}}</span> 
            <span @click="current_food_action(food.food), remove_order()" class="remove">-</span> -->
         <!-- <span @click="current_food_action(food.food), delete_order()"  class="delete"><img src="../assets/imgs/delete.png" ></span> -->
      <!-- <span id="Numberoftimes" v-for="(n, x) in  ordered_foods" :key="x">{{ x }}</span> -->         
      <div v-show="ordered_foods.length > 0" class="totalorder">
        <span>Total order: {{total_order}}</span>
  </div>
>>>>>>> fdacd034851c0a7b4288ac252d7ef5b3cba82ed5
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
<<<<<<< HEAD
      current_food_counter:0,
=======
      current_food_counter: 0,
>>>>>>> fdacd034851c0a7b4288ac252d7ef5b3cba82ed5
      total_order: null,
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      current_food: (state) => state.current_food,
      current_price: (state) => state.current_price,
      current_icon: (state) => state.current_icon,
<<<<<<< HEAD
      current_price: (state) => state.current_price,
      ordered_foods: (state) => (state.ordered_foods).map((e)=>{
         return {
           'food' : e.Food, 
           'times' : e.numTimes,
           'icon' : e.icons,
           'price': e.price,
         }
           }),
=======
      total_order: null,
      ordered_foods: (state) =>
        state.ordered_foods.map((e) => {
          return {
            food: e.Food,
            price: e.price,
            times: e.numTimes,
            icon : e.icons,
          };
        }),
      // ordered_foods: (state) => (state.ordered_foods).map((e)=>{
      //    return {
      //      'food' : e.Food, 
      //      'times' : e.numTimes,
           
      //    }
      //      }),
>>>>>>> fdacd034851c0a7b4288ac252d7ef5b3cba82ed5
    }),
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapMutations({
      add: "increase",
      sub: "decrease",
    }),
    ...mapActions(["add_order", "remove_order", "current_food_action","current_food_icon","delete_order"]),
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
  display: flex;
  flex-direction: column-reverse;
  

}
.foodcontent{
  position: relative;
}

.FoodnOrder div {
  width: auto;
  height: 70px;
  font-weight: bold;
  /* border: 1px solid red; */
  margin-bottom: 5%;
  margin-top: 5%;
  /* padding-right: 50px; */
  padding-left: 5%;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
  position: relative;
  align-items: center;
  /* text-align-last: justify; */
  /* display: flex; */
  justify-content: space-evenly;
  /* background-color: red; */
}
.foodname {
position: absolute;
top: 25px;
left: 10px;
}
.FoodnOrder span{
  position: relative;
}

.cart_image {
  position: relative;
  /* display: flex; */
  /* top: 15px; */
  /* left: 90px; */
  width: 50px;
  height: 50px;
}
.remove {
  position: relative;
  height: 35%;
  width: 35%;
  /* cursor: pointer; */
  background-color: #000;
  /* top: 20px; */
  /* left: 200px; */
  margin-left: 70px;
  margin-right: 70px;
  position: relative;
  padding: 2px 5px;
  color: #fff;
  border-radius: 3px;
}
.count{
  position: relative;
  top: 20px;
  left: 181px;
}
.add {
  height: 35%;
  width: 35%;
  cursor: pointer;
  background-color: #000;
  margin-left: 40px;
  margin-right: 70px;
  padding: 2px 5px;
  color: #fff;
  border-radius: 3px;
  position:absolute;
  justify-content: flex-end;
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
.delete {
  position: relative;
  /* top: 20px; */
  /* left: 220px; */
  cursor: pointer;
  margin-left: 5%;
  
}
.deleteimage{
  position: relative;
  padding: -2px 300px;
  /* padding-bottom: -5%; */
  width: 20px;
  height: 20px;
  justify-content: flex-end;
}

.price{
  position: absolute;
  right: 30px;
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