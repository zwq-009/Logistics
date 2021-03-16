<template>
  <div class="app">
    <div class="top">
      <div class="lo">
        <img :src="require('./assets/img/logo1.jpg').default" class="log" />
      </div>
      <div class="logo">物流管理平台</div>
      <router-link class="tab" to="/home">首页</router-link>
      <router-link class="tab" to="/write">发布订单</router-link>
      <router-link class="tab" to="/order">车源信息</router-link>
      <router-link class="tab" to="/relation">联系我们</router-link>
      <img
        class="self"
        :src="require('../src/assets/center/self.jpg').default"
      />
      <div class="list" v-show="!isShow">
        <ul class="ul">
          <li class="li1">
            <img
              class="tos"
              :src="require('./assets/img/top/list.png').default"
            />
          </li>
          <br />
          <li class="li2">
            <span class="p">
              <router-link class="tab1" to="/center">个人中心</router-link>
            </span>
            <span class="p" @click="exit">退出登录</span>
          </li>
        </ul>
      </div>
      <div class="lef" v-show="isShow">
        <!-- <a class="login" @click.prevent="comName = 'Login'">登录</a><i>|</i>
        <a class="login" @click.prevent="comName = 'Register'">注册</a> -->
        <router-link class="tab1" to="/login">登录</router-link><i>|</i>
        <router-link class="tab1" to="/register">注册</router-link>
      </div>
    </div>
    <!-- 中间模块 -->
    <router-view v-on:fun="funt"></router-view>
    <!-- <Login v-show="comName === 'Login'" v-on:fun="change"></Login>
    <Register v-show="comName === 'Register'" v-on:fun="change"></Register> -->
    <!-- <Change v-show="comName === 'Change'" v-on:fun="change"></Change> -->
    <!-- 底部模块 -->
    <div class="bot">
      <div class="botm">
        <div class="left">
          <div class="let">
            <table>
              <tr>
                <th>新闻咨询</th>
                <th>关于</th>
                <th>帮助</th>
              </tr>
              <tr>
                <td><span class="tab" @click="show">行业动态</span></td>
                <td>
                  <router-link class="tab" to="/show">关于我们</router-link>
                </td>
                <td>
                  <router-link class="tab" to="/program">常见问题</router-link>
                </td>
              </tr>
            </table>
          </div>
          <div class="leb">
            <span
              >友情链接
              <a href="http://www.gzclcy.com/"> 广州市昌联储运有限公司 </a>
              &nbsp;<a href="http://www.gztradeco.com/">广州攀越国际贸易有限公司</a>
            </span>
          </div>
        </div>
        <div class="righ">
          <p>关注我们</p>
          <div class="em"></div>
          <p>联系我们：020-31606742 张先生</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//登录组件
import Login from "../src/components/login/Login.vue";
import Register from "../src/components/login/Register.vue";
import Change from "../src/components/login/Change.vue";

export default {
  name: "app",
  data() {
    return {
      comName: "",
      isShow: true,
    };
  },
  methods: {
    change(data) {
      this.comName = data;
    },
    show() {
      alert("功能未实现");
    },
    exit() {
      this.isShow = !this.isShow;
    },
    funt:function(isShow) {
      this.isShow = !isShow;
    },
  },
  components: {
    Login,
    Register,
    Change,
  },
};
</script>

 <style lang="less" scoped>
.app {
  background-color: rgb(237, 248, 246);
}
//  顶部格式
.top {
  height: 60px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(82, 97, 138, 0.308);
  z-index: 1;
  .lo {
    display: inline-block;
    .log {
      margin: auto 0;
      width: 120px;
      height: 60px;
      display: inline-block;
    }
  }
  .logo {
    position: relative;
    top: -20px;
    display: inline-block;
    color: rgb(12, 143, 219);
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .tab {
    position: relative;
    top: -20px;
    padding-left: 15px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 40px;
    text-decoration: none;
  }
  .self {
    position: relative;
    height: 40px;
    width: 40px;
    top: -8px;
    margin-left: 20px;
    border-radius: 50%;
    border: 1px solid rgb(168, 168, 168);
  }
  .list {
    position: relative;
    top: -15px;
    left: -40px;
    display: inline-block;
    .ul {
      .li1 {
        display: inline-block;
        width: 50px;
        .tos {
          height: 30px;
          width: 30px;
        }
      }
      .li2 {
        display: inline-block;
        margin-left: -20px;
        width: 100px;
        background-color: rgba(61, 171, 245, 0.733);
        display: none;
        z-index: 1;
        font-size: 15px;
        padding: 5px 5px;
        border-radius: 10px;
        .p {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 15px;
          color: #000;
          margin: 5px 3px;
          .tab1 {
            font-size: 15px;
            text-decoration: none;
          }
        }
        .p:hover {
          background-color: rgb(223, 230, 230);
        }
      }
    }
    .ul:hover .li2 {
      display: block;
      position: absolute;
    }
  }
  .lef {
    position: relative;
    top: -20px;
    left: 15px;
    display: inline-block;
    .tab1 {
      color: rgb(4, 176, 189);
      font-size: 15px;
      padding-right: 3px;
      text-decoration: none;
    }
    i {
      color: rgb(4, 176, 189);
      font-size: 15px;
    }
    // .login{
    //   color: rgb(4, 176, 189);
    // font-size: 15px;
    // }
  }
}
// 底部格式
.bot {
  padding-top: 20px;
  height: 300px;
  background-color: rgb(18, 21, 26);
  // z-index: 999;
  .botm {
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    .left {
      display: inline-block;
      color: blanchedalmond;
      .let {
        color: rgb(250, 249, 249);

        th {
          padding-left: 50px;
        }
        td {
          padding-left: 50px;
          a {
            color: rgb(245, 247, 246);

            text-decoration: none;
          }
        }
      }
      .leb {
        margin-top: 80px;
        padding-left: 50px;
        color: rgb(248, 245, 245);
        a {
          color: rgb(248, 245, 245);
        }
      }
    }
    .righ {
      margin-left: 150px;
      padding-left: 60px;
      display: inline-block;
      color: blanchedalmond;
      border-left: 3px solid rgb(245, 242, 242);
      p {
        color: blanchedalmond;
      }
      .em {
        border-radius: 10px;
        width: 100px;
        height: 100px;
        background-image: url(./assets/img/erweima.png);
        background-size: 100px 100px;
      }
    }
  }
}
login {
  display: none;
}
regi {
  display: none;
}
</style>