<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-tushu"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-wo"></i>
        <div>我的</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员卡</div>
      </li>
      <li>
        <i class="icon iconfont icon-liebiao"></i>
        <div>选择</div>
      </li>
      <li>
        <i class="icon iconfont icon-shouji"></i>
        <div>手机</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {};
  }
};
</script>

<style>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.iconfont {
  font-size: 24px;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>