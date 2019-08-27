<template>
  <div class="box">
    <van-nav-bar fixed title="千峰1903牛皮" left-text="返回" left-arrow @click-left="onClickLeft" />
    <transition name="fly" mode="out-in">
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend">标签</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">标签</van-tabbar-item>

      <van-tabbar-item icon="search" to="/search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "component_name",
  created() {},
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>
<style  scoped>
.box {
  overflow-x: hidden;
  padding: 50px 0px;
}
.fly-enter {
  transform: translateX(100%);
}
.fly-leave-to {
  transform: translateX(-100%);
  position: absolute;
  /* left: -300%; */
}
.fly-enter-active,
.fly-leave-active {
  transition: all 0.3s ease;
}
</style>