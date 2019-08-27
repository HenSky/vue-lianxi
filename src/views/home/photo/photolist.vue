<template>
  <div>
    <van-tabs v-model="active" animated @change="changeList">
      <van-tab v-for="(phopolist,index) in photolist" :title="phopolist.title" :key="index">
        <div class="imgdiv" v-if="imglist.length!==0">
          <img
            v-for="(imglist,index) in imglist"
            :key="index"
            :src="imglist.img_url"
            :alt="imglist.title"
          />
        </div>
        <div v-else>没有数据</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {
      active: 0,
      photolist: [],
      imglist: []
    };
  },
  methods: {
    async getphotolist() {
      let {
        data: { message, status }
      } = await this.$http.get("/api/getimgcategory");
      if (status !== 0) return this.$Toast("图片列表请求出错");
      //   console.log(message);
      this.photolist = message;
      this.photolist.unshift({ id: 0, isdel: "0", title: "全部" });
    },
    changeList(index) {
      this.queryOnePho(index);
    },
    async queryOnePho(index) {
      let {
        data: { message, status }
      } = await this.$http.get("/api/getimages/" + index);
      if (status !== 0) return this.$Toast("图片分类详情请求出错");
      console.log(message);
      this.imglist = message;
    }
  },
  created() {
    this.getphotolist();
    this.queryOnePho(0);
  }
};
</script>
<style  scoped>
img {
  width: 100%;
  height: 100%;
}
.imgdiv {
  margin: 5px 0px;
}
</style>