<template>
  <div class="newinfo">
    <van-card :title="newinfo.title">
      <div class="title" slot="price">
        <span class="add_time">发表时间:{{newinfo.add_time}}</span>
      </div>
      <div slot="num">
        点击
        <span style="color:red">{{newinfo.click}}</span>次
      </div>
    </van-card>
    <div class="newinfo-body">{{newinfo.content}}</div>
    <pinglun :pinglunList="pinglunList" />

    <van-button plain type="danger" size="large" @click="nextPage">加载更多</van-button>
  </div>
</template>
<script>
import pinglun from "../../../../components/pinglun.vue";

export default {
  name: "component_name",
  data() {
    return {
      id: "",
      newinfo: "",
      pinglunList: [],
      pageindex: 0,
      limit: 4
    };
  },
  methods: {
    async show() {
      let {
        data: { message, status }
      } = await this.$http.get("/api/getnew/" + this.id);
      if (status !== 0) return this.$Toast("新闻详情数据请求出错");
      this.newinfo = message;
    },
    async getPinlun() {
      this.pageindex++;
      let {
        data: { message, status, count }
      } = await this.$http.get(
        `/api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`
      );
      if (status !== 0) return this.$Toast("新闻详情数据请求出错");
      console.log(message);
      //   console.log(this.pinglunList);
      this.pinglunList = this.pinglunList.concat(message);
    },
    nextPage() {
      this.getPinlun();
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.show();
    this.getPinlun();
  },
  components: {
    pinglun
  }
};
</script>
<style  scoped>
.newinfo {
  padding: 0 4px;
}
.van-card__title {
  text-align: center;
  font-size: 16px;
  color: red;
}
.van-card__bottom {
  margin-top: 20px;
}
.van-card {
  background: white;
}
.newinfo-body {
  text-indent: 2em;
}
.newinfo-body {
  padding: 15px 0px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}
.add_time {
  color: #1989fa;
}
</style>