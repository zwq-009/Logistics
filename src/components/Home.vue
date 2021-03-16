<template>
  <div class="home">
    <!-- 首行 -->
    <div class="top">
      <img :src="require('../assets/img/home/location.png').default" alt="" />
      <span class="id"
        ><b>{{ LocationCity }}</b></span
      >
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <div class="item">
        <img :src="dataList[currentIndex]" />
      </div>
      <div class="page" v-if="this.dataList.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)" class="le">&lt;</li>
          <li
            class="on"
            v-for="(item, index) in dataList"
            @click="gotoPage(index)"
            :class="{ current: currentIndex == index }"
          >
            {{ index + 1 }}
          </li>
          <li @click="gotoPage(nextIndex)" class="ri">&gt;</li>
        </ul>
      </div>
    </div>

    <!-- 车辆信息 -->
    <div class="list">
      <h2>车源信息</h2>
      <div class="main">
        <div class="left">
          <ul>
            <li v-for="item in products" :key="item.id" :to="`/detail/${item.id}`">
              <p class="p1">
                <span>{{ item.startp }}</span
                ><--------------------> <span>{{ item.endp }}</span>
              </p>
              <p class="p2">
                <span
                  ><b>装车时间：</b> {{ item.loading }}&nbsp; &nbsp;&nbsp;
                  <b>送达时间: </b> {{
                    item.arrival
                  }}
                  &nbsp;&nbsp;{{ item.needcar
                  }}<span v-if="item.carlen">，{{ item.carlen }}米</span>
                  &nbsp;&nbsp;&nbsp;
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div class="right">
          <img :src="require('../assets/img/home/tp-car.png').default" alt="" />
        </div>
      </div>
      <router-link class="tab" to="/order">车源信息</router-link>
    </div>
    <!-- 内容 -->
    <div class="show">
      <h3>物流平台介绍</h3>
      <p>
        上海丹佑国际物流有限公司，是从事国际贸易运输代理业务的专业公司。业务涵盖代理国际集装箱运输、特种货物运输、危险品海运货物的集装箱整箱/拼箱业务、散杂货物运输，进出口业务，保税转口，仓储物流，代理报关，报检，以及提供运输咨询等多方面。
        公司设立在中国最大的港口城市上海，具有海运进出口货物—级国家代理资质，在全球拥有能为客户提供便捷优质服务的海外代理网络。作为公司所在地上海，公司在所有相关港口有现场服务人员，能在第一时间为客人提供服务。
      </p>
      <p>
        主要服务范围
        1.专业的一般货物及化工品危险品进出口国际货物运输(集装箱海运，拼箱，散货);
        2.代理进出口货物运输(集装箱海运，拼箱，散货);3.代理集装箱内陆运输（公路运输，铁路运输，中转运输);
        4.代理检验，检疫（如商检，质检，卫检)，熏蒸，消毒;
        5.代理货运保险;6.代理仓储，中转;7.提供海运咨询服务 核心优势:海运
        特种箱货物运输:我们拥有丰富的特种货物配载装箱加固经验和专业的装箱仓库可以为您提供最好的特种箱全程运输服务。
        危险品国际运输服务，我们对农化产品运输有极其丰富经验和专业知识，专业的危险品操作员及申报员，和与之合作多年的危险品仓库和车队。是我们提供优质服务，值得信赖的保证!
      </p>
    </div>
    <h3>我们物流平台的优势</h3>
    <div class="bot">
      <div class="lef">
        <p>海运服务</p>
        <span>
          我们拥有遍布世界各地的服务代理网络，经过多年的运作，丹佑已经与多家著名的船务公司建立了良好的合作关，
          这是为客户提供最有效率的运输、最低廉运价的强力保证，使丹佑可以为客户提供更贴切、完整的物流服务。
          丹佑自成立以来，凭借着“诚信经营，微笑服务”的宗旨，
          在同行及客户中建立了良好的信誉和形象，使许多客户对物流行业的服务有了一个全新的认识。
          在上海口岸、中国内陆及世界物流网中，为客户提供着最为经济、最快捷的物流服务。
        </span>
      </div>
      <div class="rig">
        <p>到门服务</p>
        <span
          >物流拥有丰富的配送和物流经验，在美国是最值得信赖的物流供应商之一。
          我们与客户紧密合作，确定他们的供应链需求，建立高标准的航行服务，以满足客户直到最后一英里的需求。
          我们可以处理各种不同的航运方式，包括短距离和长距离的服务。
          2018年以来，物流处理了数以万计的来自各地的货物，并没有发生过任何事故。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BMap from "BMap";
