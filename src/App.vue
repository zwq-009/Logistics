<template>
  <div>
    <div class="top">
      <router-link class="tab" to="/home">首页</router-link>
      <router-link class="tab" to="/order">运输订单</router-link>
      <router-link class="tab" to="/relation">联系我们</router-link>

      <router-link class="tab" to="/register">去注册</router-link>
    
      <router-link class="tab" to="/center">
      个人中心
      </router-link>
      <router-link class="tab" to="/login">登录</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
 <style lang="less" scoped>
.top {
  padding: 20px 0 20px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(118, 176, 243);

  .tab{
    margin-left: 5px;
    padding: 10px;
    // background-color: rgb(174, 238, 185);
    color: #000;
    font-size: 20px;
    font-weight: 40px;
    border-radius: 10px;
  }
}
</style>