<template>
  <div>
    <van-swipe
      style="overflow-x: hidden;width:375px"
      class="swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" class="grid">
      <van-grid-item
        v-for="gird in girdsList"
        :to="gird.to"
        :key="gird.id"
        :text="gird.title"
        props="gird"
      >
        <template slot="icon">
          <img :src="gird.src" alt />
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  name: "component_name",
  created() {
    this.luobotu();
    this.girds();
  },
  data() {
    return {
      imgList: "",
      girdsList: ""
    };
  },
  methods: {
    //轮播图
    async luobotu() {
      let {
        data: { message, status }
      } = await this.$http.get("/api/getlunbo");
      if (status !== 0) return this.$Toast("轮播图请求出错");
      this.imgList = message;
    },
    //宫格
    async girds() {
      let {
        data: { message, status }
      } = await this.$http.get("/api/girds");
      if (status !== 0) return this.$Toast("宫格图片请求出错");
      this.girdsList = message;
    }
  }
};
</script>
<style  scoped>
.swipe {
  height: 200px;
  background: red;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.grid img {
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>