<template>
  <div class="app">
    <p>我的订单</p>
    <div class="main">
      <table class="table">
        <thead>
          <tr class="tr1">
            <th>出发地</th>
            <th>到达地</th>
            <th>需求车型</th>
            <th>货物信息</th>
            <th>装车时间<br />送达时间</th>
            <th>删除</th>
            <th>操作</th>
          </tr>
          <tr class="tr2" v-for="item in list">
            <td>{{ item.startp }}</td>
            <td>{{ item.endp }}</td>
            <td>
              {{ item.needcar
              }}<span v-if="item.carlen">，{{ item.carlen }}米</span>
            </td>
            <td>{{ item.goods }}，{{ item.weight }}吨</td>
            <td>{{ item.loading }}<br />{{ item.arrival }}</td>
            <td>
              <span  @click.prevent="del(item.id)">删除</span>
            </td>
            <td>
              <span class="btn":key="item.id"
                @click="showGoodDetail(item.id)"
                >查看详情</span
              >
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <!-- <Orfomdetail :inputName="list" :id="ids"></Orfomdetail> -->
  </div>
</template>
<script>
// 引入公共的bug，来做为中间传达的工具
import eventBus from "../../eventBus.js";

import Orfomdetail from "./Orfomdetail.vue";

export default {
  data() {
    return {
      ids: "",
      list: [
        {
          id: 269,
          startp: "广东省广州市黄埔区广保大道",
          endp: "深圳宝安国际机场",
          needcar: "厢式车", //车型
          carlen: "9.6", //车长
          goods: "家具",
          weight: "20",
          loading: "2020-7-07",
          arrival: "2020-7-17",
        },
        {
          id: 224,
          startp: "广东省广州市黄埔区广保大道",
          endp: "深圳宝安国际机场",
          needcar: "厢式车", //车型
          carlen: "9.6", //车长
          goods: "化工",
          weight: "20",
          loading: "2020-5-07",
          arrival: "2020-5-13",
        },
        {
          id: 259,
          startp: "广东省广州市黄埔区广保大道",
          endp: "深圳宝安国际机场",
          needcar: "平板车", //车型
          carlen: "9.6", //车长
          goods: "日用品",
          weight: "20",
          loading: "2020-2-01",
          arrival: "2020-2-08",
        },
      ],
    };
  },
  created() {
    //监听事件, 用$on事件来接收参数
    eventBus.$on('chuan', ({ data}) => {
      console.log(data);
      // vm.name = data；
      // this.list.push(brand);
    });
  },
  // mounted() {
  //   //监听事件, 用$on事件来接收参数
  //   this.$eventBus.$on("chuan",
  //   (data) => {
  //     console.log(data);
  //     // vm.name = data；
  //     // this.list.push(brand);
  //   });
  // },

  components: {
    Orfomdetail,
  },
  methods: {
    del(id) {
      // 根据Id删除数据
      var index = this.list.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
      });
      this.list.splice(index, 1);
    },
    showGoodDetail(id) {
      var index = this.list.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
        console.log(index);
        // this.ids = id;
        // console.log(this.ids);
      });
      // isshow=!isshow;
      
        // console.log(ids);
    },
  },
};
</script>
<style lang="less" scoped>
.app {
  p {
    background-color: white;
    height: 30px;
    padding: 10px 10px;
    margin: 0 0 10px 0;
  }
  .main {
    .table {
      padding: 0 15px;
      width: 100%;
      thead {
        width: 100%;
        .tr1 {
          border: none;
          background-color: rgb(51, 163, 255);
          border-radius: 30px;
          margin: 10px;
          th {
            border: none;
            padding: 5px 10px;
            color: rgb(250, 248, 244);
            font-size: 20px;
            font-weight: 500;
          }
        }
        .tr2 {
          background-color: rgb(255, 255, 255);
          th {
            text-align: center;
            font-size: 15px;
            font-weight: 400;
            color: rgb(185, 184, 184);
          }
        }
      }
    }
  }
}
</style>