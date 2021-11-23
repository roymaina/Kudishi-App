<template>
  <div class="food-container">
    <!-- <img 
          id="back" 
          @click="home"
          src="../assets/imgs/back.svg" alt=""/> -->
    <div class="home-foods">
      <div class="home-icons">
        <div class="list-icon" @click="toggleIcons = !toggleIcons">
          <img src="../assets/imgs/list.png" />
        </div>
        <div class="location">
          Location
          <img src="../assets/imgs/placeholder.png" />
        </div>
      </div>
      <div id="home-welcome">
        
        <p class="welcome-name">Good Evening! {{student_id}}</p>
        <span id="welcome-main">Grab your</span><br />
        <span id="welcome-sub">delicious meal!</span>
      </div>
      <div id="home-search-button">
        <div class="home-search">
          <input
            id="search-food"
            type="text"
            placeholder="Foods, Drinks, Snacks...."
          />
        </div>
        <div class="search-button">
          <img src="..//assets/imgs/search.png"/>
        </div>
      </div>
    </div>
    <div :class="toggleIcons ? '' : 'menu-hidden'" id="menu">
      <hr class="hr" />
      <div class="icons-menu">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="parent-abs"
          @click="gotoRoute(icon.router)"
          @mouseover="icon.isHovering = true"
          @mouseout="icon.isHovering = false"
        >
          <div class="icons-list"
          :class="{ hovering: icon.isHovering }">
            <img :src="icon.icon" alt="" />
          </div>
        </div>
      </div>
      <hr class="hr" />
    </div>
    <span id="explore">Explore Categories</span>
    <div class="parent">
    <div class="meals" id="child">
      <div class="item-tabs" v-for="(item, index) in items" 
      :key="index"
      @click="gotorouted(item.router)">
      <img :src="item.icon">
      <span>{{ item.name }}</span>
    </div>
    </div>
    </div>
    <router-view />

    <!-- <div class="icon-container" v-show="toggleIcons">
      <div
        class="icons"
        v-for="(icon, index) in icons"
        :key="index"
        @click="gotoRoute(icon.router)"
      >
        <img :src="icon.icon" height="30" width="30" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script>

import {mapState} from 'vuex';
export default  {
  data() {
    return {
      icons: [
        {
          icon: require("@/assets/imgs/home.png"),
          router: " ",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/shopping-cart.png"),
          router: "",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/wallet.png"),
          router: "",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/question.png"),
          router: "",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/phone.png"),
          router: "/",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/setting-lines.png"),
          router: "/",
          isHovering: false,
        },
        {
          icon: require("@/assets/imgs/logout.png"),
          router: "/",
          isHovering: false,
        },

      ],
      items:[
        {
          icon: require("@/assets/imgs/breakfastimg.jpg"),
          router: "/Breakfast",
          name: "Breakfast"

        },
        {
          icon: require("@/assets/imgs/lunchimg.jpg"),
          router: "/Lunch",
          name: "Lunch"
        },
        {
          icon: require("@/assets/imgs/supperimg.jpg"),
          router: "/Supper",
          name: "Supper"
        }
      ],
      toggleIcons: true,
    };
      
  },
  computed:{
    ...mapState({
      student_id: state => state.student_id,
    }),
  },
  methods: {
    gotoRoute(arg) {
      //   'Foods' + arg
      this.$router.push(`/Foods/${arg}`);
    },
    home() {
      this.$router.push("/");
    },
    gotorouted(arg){
      this.$router.push(`${arg}`);
    }
  },
};
</script>

<style scoped>
.food-container {
  /* background: url("../assets/imgs/background.jpeg") no-repeat center; */
  /* background-size: cover; */
  background-color: #f1eeee;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* border-radius: 35px; */
  overflow: hidden;
  position: relative;
}

#back {
  float: left;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px 0px 0px 10px;
  border: none;
}
.icon-container {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 40%;
  background-color: #f2bc57;
  width: 15%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.icon-container img {
  margin: 6px;
}
.icons {
  cursor: pointer;
}
.home-foods {
  padding: 20px;
}
.home-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8%;
}
.list-icon {
  cursor: pointer;
  height: 15px;
  width: 15px;
}
.home-icons img {
  height: 20px;
  width: 20px;
}
.location {
  background-color: #fff;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  font-weight: lighter;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.location img {
  margin-left: 10px;
  height: 14px;
  width: 14px;
}
#home-welcome {
  margin-bottom: 5%;
}

.welcome-name {
  font-size: 22px;
  /* margin-bottom: 2%; */
}
#welcome-main {
  font-size: 28px;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#welcome-sub {
  font-size: 30px;
  font-weight: bolder;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

#home-search-button {
  display: flex;
  align-items: center;
  margin-top: -30px;
  align-content: center;
}
.home-search {
  margin: 20px 0px;
  display: flex;
}

#search-food {
  height: 20px;
  width: 180px;
  border: none;
  background: white;
  outline: none;
  border-radius: 10px;
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.search-button {
  height: 40px;
  width: 60px;
  border: none;
  margin-left: 10px;
  border-radius: 10px;
  outline: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-repeat: no-repeat;
  background-size: 25px;
  background-position-x: center;
  background-position-y: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons-menu {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.icons-list {
  position: absolute;
  top:0;
  left:4px;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fffbfb;
  border-radius: 6px;
  transition:  0.6s ease-out;
}
.icons-list img {
  height: 20px;
  width: 20px;
}
.hovering {  
  padding: 10px;
  transition: 0.6s ease-in;
  top: -5px;
  left: -5px;
}
.hr {
  margin: 8px 15px;
  opacity: 0.6;
  height: 1px;
  border: none;
  background-color: grey;
}

#menu{
  margin-top: -30px;
}

.menu-hidden {
  visibility: hidden;
}
.parent-abs{
  position: relative;
  height: 30px;
  width: 50px;
}
.search-button img{
   height: 50%;
   width: 50%;
   opacity: 0.6;
   cursor: pointer;
}

#explore{
  font-weight: bold;
  margin-left: 3%;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.meals div{
    position: relative;
    margin:2%;
   /* height: 200px; */
    width: 100%;   
    border-radius: 12px;
    height:0%; 
    padding-top: 46.64%; 
    display: inline-flex;
    overflow: hidden;
}

/* .meals div{
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
} */
.parent{
   overflow: hidden;
   height: 50%;
}

#child{
   height: 100%;
   width:105%;/*to hide scroll bar*/
   overflow-y: scroll;
}

.item-tabs{
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
}
.item-tabs img{
    position: absolute;
    top:0px;
    left:0px;
    z-index:0;
    height:100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
}

.item-tabs span{
  position: absolute;
   top: 2px;
   left: 6px;
   color: #fff;
   z-index:10;
   text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}



</style>