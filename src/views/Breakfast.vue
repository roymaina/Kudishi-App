<template>
  <div class="breakfast-container">
      <span class="brekotitle">Karibu Chai</span>
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
.breakfast-container {
  padding: 10px;
  background-color: #f1eeee;
  height: 650px;
  width: 290px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#back {
  float: left;
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding: 20px 0px 0px 10px;
  border: none;
}
.btn{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width:40%;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 2em;
    cursor: pointer;
}
</style>