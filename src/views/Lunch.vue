<template>
  <div class="lunch-container">
    <div id="back" @click="backtoFoods">
      <img src="..//assets/imgs/back.svg" />
    </div>
    <div class="lunch-header">
      <div class="lunchtext">
        <h1>
          It's <br />
          LunchTime...
        </h1>
      </div>
      <div class="lunchimg">
        <img src="../assets/imgs/hungry.svg" alt="I'm Hungry" />
      </div>
    </div>
    <div class="foodncart">
      <div id="foodmenu">
        <span>Food Menu</span>
      </div>
      <div class="Cart" @click="gotoCart">
      <img src="../assets/imgs/trolley.png" />
      </div>
    </div>
    <div class="parent">
      <div class="lunchcontents" id="child">
        <div
          class="perfood"
          v-for="(icon, id) in icons"
          :key="id"
          @click="currentFood(icon.name), checkFood()"
        >
          <img :src="icon.icon" class="pricename" />
          <span>{{ icon.name }}</span>
          <div class="myclass"
          v-show="current_food && current_food==icon.name">
            <div
              @click="addOrder"
              class = "add"
            >
              +
            </div>
            {{ counter }}
            <div
              @click="removeOrder"
              class = "remove"
            >
              -
            </div>
          </div>
          <p>Hello</p>
          <h5>{{ icon.price }}</h5>
        </div>
      </div>
    </div>
    <!-- <div class="parent">
      <div
        class="lunchcontents"
        id="child"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <div>
        <img :src="icon.icon"/>
        <span>{{ icon.name }}</span>
        </div>
      </div>
    </div> -->

    <!-- <router-view /> -->
  </div>
</template>

<script>

/*eslint-disable-next-line*/
import { bus } from "../main";
export default {
  data() {
    return {
      counter : 0,
      icons: [
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
      current_food: null,
      ordered_foods: [],
    };
  },
  methods: {
    backtoFoods() {
      console.log("Food");
      this.$router.push("/Foods");
    },
    gotoCart() {
      console.log("Cart");
      this.$router.push("/Cart");
    },
    currentFood(name) {
      this.current_food = name;
    },
    removeOrder() {
      for (let i = 0; i < this.ordered_foods.length; i++) {
        if (this.ordered_foods[i]["Food"] == this.current_food) {
          this.ordered_foods[i]["numTimes"] -= 1;
          this.counter --;
          // return;
          if (this.ordered_foods[i]["numTimes"] < 1) {
            this.ordered_foods.splice(i, 1);
          }
        }
      }
      console.log(this.ordered_foods);
    },
    addOrder() {
      for (let i = 0; i < this.ordered_foods.length; i++) {
        if (this.ordered_foods[i]["Food"] == this.current_food) {
          this.ordered_foods[i]["numTimes"] += 1;
          console.log(this.ordered_foods);
          this.counter ++;
          return;
        }
  
      }
      this.ordered_foods.push({
        Food: this.current_food,
        numTimes: 1,
      });
      console.log(this.ordered_foods);
      // console.log(this.ordered_foods);
    },
    checkFood() {
      let checked = this.ordered_foods.filter((e) => {
        return e["Food"] == this.current_food;
      });
      console.log(checked);
      if (checked == undefined) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
  },
};
</script>

<style scoped>
*{
  font-family: 'Poppins';
}
.lunch-container {
  background-color: #f1eeee;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
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
  opacity: 60%;
  animation: mymove 1s forwards;
}
@keyframes mymove{
  from {width: 100%; height: 0%;}
  to {width: 100%; height: 100%;}
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
#foodmenu{
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.24)0px 3px 8px;
}

.Cart{
  cursor: pointer;
}
</style>