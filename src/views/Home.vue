<template>
    <div id="container">
      <img src="../assets/imgs/Disfrutar.jpg" alt="" class="img"> 
      <!-- <img id="homeImage" src="../assets/imgs/sembe_sukuma.png" alt="">        -->
      <p class="title">Kudishi</p>
      <div class="home-contents">
          <h3>Freshness in every bite</h3>
          <span>Karibu Kudishi where quality meets quantity</span>
      </div>
      <div>
        <form class="wrapper" @submit.prevent="gotoFoods">
          <div class="Adm" >
             
          <input style="border-radius:15px; height:30px; width: 200px; padding-left:5px; padding-bottom:5px; "
            id="amdissionno"
            name="adm"
            type="text"
            v-model="studentid"
            placeholder="Admission Number"
            required
          />
         
        </div>
        <div class="Pass" >
          <input style="border-radius:15px; height:30px; width: 200px; padding-left:5px; padding-bottom:5px; margin-top:5px; margin-bottom:10px;"
            id="passwordno"
            name="password"
            type="text"
            placeholder="Password"
            required
          />
        </div>
        <div >
          <input type="submit" id="Logincred" style="background-color:black; color:white; width:100px; height:50px; border-radius:15px;"> 
      </div>
      </form>
        </div>
    </div>

</template>

<script>

// let wrapper = document.querySelector(".wrapper"),
//     form = wrapper.querySelectorAll(".form"),
//     submitInput = form[0].querySelector("input[type='submit']");

// function getDataForm(e){
//     e.preventDefault();
//     var FormData = new FormData(form[0]);
//     alert( FormData.get('admissionno') + ' - '+ FormData.get('passwordno'));
// }

// document.addEventListener('DOMContentLoaded' , function(){
//     submitInput.addEventListener('click' , getDataForm, false);
// }, false);

// import  KudishiService from "../ services/kudishi.js";
import { mapActions } from 'vuex';
export default {
   name:'Home',
   components:{  
 
   },
   
   data(){
       return{
         studentid:null,

       }
   },    
   methods:{
       ...mapActions(['set_student_id']),
       gotoFoods(){
           this.set_student_id(this.studentid);
        //    KudishiService.create("dishiUser/orders",{"studentid":this.studentid})
           console.log('Foods');
           this.$router.push("/Foods");
       }
   }
}
</script>
<style scoped>

  #close{
   background: url("../assets/imgs/cancel.png");
   background-repeat: no-repeat;
   background-size: contain;
   height: 20px;
   width: 20px;
   border: none;
   cursor: pointer;
   margin: 25px;
}
#container{
   /* background-color: #f2bc57; */
   height: 20%;
   width: 20%;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border-radius: 35px;
   overflow:hidden;
   position: relative;
   background-color: #F1EEEE;
   z-index: 10;
   display: flex;
   flex-direction: column;
   align-items: center;
   /* background: url('../assets/imgs/wave.svg') no-repeat center center fixed; */
   /* background-size: cover; */
  }

  .title{
      font-size: 35px;
      color: white;
      margin-top: 10%;
  }
  .img{
    position: absolute;
    /* top:0%;
    left:15%;  */
    height:100%;
    width:100%;
    object-fit: cover;
    /* object-position: center;
    transform: rotate(-70deg) scaleX(3.5) scaleY(6.0); */
    z-index:-10;
  }
  #homeImage{
      /* z-index: 10; */
      margin-top: 10%;
      height: 220px;
      width: 220px;
  }
  .home-contents{
      margin: 5%;
      padding: 20px;
      margin-top: 70%;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
  }
  .home-contents h3{
      font-size: 30px;
      margin-bottom: 20px;
  }
  
  /* .login{
      height: 40px;
      width: 90px;
      color: #fff;
      background-color: #000;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index:0;
      box-shadow: rgba(255, 255, 255, 0.2) 0px 2px 8px 0px;
      border:none; 
      outline: none;
      cursor: pointer;
      padding-bottom: 5px;
  } */
</style>