<template>
  <!-- 登录模块 -->
  <div class="login">
    <!-- <span class="close" @click="cols">×</span> -->
    <!-- 手机号登陆 -->
    <!-- <div class="pho">
      <h3>物流平台登录</h3>
      <form class="ode">
        <span>账号：</span>
        <input v-model="loginForm.username"
          style="width: 226px"
          id="mobile"
          type="text"
          maxlength="11"
          placeholder="请输入手机号"
          message='用户名不能为空'
        />
        <br />
        <span>密码：</span>
        <input v-model="loginForm.password" type="password" name="text" id="pas" placeholder="请输入密码" />
        <br />
        <a class="npas" @click="open">忘记密码？</a>
        <a class="nmo" @click="zha">没有帐号？免费注册 ></a>
        <br />
        <input type="button" value="登录" class="bt3" />
      </form>
    </div> -->
  </div>
</template>
<script>
// export default {
//   name: "Logn",
//   data () {
//     return {
//       loginForm: {
//         username: '',
//         password: ''
//       }
//     }
//     },
//   props: {
//     comName: String,
//   },
//   methods: {
//     open() {
//       this.$emit("fun", 'Change');
//     },
//     zha() {
//       this.$emit("fun", 'Register');
//     },
//     cols() {
//       this.$emit("fun", '');
//     },
//   },
// };
</script>
 <style lang="less" scoped>
// 登录注册组件
// .login {
//   position: fixed;
//   top: 30%;
//   left: 30%;
//   background-color: rgb(179, 214, 243);
//   width: 450px;
//   text-align: center;
//   // display: none;
//   .close {
//     position: absolute;
//     right: 7px;
//     font-size: 30px;
//   }
//   .pho {
//     width: 450px;
//     height: 300px;
//     float: left;
//     h3 {
//       font-size: 25px;
//       margin: 20px 0 20px;
//       text-align: center;
//     }
//     .ode {
//       width: 400px;
//       span {
//         margin-left: 10%;
//       }
//       #mobile {
//         width: 225px;
//         height: 30px;
//         color: rgba(44, 43, 43, 0.514);
//         margin: 15px 0;
//         border: 1px solid rgba(95, 95, 95, 0.404);
//       }
//       #pas {
//         width: 225px;
//         height: 30px;
//         margin: 15px 0;
//         color: rgba(44, 43, 43, 0.514);
//         border: 1px solid rgba(95, 95, 95, 0.404);
//       }
//       .npas {
//         text-decoration: none;
//         color: rgb(25, 60, 214);
//         float: left;
//         margin-left: 70px;
//         font-size: 15px;
//       }
//       .nmo {
//         margin-left: 100px;
//         font-size: 15px;
//         color: rgb(25, 60, 214);
//         float: righ;
//       }
//       .bt3 {
//         width: 150px;
//         height: 40px;
//         margin: 10px 140px;
//         color: blanchedalmond;
//         border: 1px solid rgba(32, 32, 32, 0.596);
//         background-color: rgb(23, 99, 241);
//       }
//     }
//   }
// }
</style>