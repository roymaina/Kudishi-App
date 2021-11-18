<template>
  <div id="app_vue">
    <router-view/>
  </div>
</template>

<script>
// import Home from '@/views/Home.vue'

export default {
   components:{
    //  Home
   }  
}
</script>

<style>
@font-face {
  font-family: "Poppins";
  src: local("Poppins"),
   url(./assets/fonts/Poppins-Medium.ttf) format("truetype");
}
/* @-webkit-keyframes mymove {
  from {
    width: 100%;
    height: 0%;
  }
  to {
    width: 100%;
    height: 100%;
  }
}
@keyframes mymove {
  from {
    width: 100%;
    height: 0%;
  }
  to {
    width: 100%;
    height: 100%;
  }
} */
#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  /* margin-top: 60px; */
}
*{
  font-family: "Poppins";
  margin:0;
  padding:0;
}
#app_vue{
  display: flex; 
  justify-content: center;
}
  
</style>
