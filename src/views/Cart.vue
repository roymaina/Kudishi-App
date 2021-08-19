<template>
  <div id="Cart-container">
    <div id="backnspan">
      <div id="back" @click="backtoFoods">
      <img src="..//assets/imgs/back.svg" />
      </div>
      <div id="spannimage">
        <span>My Order</span>
        <img src="../assets/imgs/drooling-emoji.jpg" />
      </div>
    </div>

    <span>{{food}}</span>
  </div>
</template>

<script>

export default {
  data(){
    return{
      food:"my order food"
      }
    
    },
    methods: {
        backtoFoods(){
        console.log(this.$routes);
        this.$router.go(-1);
    }
  },
  mounted(){
    this.emitter.on("changed", (dt) => {
      console.log('Called bus' + dt);
      this.food = dt;
    });
  }

}
</script>
<style scoped>
#Cart-container{
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

#backnspan{
  display: flex;
  align-items: center;
  height:45px;
  
}

#spannimage {
  display: flex;
  margin-left: 25%;
  align-items: center;
  margin-top: 2%;
}

#spannimage img {
  width:  20px;
  height: 20px;
  padding-left: 10px;
}

</style>