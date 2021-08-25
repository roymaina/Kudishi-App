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
    <!-- <button @click="$store.commit('decrease')">Decrease</button>
    <span>{{counter}}</span>
    <button @click="$store.commit('increase')">Increase</button> -->
    <!-- <button @click="sub">Subtract</button>
    <span>{{counter}}</span>
    <button @click="add">Add</button> -->
    <div class="FoodnOrder">
      <span v-for="(f, i) in ordered_foods" :key="i">{{ f[0] }} {{f[1]}} <br></span>
      <!-- <span id="Numberoftimes" v-for="(n, x) in  ordered_foods" :key="x">{{ x }}</span> -->
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  el: "Cart",
  data() {
    return {
      food: "my order food",
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      ordered_foods: (state) => (state.ordered_foods).map((e)=>{ return [e["Food"], e["numTimes"]]}),
    }),
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapMutations({
      add: "increase",
      sub: "decrease",
    }),
    ...mapActions(["add_action", "sub_action"]),
    backtoFoods() {
      console.log(this.$routes);
      this.$router.go(-1);
    },
  },
  mounted() {
    // this.emitter.on("changed", (dt) => {
    //   console.log('Called bus' + dt);
    //   this.food = dt;
    /*eslint-disable-next-line*/
    bus.$on("my_emitted_name", async (data) => {
      console.log("Bus now existing:", data);
    });
    console.log("Cart Template is mounted");
  },
};
</script>
<style scoped>
#Cart-container {
  background-color: #f1eeee;
  height: 650px;
  width: 290px;
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
  margin-left: -5%;
 
}
.FoodnOrder{
  width: 100%;
  height: 35%;
  background-color: green;

}

#FoodnOrder span{
  font-weight: bold;
}
</style>