<template>
  <div>
    <div id="app">
      <h3 class="red">登录</h3>
      用户名：<input type="text" v-model="userinfo.username" /><br />
      密码：<input type="password" v-model="userinfo.password" /><br />
      <input type="submit" value="提交" @click="check" />
    </div>
  </div>
</template>
<script>

</script>