export default {
  data() {
    return {

      list: [
        {
          id: "13",
          no: "101794", //订单编号
          loading: "2020-10-07",
          arrival: "2020-10-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8323",
          state:'空闲',
          weight: "30",
        },
        {
          id: "15",
          no: "114724", //订单编号
          loading: "2020-02-07",
          arrival: "2021-02-25",
          startp: "广州番禺广场",
          endp: "江门万达广场",
          needcar: "平板车", //车型
          carlen: "7.6", //车长
          carnum: "粤A14065",
          state:'空闲',
          weight: "25",
        },
        {
          id: "14",
          no: "101774", //订单编号
          loading: "2020-02-25",
          arrival: "2020-02-30",
          startp: "南沙湿地",
          endp: "深圳龙岗华夏动漫产业园",
          needcar: "厢式车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8343",
          state:'已接单',
          weight: "35",
        },
        {
          id: "16",
          no: "168097", //订单编号
          loading: "2020-11-19",
          arrival: "2020-11-23",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "17", //车长
          carnum: "粤A74045",
          state:'空闲',
          weight: "30",
        },
        {
          id: "17",
          no: "109374", //订单编号
          loading: "2020-04-21",
          arrival: "2020-04-25",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8673",
          state:'已接单',
          weight: "20",
        },
        {
          id: "18",
          no: "183974", //订单编号
          loading: "2020-05-07",
          arrival: "2020-05-21",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "平板车", //车型
          carlen: "13", //车长
          carnum: "粤A10575",
          state:'空闲',
          weight: "25",
        },
        {
          id: "19",
          no: "237674", //订单编号
          loading: "2020-05-25",
          arrival: "2020-05-30",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state:'空闲',
          weight: "35",
        },
        {
          id: "20",
          no: "109422", //订单编号
          loading: "2020-11-16",
          arrival: "2020-11-23",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤A10575",
          state:'已接单',
          weight: "30",
        },
        {
          id: "21",
          no: "102154", //订单编号
          loading: "2020-05-14",
          arrival: "2020-05-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state:'空闲',
          weight: "20",
        },
        {
          id: "22",
          no: "101893", //订单编号
          loading: "2020-06-10",
          arrival: "2020-06-15",
          startp: "广东省广州市黄埔区广保大道",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "7.6", //车长
          carnum: "粤A13555",
          state:'空闲',
          weight: "25",
        },
        {
          id: "23",
          no: "102934", //订单编号
          loading: "2020-01-26",
          arrival: "2020-01-31",
          startp: "广州番禺广场",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤AS8212",
          state:'已接单',
          weight: "20",
        },
        {
          id: "24",
          no: "116974", //订单编号
          loading: "2020-11-15",
          arrival: "2020-11-17",
          startp: "广东省广州市黄埔区广保大道",
          endp: "广东省深圳市宝安区深圳宝安国际机场",
          needcar: "平板车", //车型
          carlen: "9.6", //车长
          carnum: "粤A1.289325",
          state:'空闲',
          weight: "30",
        },
        {
          id: "25",
          no: "102564", //订单编号
          loading: "2020-04-27",
          arrival: "2020-05-01",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "12", //车长
          carnum: "粤AS8323",
          state:'已接单',
          weight: "20",
        },
        {
          id: "26",
          no: "102974", //订单编号
          loading: "2020-03-26",
          arrival: "2020-03-31",
          startp: "广州番禺广场",
          endp: "南宁高新技术产业开发区",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤A13445",
          state:'已接单',
          weight: "25",
        },
        {
          id: "27",
          no: "194974", //订单编号
          loading: "2020-05-14",
          arrival: "2020-05-19",
          startp: "广东省广州市黄埔区广保大道",
          endp: "南宁高新技术产业开发区",
          needcar: "平板车", //车型
          carlen: "13", //车长
          carnum: "粤AS8323",
          state:'空闲',
          weight: "30",
        },
        {
          id: "28",
          no: "102194", //订单编号
          loading: "2020-04-28",
          arrival: "2020-05-02",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "厢式车", //车型
          carlen: "17", //车长
          carnum: "粤A72545",
          state:'空闲',
          weight: "35",
        },
        {
          id: "29",
          no: "195274", //订单编号
          loading: "2020-05-07",
          arrival: "2020-05-14",
          startp: "广东省广州市黄埔区广保大道",
          endp: "南宁高新技术产业开发区",
          needcar: "高栏车", //车型
          carlen: "13", //车长
          carnum: "粤AS8323",
          state:'空闲',
          weight: "15",
        },
        {
          id: "30",
          no: "123974", //订单编号
          loading: "2020-04-24",
          arrival: "2020-04-28",
          startp: "广州番禺广场",
          endp: "珠海拱北口岸",
          needcar: "平板车", //车型
          carlen: "12", //车长
          carnum: "粤A93345",
          state:'已接单',
          weight: "15",
        },
        {
          id: "31",
          no: "102874", //订单编号
          loading: "2020-04-21",
          arrival: "2020-04-25",
          startp: "南宁高新技术产业开发区",
          endp: "东圃汽车客运站",
          needcar: "高栏车", //车型
          carlen: "9.6", //车长
          carnum: "粤AS8933",
          state:'空闲',
          weight: "30",
        },
        {
          id: "32",
          no: "102134", //订单编号
          loading: "2020-07-16",
          arrival: "2020-07-21",
          startp: "广东省广州市黄埔区广保大道",
          endp: "东圃汽车客运站",
          needcar: "高栏车", //车型
          carlen: "7.6", //车长
          carnum: "粤A18445",
          state:'空闲',
          weight: "25",
        },
        {
          id: "33",
          no: "102097", //订单编号
          loading: "2020-10-07",
          arrival: "2020-10-17",
          startp: "东圃汽车客运站",
          endp: "南宁高新技术产业开发区",
          needcar: "平板车", //车型
          carlen: "9.6", //车长
          carnum: "粤A18645",
          state:'空闲',
          weight: "25",
        },
        {
          id: "34",
          no: "102062", //订单编号
          loading: "2020-06-24",
          arrival: "2020-06-28",
          startp: "南宁高新技术产业开发区",
          endp: "珠海拱北口岸",
          needcar: "高栏车", //车型
          carlen: "17", //车长
          carnum: "粤A19355",
          state:'空闲',
          weight: "25",
        },
        {
          id: "35",
          no: "143277", //订单编号
          loading: "2020-04-27",
          arrival: "2020-04-30",
          startp: "广东省广州市黄埔区广保大道",
          endp: "东圃汽车客运站",
          needcar: "平板车", //车型
          carlen: "12", //车长
          carnum: "粤A63345",
          state:'已接单',
          weight: "25",
        },

      ],


      LocationCity: "正在定位", //给渲染层定义一个初始值
      //
      dataList: [
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00105-2821.jpg",
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00186-1816.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1862651202,4034442625&fm=11&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3473980413,223730920&fm=26&gp=0.jpg",
      ],
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
    };
  },
  //
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
    // 引用vuex数据
    ...mapState(["products"]),
  },

  mounted() {
    this.city(); //触发获取城市方法
  },
  methods: {
    city() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationCity = city;
        },
        function (e) {
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    },
    //
    gotoPage(index) {
      this.currentIndex = index;
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  margin: 0 auto;
  width: 1200px;
  // 地址
  .top {
    margin-top: 10px;
    img {
      padding: 10px 0 0 10px;
      width: 20px;
      height: 20px;
    }
    .id {
      word-spacing: 5px;
      color: rgb(6, 132, 216);
    }
  }
  // 轮播图
  .banner {
    position: relative;
    text-align: left;
    width: 1200px;
    margin-top: 10px;
    img {
      width: 1200px;
      height: 600px;
      display: block;
    }
    .page {
      background: rgba(94, 93, 93, 0.5);
      width: 100%;
      height: 0;
      ul {
        display: inline-block;
        margin-left: 500px;
        margin-top: -100px;
        border-radius: 20px;
        background-color: rgb(165, 165, 165);
        .le {
          width: 40px;
          height: 40px;
          padding: 3px 15px 14px 0px;
          position: absolute;
          left: 0;
          top: 300px;
          font-size: 70px;
          background-color: rgba(161, 161, 159, 0.726);
          float: left;
          list-style: none;
          line-height: 40px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
        }
        .ri {
          width: 40px;
          height: 40px;
          padding: 2px 10px 15px 6px;
          position: absolute;
          right: 0;
          top: 300px;
          font-size: 70px;
          background-color: rgba(161, 161, 159, 0.726);
          float: left;
          list-style: none;
          line-height: 40px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
        }
        .on {
          font-size: 10px;
          list-style: none;
          float: left;
          width: 40px;
          color: rgba(255, 255, 255, 0.8);
        }
        .current {
          color: #ff6700;
        }
      }
    }
  }
  // 车辆信息
  .list {
    text-align: center;
    background-color: white;
    h2 {
      display: inline-block;
      padding: 10px 5px ;
      font-size: 25px ;
      font-weight: 300;
    }
    .main {
      display: flex;
      text-align: left;
      .left {
        height: 410px;
        overflow: scroll;
        flex: 2;
        ul{
          list-style: none;
        // width: 200%;
        list-style: none;
        /*1.设置的名称*/
        animation-name: move;
        /*2.设置动画的耗时*/
        animation-duration: 30s;
        /*3.设置无限循环*/
        animation-iteration-count: infinite;
        /*4.设置时间函数*/
        animation-timing-function: linear;
          li{
            border-bottom: 1px dotted rgb(141, 141, 141);
            .p1{
              font-size: 20px;

            }
            .p2{
              color: rgb(59, 59, 59);
            }
          }
        }
      }
      .right {
        flex: 1;
        img {
          border: 3px solid rgb(172, 172, 172);
        }
      }
    }
  }
    /*创建动画*/
    @keyframes move {
        from{
            transform:translateY(0);
        }
        to{
            transform:translateY(-402px);
        }
    }
  // 介绍
  .show {
    width: 1200px;
    background-image: url("../assets//img/home/backg.jpg");
    background-size: 100% 100%;
    padding-bottom: 20px;
    text-align: center;
    h3 {
      padding-top: 15px;
      font-size: 30px;
      text-align: center;
      color: rgb(255, 255, 255);
    }
    p {
      display: inline-block;
      width: 800px;
      text-align: left;
      color: rgb(255, 255, 255);
      letter-spacing: 5px;
      font-size: 20px;
      line-height: 28px;
      text-indent: 2em;
    }
  }
  h3 {
    margin: 0;
    padding-top: 35px;
    font-size: 30px;
    font-weight: 100;
    text-align: center;
    color: rgb(6, 108, 240);
  }
  .bot {
    width: 1200px;
    display: flex;
    text-align: center;
    background-color: rgb(253, 253, 253);
    padding-bottom: 40px;

    .lef {
      flex: 1;
      p {
        width: 500px;
        padding-bottom: 20px;
        margin: 35px 50px;
        font-size: 30px;
        font-weight: 100;
        border-bottom: 1px solid red;
        color: rgb(6, 240, 84);
      }
      span {
        display: inline-block;
        width: 500px;
        text-align: left;
        color: rgb(12, 2, 31);
        letter-spacing: 5px;
        font-size: 20px;
        line-height: 28px;
        text-indent: 2em;
      }
    }
    .rig {
      flex: 1;
      p {
        width: 500px;
        padding-bottom: 20px;
        margin: 35px 50px;
        font-size: 30px;
        font-weight: 100;
        border-bottom: 1px solid red;
        color: rgb(6, 240, 84);
      }
      span {
        display: inline-block;
        width: 500px;
        text-align: left;
        color: rgb(12, 2, 31);
        letter-spacing: 5px;
        font-size: 20px;
        line-height: 28px;
        text-indent: 2em;
      }
    }
  }
}
</style>