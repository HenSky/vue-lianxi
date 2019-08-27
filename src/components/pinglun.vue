<template>
  <div class="pinglun">
    <h2>发表评论</h2>
    <textarea class="content" rows="10" placeholder="请输入评论内容,不得超过20字"></textarea>
    <van-button type="info" size="large">发表评论</van-button>
    <div v-for="(pinglun,index) in pinglunList" :key="index">
      <div class="pinglunCon">
        <span>第{{index+1}}楼</span>
        <span>用户:{{pinglun.user_name}}</span>
        <span>发表时间:{{pinglun.add_time}}</span>
      </div>
      <p>{{pinglun.content}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  data() {
    return {};
  },
  props: {
    pinglunList: Array
  }
};
</script>
<style  scoped>
.content {
  width: 100%;
  height: 200px;
  border: 0;
}
.pinglunCon {
  background: #ccc;
}
.pinglunCon span {
  font-size: 14px;
  display: inline;
  margin-right: 5px;
  line-height: 14px;
}
</style>