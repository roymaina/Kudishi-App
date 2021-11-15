<template>
  <div class="lunch-container">
    <div id="back" @click="backtoFoods">
      <img src="..//assets/imgs/back.svg" />
    </div>
    <div class="lunch-header">
      <div class="lunchtext">
        <h1>
          Karibu <br />
          Chai...
        </h1>
      </div>
      <div class="lunchimg">
        <img src="..//assets/imgs/tea.png" alt="I'm Hungry" />
      </div>
    </div>
    <div class="foodncart">
      <div id="foodmenu">
        <span>Food Menu</span>
      </div>
      <img class="Cart" @click="gotoCart" src="../assets/imgs/trolley.png" />
      <span id="countr">{{this.ordered_foods.length}}</span>
    </div>
    <div class="parent">
      <div class="lunchcontents" id="child">
        <div
          class="perfood"
          v-for="(icon, id) in  Breakfast"
          :key="id"
          @click="current_food_action({'name': icon.name, 'price': icon.price}), current_icon_action(icon.icon), checkFood()"
        >
          <img :src="icon.icon" class="pricename" />
          <span>{{ icon.name }}</span>
          <div
            class="myclass"
            v-show="current_food && current_food == icon.name"
          >
            <div @click="add_order()" class="add">+</div>
            {{ current_food_counter }}
            <div @click="remove_order" class="remove">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { bus } from "../main";
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      current_food_counter:0,
    };
  },
  methods: {
    ...mapActions(["add_order", "remove_order", "current_food_action", "current_icon_action"]),
    backtoFoods() {
      console.log("Food");
      this.$router.push("/Foods");
    },
    gotoCart() {
      this.$router.push("/Cart");
    },
    checkFood() {
      this.current_food_counter = this.ordered_foods
      .filter((e) => {
        return e["Food"] == this.current_food;
      })
      .map((e) => {
        return e['numTimes']
      })[0];
      console.log("Check food");
    },
  },
  computed: {
    ...mapState({
      ordered_foods: (state) => state.ordered_foods,
      current_food: (state) => state.current_food,
      current_price: (state) => state.current_price,
      current_icon: (state) => state.current_icon,
      Breakfast: (state) => state.Breakfast,
    }),
  },
  mounted(){
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

* {
  font-family: "Poppins";
}

.lunch-container {
  background-color: #f1eeee;
  height: 100%;
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

.lunch-header {
  display: flex;
  margin-top: -5%;
}
.lunchtext {
  width: 80%;
  padding: 10px 0px 0px 55px;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 2%;
  font-size: 15px;
  text-align-last: justify;
}
.lunchtext h1 {
  margin-left: 8px;
  color: #000;
  justify-content: left;
  justify-items: left;
}
.lunchimg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 20px;
}
.lunchimg img {
  width: 70px;
}

.lunchcontents {
  display: flex;
  flex-wrap: wrap;
  padding: 1%;
}

.parent {
  overflow: hidden;
  height: 70%;
}

#child {
  height: 100%;
  width: 105%; /*to hide scroll bar*/
  overflow-y: scroll;
}

.perfood {
  position: relative;
  margin: 2%;
  height: 200px;
  width: 45%;
  border-radius: 12px;
  overflow: hidden;
  height: 0;
  padding-top: 46.64%;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
}
.myclass {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  opacity: 65%;
  width: 100%;
  height: 100%;
  -webkit-animation: mymove 1s forwards;
  animation: mymove 1s forwards;
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

.perfood img {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.perfood span {
  position: absolute;
  top: 2px;
  left: 6px;
  color: #fff;
  z-index: 10;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: bolder;
  /* display: flex;
  flex-direction: column;
  float: left; */
}

.perfood h5 {
  position: absolute;
  top: 105px;
  left: 6px;
  color: #fff;
  font-weight: bold;
}

.foodncart {
  padding: 0 10px;
  width: auto;
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
  position: relative;
}

.foodncart img {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  display: flex;
  float: right;
  padding: 20px;
}

#foodmenu {
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.Cart {
  cursor: pointer;
}
#countr {
  position: absolute;
  right: 20px;
  top: 0;
  background: black;
  color: #f1eeee;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  font-size: 10px;
  text-align: center;
}
</style>