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
      <div class="foodcontent"  v-for="(food, i) in ordered_foods" :key="i">
        <div class="cart_image_flex"> <img :src="food.icon" /> </div>
       <div class="second_Flex">
        <div class="foodname"> {{ food.food }} </div>
        <span class="price">Ksh.{{ food.price }}</span>
        <div>
        <span
          @click="
            current_food_action({ name: food.food, price: food.price }),
              add_order()
          "
          class="add"
          >+</span
        >
       <span class="counter">{{ food.times }}</span> 
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
        delete_order(), getTotalOrder()
        "  
        class="delete"
        ><img src="../assets/imgs/delete.png" class="deleteimage">
        Remove</span> 
          
        </div>
        
       </div>
      
        <!-- <span class="foodname">{{ food.food }} </span> -->
      </div>
      <div v-show="ordered_foods.length > 0" class="totalorder">
        <span>Total order: {{total_order}}</span>
        <span class="order" @click="postOrder()">Order</span>
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
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { icons } from "../views/exportdocs/export.js";
import  KudishiService from "../services/kudishi.js";
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
      current_icon: (state) => state.current_icon,
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
 
    postOrder(){
        KudishiService.create("dishiUser/orders",{"data":this.ordered_foods})
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        })
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
/* .foodcontent{
  position: relative;
} */
.FoodnOrder {
   width: 100%;
  height: 89%;
  overflow-y: scroll;

}

.foodcontent {
  height: 100px;
  width: 80%;
  margin-left: 8%;
  display: inline-flex;
  position: relative;
  margin-bottom: 5%;
  margin-top: 5%;
  border-radius: 5%;
  /* border-radius: 35px; */
  padding-left: 0%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 8px;
  /* width: auto;
  height: 70px;
  font-weight: bold;
  border: 1px solid red;
  margin-bottom: 5%;
  margin-top: 5%;
  padding-right: 50px;
  padding-left: 5%;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
  position: relative;
  align-items: center;
  text-align-last: justify;
  display: flex;
  justify-content: space-evenly;
  background-color: red; */
}
.top_Part {
  display: inline-flex;
  width: 100%;
}

.cart_image_flex {
  /* display: flex; */
  /* top: 15px; */
  /* left: 90px; */
  width: 30%;
  
  
  align-items: center;
}
.cart_image_flex img {
  width: 100%;
  height: 100%;
  border-radius: 5%;
  
}
.second_Flex {
display: flex;
flex-direction: column;
width: 100%;
padding-left: 20px;
}
.foodname{
  margin-bottom: 5px;
}
.FoodnOrder span{
  position: relative;
}

.remove {
  
  cursor: pointer;
  background-color: #000;
  margin-left: 5px;
  padding: 2px 5px;
  color: #fff;
  border-radius: 50%;
}
.count{
  top: 20px;
  left: 181px;
}
.add {
  cursor: pointer;
  background-color: #000;
  margin-right: 5px; ;
  padding: 2px 5px;
  color: #fff;
  border-radius: 50%;
 
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
  cursor: pointer;
  margin-left: 20%;
  
}
.deleteimage{
  width: 20px;
  height: 20px;
  
}

.price{
  margin-bottom: 5px;
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
.order {
  cursor: pointer;
}
</style>