<template>
  <div class="supper-container">
    <div id="back" @click="backtoFoods">
      <img src="..//assets/imgs/back.svg" />
    </div>
    <div class="supper-header">
      <div class="suppertext">
        <h1 id="suppertext">
            Dinner <br/>
            is served
        </h1>
      </div>
      <div class="supperimg">
        <img src="../assets/imgs/serving-dish.svg"/>
      </div>
    </div>
    <div id="foodmenu">Food Menu</div>
    <div class="parent">
      <div class="suppercontents" id="child">
        <div v-for="(icon, id) in icons" :key="id">
          <img :src="icon.icon" />
          <span>{{ icon.name }}</span>
          <h5>{{ icon.price }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
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
    };
  },
  methods: {
    backtoFoods() {
      console.log("Food");
      this.$router.push("/Foods");
    },
   
  },
  
}
</script>

<style scoped>
.supper-container {
  padding: 10px;
   background-color: #F1EEEE;
   height: 650px;
   width: 290px;
   overflow:hidden;
   border-radius: 35px;
}
#back {
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px 0px 0px 10px;
  border: none;
  margin-bottom: 4%;
}

.supper-header {
  display: flex;
  /* text-align-last: justify; */
}
.suppertext {
  width: 80%;
  padding: 10px 0px 0px 55px;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 2%;
  font-size: 15px;
  
}
.suppertext h1 {
  margin-left: 8px;
  color: #000;
  justify-content: left;
  justify-items: left;
  text-align-last: left;
}
.supperimg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 20px;
}
.supperimg img {
  width: 70px;
}

#foodmenu {
  font-size: 20px;
  font-weight: bold;
  /* border: 1px solid red; */
  margin-right: 52%;
  color: black;
}

.suppercontents {
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

.suppercontents div {
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
.suppercontents div img {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.suppercontents div span {
  position: absolute;
  top: 2px;
  left: 6px;
  color: #fff;
  z-index: 10;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.suppercontents div h5{
  position: absolute;
  top: 105px;
  left: 6px;
  color: #fff;
  font-weight: bold;
}
</style>