<template>
  <div class="app">
    <div class="top">
      <span><b>输入搜索单号：</b></span>
      <input class="num" v-model="keywords" type="text" />
    </div>
    <div class="main">
      <table>
        <tr class="head">
          <th>运单编号</th>
          <th>运输日期</th>
          <th>出发地</th>
          <th>目的地</th>
          <th>车辆信息</th>
          <th>车牌载重</th>
          <th>运输状态</th>
          <th>操作</th>
        </tr>
        <router-link tag="tr" class="tr2" v-for="item in products" :key="item.id" :to="`/detail/${item.id}`">
          <td>{{ item.no }}</td>
          <td>{{ item.loading }}<br/>{{ item.arrival }}</td>
          <td>{{ item.startp }}</td>
          <td>{{ item.endp }}</td>
          <td>{{ item.needcar}}<span v-if="item.carlen">，{{ item.carlen }}米</span></td>
          <td>{{item.carnum}}，{{ item.weight }}吨</td>
          <td>
            <button class="btn">{{ item.state }}</button>
          </td>
          <td>
            <!-- <router-link class="btn1" :to="`/order/${item.id}`"  :key="item.id">查看详情</router-link> -->
            <a class="btn1" :key="item.id" >查看详情</a>
          </td>
        </router-link>
      </table>
<!--  -->
<!-- <div class="btn">
      <span v-if="this.current > 1">
        <input type="button" v-on:click="fnone()" v-if="true" value="首页" />
      </span>
      <span v-if="this.current - 1 >= 1">
        <input type="button" v-on:click="fnprev()" v-if="true" value="上一页" />
      </span>
      <span v-if="this.current + 1 <= total">
        <input type="button" v-on:click="fnnext()" v-if="true" value="下一页" />
      </span>
      <span v-if="this.current != total">
        <input type="button" v-on:click="fnlast()" v-if="true" value="尾页" />
      </span>
</div> -->
<!--  -->

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {

  data() {
    return {
      // products:"products",
      // id: "",
      // no: "",
      keywords: "",
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
  },

};
</script>

<style lang="less" scoped>
.top {
  padding: 20px 0 20px 0;
  text-align: center;
  .num {
    width: 200px;
  }
}
.main {
  margin: 1px auto;
  border-radius: 10px;
  width: 1098px;

  table {
    border-radius: 20px;
    // border: 1px solid rgba(92, 92, 92, 0.685);
    .head {
      // border: none;
      border-radius: 20px;
      border-radius: 10px;
      margin: 10px;
      background-color: rgb(105, 181, 243);
      th {
        font-size: 20px;
        padding: 5px;
        font-weight: 200;
        width: 300px;
        height: 25px;
        border: 0;
        color: rgb(242, 248, 240);
      }
    }
    .tr2 {
      text-align: center;
      td {
        border-bottom: 1px solid rgb(197, 197, 197);
        // border-left: 1px solid white;
        .btn {
          color: rgb(18, 19, 18);
          padding: 5px 9px;
          background-color: rgb(208, 247, 204);
          border: 0;
          border-radius: 5px;
          text-decoration: underline;
        }
        .btn1 {
          color: rgb(18, 19, 18);
          padding: 5px 9px;
          background-color: rgb(128, 197, 202);
          border: 0;
          border-radius: 5px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>