<template>
  <!-- 登录模块 -->
  <div class="app">
    <div class="login">
      <div class="pho">
        <h3>物流平台登录</h3>
        <form class="ode">
          <span>账号：</span>
          <input
            v-model="name"
            style="width: 226px"
            class="mobile"
            type="text"
            maxlength="11"
            placeholder="请输入手机号"
            message="用户名不能为空"
          />
          <br />
          <span>密码：</span>
          <input
            v-model="pwd"
            type="password"
            name="text"
            class="pas"
            placeholder="请输入密码"
          />
          <br />
          <input class="rem" type="checkbox" value="bike" />记住密码
          <router-link class="nmo" to="/register"
            >没有帐号？免费注册</router-link
          >
          <br />
          <input type="button" @click="onSubmit" value="登录" class="bt3" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Logn",
  data() {
    return {
      name: "",
      pwd: "",
      isShow:true,
    };
  },
  methods: {
    onSubmit() {
      let body = {
        name: this.name,
        pwd: this.pwd,
      };
      // console.log(this.name, this.pwd);
      axios.get("http://localhost:3005/api/login").then((data) => {
        var i;
        console.log(data);
        // console.log(data.data[i]);
        console.log(this.name);
        // console.log(data.data[i].neme);
          
        // console.log(data.data[i]);

          if (data.data[0].neme == body.name && data.data[0].pwd == body.pwd) {
            console.log("登录");
            alert("登录成功");
            this.$router.replace("/home");
            this.$emit('fun','!isShow')
          } else {
             if (data.data[1].neme == body.name && data.data[1].pwd == body.pwd) {
            console.log("登录");
            alert("登录成功");
            this.$router.replace("/home");
            this.$emit('fun','!isShow')
          } else {
             if (data.data[2].neme == body.name && data.data[2].pwd == body.pwd) {
            console.log("登录");
            alert("登录成功");
            this.$router.replace("/home");
            this.$emit('fun','!isShow')
          } else {
            alert("请仔细确认你的账号和密码！");
          }
          }
          }
      });
    },
  },
};
</script>
 
 <style lang="less" scoped>
.app {
  padding: 0;
  margin: 0;
  position: relative;
  height: 800px;
  background-image: url("../assets/img/login/login.jpg");
  background-size: 100% 100%;
}
// 登录注册组件
.login {
  position: absolute;
  top: 200px;
  left: 40%;
  margin: auto;
  text-align: center;
  background-color: rgb(179, 214, 243);
  width: 500px;
  .pho {
    width: 450px;
    height: 300px;
    h3 {
      font-size: 25px;
      margin: 20px 0 20px;
      text-align: center;
    }
    .ode {
      width: 400px;
      span {
        margin-left: 10%;
      }
      .mobile {
        width: 225px;
        height: 30px;
        color: rgba(44, 43, 43, 0.514);
        margin: 15px 0;
        border: 1px solid rgba(95, 95, 95, 0.404);
      }
      .pas {
        width: 225px;
        height: 30px;
        margin: 15px 0;
        color: rgba(44, 43, 43, 0.514);
        border: 1px solid rgba(95, 95, 95, 0.404);
      }
      .rem {
        color: rgb(12, 121, 245);
        margin-left: 70px;
        font-size: 15px;
      }
      .nmo {
        margin-left: 100px;
        font-size: 15px;
        color: rgb(12, 121, 245);
        float: righ;
      }
      .bt3 {
        width: 150px;
        height: 40px;
        margin: 10px 140px;
        font-size: 25px;
        color: blanchedalmond;
        border: 1px solid rgba(32, 32, 32, 0.596);
        background-color: rgb(23, 125, 241);
      }
    }
  }
}
</style>