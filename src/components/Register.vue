<template>
  <!-- 登录模块 -->
  <div class="app">
    <div class="login">
      <!-- 手机号注册 -->
      <div class="regi">
        <h3>注册物流平台</h3>
        <form class="main">
          <span class="topp">手机账号:</span>
          <input
            style="width: 226px"
            class="mobile"
            v-model="name"
            type="text"
            onkeyup="value=value.replace(/[^\d]/g,'')"
            maxlength="11"
            placeholder="请输入手机号"
          />
          <br />
          <span class="topm">输入密码:</span>
          <input
            type="password"
            v-model="pwd"
            class="paw"
            placeholder="设置登录密码，不少于8位"
          />
          <br />
          <span class="topm">验证码:</span>
          <input type="password" class="paws" placeholder="请输入验证码" />
          <input
            type="button"
            value="获取验证码"
            class="hpas"
          />
        </form>
        <!-- 服务条款 -->
        <div class="mbto">
          <input type="checkbox" name="ch" id="che" display="inline" />
          <span class="bsp"
            >我已阅读并同意
            <a href="https://st.music.163.com/official-terms/service">
              《免责声明》</a
            >
          </span>
        </div>
        <button type="button" @click="onSubmit" class="btc">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      id: (this.data = Math.floor(Math.random() * 1000 + 1) + 4),
      name: "",
      pwd: "",
    };
  },
  methods: {
    onSubmit() {
      let body = {
        id: this.id,
        name: this.name,
        pwd: this.pwd,
      };
      axios.post("http://localhost:3005/api/register").then((req) => {
          // console.log(body);
          console.log(req.body);
          alert("注册成功，请登录！！！")
          if (res.data === 2) {
            alert("用户名已注册，请直接登录");
            this.$router.replace('/login');
          } else if (data === "") {
            alert("注册失败");
          } else {
            alert("注册成功");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
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

// 注册组件
.login {
  position: absolute;
  top: 200px;
  left: 37%;
  margin: auto;
  text-align: center;
  background-color: rgb(179, 214, 243);
  width: 500px;

  .regi {
    width: 450px;
    text-align: center;
    h3 {
      font-size: 25px;
      margin: 20px 0 20px;
      text-align: center;
    }
    .main {
      width: 450px;
      text-align: left;
      span {
        margin-left: 10%;
      }
      .topp {
        color: rgba(3, 3, 3, 0.781);
      }
      .mobile {
        width: 225px;
        height: 30px;
        color: rgba(44, 43, 43, 0.514);
        margin: 10px 0;
        border: 1px solid rgba(95, 95, 95, 0.404);
      }
      .paw {
        width: 225px;
        height: 30px;
        margin: 10px 0;
        color: rgba(44, 43, 43, 0.514);
        border: 1px solid rgba(95, 95, 95, 0.404);
      }
      .paws {
        width: 120px;
        height: 30px;
        margin: 10px 0 10px 15px;
        color: rgba(44, 43, 43, 0.514);
        border: 1px solid rgba(95, 95, 95, 0.404);
      }
      .hpas {
        height: 35px;
        margin: 10px 0 0 10px;
        color: blanchedalmond;
        border: 1px solid rgba(32, 32, 32, 0.596);
        background-color: rgb(23, 99, 241);
      }
    }

    // 服务条款
    .mbto {
      width: 450px;
      text-align: center;
      margin: 5px 0 10px;
      #che {
        width: 13px;
        .bsp {
          height: 16px;
          text-transform: lowercase;
          font-size: 3px;
          a {
            color: rgb(25, 84, 247);
            height: 10px;
            display: inline-block;
          }
        }
      }
    }
    .btc {
      width: 150px;
      height: 40px;
      margin: 10px 140px 40px;
      font-size: 25px;
      color: blanchedalmond;
      border: 1px solid rgba(32, 32, 32, 0.596);
      background-color: rgb(23, 125, 241);
    }
  }
}
</style>