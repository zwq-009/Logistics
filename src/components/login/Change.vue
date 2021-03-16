<template>
        <!-- 登录模块 -->
    <div class="login">
      <!-- <span class="close" @click="cols">×</span> -->
      <!-- 手机重设密码忘记密码 -->
      <!-- <div class="forge">
        <h3>修改密码</h3>
        <div class="main">
          <span class="topp">手机账号:</span>
          <input
            style="width: 226px"
            id="mobile"
            type="text"
            onkeyup="value=value.replace(/[^\d]/g,'')"
            maxlength="11"
            placeholder="请输入手机号"
          />
          <br />
          <span class="topm">输入新密码:</span>
          <input
            type="password"
            name="text"
            id="paw"
            placeholder="请输入密码"
          />
          <br />
          <span class="topm">确认新密码:</span>
          <input
            type="password"
            name="text"
            id="paw"
            placeholder="请再次输入密码"
          />
          <br />
          <span class="topms">验证码:</span>
          <input
            type="password"
            name="text"
            id="paws"
            placeholder="请输入验证码"
          />
          <input type="button" value="获取验证码" class="hpas" />
        </div>
        <input type="button" value="确认修改" class="btc" />
      </div> -->
    </div>
</template>
<script>
// export default {
//   name: "Change",
//   props: {
//     comName: String,
//   },
//   methods: {
//     cols() {
//       this.$emit("fun", "");
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
//   .close {
//     position: absolute;
//     right: 7px;
//     font-size: 30px;
//   }
//   .forge {
//     padding-left: 20px;
//     width: 450px;
//     h3 {
//       font-size: 25px;
//       margin: 20px 0 10px;
//       text-align: center;
//     }
//     .main {
//       width: 450px;
//       text-align: left;
//       span {
//         margin-left: 10%;
//       }
//       .topp {
//         color: rgba(8, 4, 4, 0.781);
//       }
//       .topm {
//         margin-left: 30px;
//         color: rgba(7, 5, 5, 0.781);
//       }
//       .topms {
//         margin-left: 48px;
//         color: rgba(7, 5, 5, 0.781);
//       }
//       #mobile {
//         width: 225px;
//         height: 30px;
//         color: rgba(44, 43, 43, 0.514);
//         margin: 10px 0;
//         border: 1px solid rgba(95, 95, 95, 0.404);
//       }
//       #paw {
//         width: 225px;
//         height: 30px;
//         margin: 10px 0;
//         color: rgba(44, 43, 43, 0.514);
//         border: 1px solid rgba(95, 95, 95, 0.404);
//       }
//       #paws {
//         width: 120px;
//         height: 30px;
//         margin: 10px 0 10px 15px;
//         color: rgba(44, 43, 43, 0.514);
//         border: 1px solid rgba(95, 95, 95, 0.404);
//       }
//       .hpas {
//         height: 35px;
//         margin: 10px 0 0 10px;
//         color: blanchedalmond;
//         border: 1px solid rgba(32, 32, 32, 0.596);
//         background-color: rgb(23, 99, 241);
//       }
//       .hpas:hover {
//         background-color: rgb(82, 149, 236);
//       }
//     }
//     .mbto {
//       width: 450px;
//       text-align: center;
//       margin: 5px 0 10px;
//       #che {
//         width: 13px;
//         .bsp {
//           height: 16px;
//           text-transform: lowercase;
//           font-size: 3px;
//           a {
//             color: rgb(25, 84, 247);
//             height: 10px;
//             display: inline-block;
//           }
//         }
//       }
//     }
//     .btc {
//       width: 200px;
//       height: 30px;
//       margin: 10px 100px 30px;
//       font-size: 18px;
//       color: blanchedalmond;
//       border: 1px solid rgba(32, 32, 32, 0.596);
//       background-color: rgb(23, 99, 241);
//     }
//   }
// }
</style>