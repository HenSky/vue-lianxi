<template>
  <div>
    <router-link v-for="news in news" :key="news.id" :to="'/home/newinfo/'+news.id">
      <van-card :title="news.title" :thumb="news.img_url">
        <div slot="price">
          发表时间:
          <span class="add_time">{{news.add_time}}</span>
        </div>
        <div slot="num">
          点击
          <span class="click">{{news.click}}</span>次
        </div>
      </van-card>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "component_name",
  created() {
    this.showNews();
  },
  data() {
    return {
      news: ""
    };
  },
  methods: {
    async showNews() {
      let {
        data: { message, status }
      } = await this.$http.get("/api/getnewslist");
      console.log(message);
      this.news = message;
    }
  }
};
</script>
<style  scoped>
.van-card__thumb {
  height: 55px;
}
.van-card__header {
  height: 55px;
}
.van-card__title {
  margin-bottom: 20px;
}
.click,
.add_time {
  color: red;
}
</style>