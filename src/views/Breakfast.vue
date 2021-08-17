<template>
  <div class="breakfast-container">
    <div id="back" @click="backtoFoods">
      <img src="..//assets/imgs/back.svg" />
    </div>
    <div class="titleandimage">
      <span class="brekotitle">Karibu Chai</span>
      <img class="breakfastimage" src="..//assets/imgs/tea.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.breakfast-container{
  background-color: #f1eeee;
  height: 650px;
  width: 290px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
}
.brekotitle{
  font-size: 170%;
  font-weight: bold;
  margin-top: 50%;
  margin-left: 5%;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
#back{
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px 0px 0px 10px;
  border: none;
  margin-bottom: 4%;
}
.titleandimage{
  display: flex;
  border: 1px solid red;
}
.breakfastimage{
 
}
</style>