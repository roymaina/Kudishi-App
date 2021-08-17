<template>
  <div class="side-items">
    <div
      v-for="(item, key) in items"
      :key="key"
      @click="breakFast(item.router)" 
    >
      <img :src="item.icon" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: require("@/assets/imgs/home.png"),
          name: "Home",
          router: "/",
        },
        {
          icon: require("@/assets/imgs/shopping-cart.png"),
          name: "My Cart",
          router: "/Cart",
        },
        {
          icon: require("@/assets/imgs/wallet.png"),
          name: "Wallet",
          router: "/Lunch",
        },
        {
          icon: require("@/assets/imgs/question.png"),
          name: "FAQs",
          router: "/Supper",
        },
        {
          icon: require("@/assets/imgs/phone.png"),
          name: "Support",
          router: "/Foods",
        },
        {
          icon: require("@/assets/imgs/setting-lines.png"),
          name: "Setting",
          router: "/",
        },
        {
          icon: require("@/assets/imgs/logout.png"),
          name: "Logout",
          router: "/",
        },
      ],
    };
  },
  methods: {
    breakFast(route) {
      this.$router.push(route);
    },
  },
};
</script >

<style scoped>
.side-items {
  color: #000;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.side-items img {
  height: 20px;
  width: 20px;
}
.side-items div {
  cursor: pointer;
  margin-bottom: 5%;

  width: 115px;
  display: flex;
  padding: 5px 15px;
}
.side-items div span {
  margin-left: 15%;
}
</style>>
