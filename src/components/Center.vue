// 组件内容
<template>
  <div class="app">
    <div class="main">
      <p class="red">个人中心</p>
      <div class="man">
        <div class="left">
          <div class="one">
            <img class="im" :src="require('../assets/center/self.jpg').default">
            <p>未命名</p>
          </div>
            <p href="#" @click.prevent="comName='Myself'">我的资料</p>
            <p href="#" @click.prevent="comName='Id'">最近位置</p>
            <p href="#" @click.prevent="comName='Orfom'">我的订单</p>
            <p href="#" @click.prevent="comName='Feck'">反馈记录</p>
        </div>
        <div class="rih">
          <component  :is="comName"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Id from "../components/center/Id.vue";
import Myself from "../components/center/Myself.vue";
import Feck from "../components/center/Feck.vue";
import Orfom from "../components/center/Orfom.vue";

export default {
  data() {
    return {
    comName: "Myself",
    };
  },
  methods: {
    toshow(is) {
        this.comName = comName;
    },
  },
  components: {
    Myself,
    Id,
    Feck,
    Orfom,
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
  .red {
    font-size: 15px;
    text-align: left;
  }
  .man{
  width: 1000px;
  display: flex;
  .left {
    flex: 1;
    text-align: left;
    background-color: rgba(228, 227, 227, 0.747);
    width: 100px;
    padding: 0 30px 100px;
    .one {
      width: 100px;
      text-align: center;
      border-bottom: 1px solid rgb(85, 84, 84);
      .im {
        margin-top: 40px;
        display: inline-block;
        text-align: center;
        background-color: rgb(175, 174, 174);
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    p {
      display: inline-block;
      text-align: center;
      padding-left: 20px;
      color: black;
      font-size: 20px;
      font-weight: 500;
    }
    p :hover{
      background-color: rgb(108, 217, 250);
    }
  }
  .rih {
    flex: 9;
    width: 900px;
    height: 600px;
    margin: 0px 0 0 10px;
    background-color: rgb(236, 236, 231);
  } 
  }
}
</style>