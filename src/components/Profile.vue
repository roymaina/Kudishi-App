<template>
  <div id="profile-container">
    <div class="profile">
      <div class="profile-image"></div>
    </div>
    <div class="profile-name">
      <span class="hello"> Hello, </span>
      <span class="hello-name"> Justin </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#profile-container {
    /* border: 1px solid red; */
  padding: 0px 15px 30px 15px;
  display: flex;
  width: 100%;
  align-items: center;
  color: #000;
}
.profile {
  padding: 30px 0px 10px 10px;
  display: flex;
  align-items: center;
}
.profile-image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid #fff;
  overflow: hidden;
  background: url("../assets/imgs/man.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
}
.profile-name {
  width: 50px;
  padding-top:8%;

}
.profile-name .hello {
  font-size: 22px;
  font-weight: 100;
}
.profile-name .hello-name {
  font-size: 25px;
  font-weight: bolder;
}
#welcome {
  width: 70%;
  border: 1px solid red;
}
</style>