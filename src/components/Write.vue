<template>
  <div class="app">
    <div class="left">
      <div class="tab">
        <h3 class="top">发布货源</h3>
      </div>
      <div class="main">
        <div class="gorm">
          <p class="title">请填写地址：</p>
          <div class="start">
            <span class="all-type">出发地</span>
            <input
              class="all-input"
              v-model="startp"
              type="text"
              placeholder="您的货物从哪里发出？"
            />
          </div>
          <div class="end">
            <span class="all-type">目的地</span>
            <input
              class="all-input"
              v-model="endp"
              type="text"
              placeholder="您的货物发往哪里？"
            />
          </div>
          <p class="title">请填写货物信息：</p>
          <br />
          <div class="goods">
            <span class="all-type">货物名</span>
            <select class="all-input" v-model="goods">
              <option value="">选取货物名称</option>
              <option value="化工">化工</option>
              <option value="家具">家具</option>
              <option value="灯具">灯具</option>
              <option value="电子产品">电子产品</option>
              <option value="电器">电器</option>
              <option value="日用品">日用品</option>
              <option value="机械">机械</option>
              <option value="食品">食品</option>
              <option value="服饰">服饰</option>
              <option value="鞋帽">鞋帽</option>
              <option value="矿产品">矿产品</option>
              <option value="建材">建材</option>
              <option value="纺织">纺织</option>
              <option value="其他普货类">其他普货类</option>
            </select>
          </div>
          <div class="clearfix1">
            <div class="weight">
              <span class="all-type">毛重</span>
              <input
                class="all-input"
                type="text"
                placeholder="货物多重？"
                v-model="weight"
              />
              <span>吨</span>
            </div>
          </div>
          <br />
          <p class="title">请填写需求信息：</p>
          <div class="clearfix2">
            <div class="carType">
              <span class="all-type">需求车型</span>
              <select class="all-input" v-model="needcar">
                <option value="">选取车型</option>
                <option value="厢式车">厢式车</option>
                <option value="平板车">平板车</option>
                <option value="高栏车">高栏车</option>
              </select>
            </div>
            <div class="carLength">
              <span class="all-type">需求车长</span>
              <input
                type="text"
                class="all-input"
                v-model="carlen"
                placeholder="输入车长"
              />
              <span>米</span>
            </div>
          </div>
          <p class="title">请填写装车时间：</p>
          <div class="clearfix3">
            <div class="load-time">
              <span class="all-type">装车时间</span>
              <input
                class="all-input"
                type="text"
                placeholder="选择装车时间"
                v-model="loading"
              />
            </div>
            <div class="get-time">
              <span class="all-type">到货时间</span>
              <input
                class="all-input"
                type="text"
                placeholder="选择到货时间"
                v-model="arrival"
              />
            </div>
          </div>

          <div class="btn-box">
            <button type="submit" class="ask-btn" @click="postComment">发布货源</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="right">
      <div class="baidumap" id="allmap"></div>
    </div>
  </div>
</template>
<script>
import eventBus from "../eventBus";
export default {
  data() {
    return {
      id: (this.data = Math.floor(Math.random() * 1000 + 1)),
      no: (this.data = Math.floor(Math.random() * 10000000 + 1)),
      startp: "",
      endp: "",
      needcar: "", //车型
      carlen: "", //车长
      goods: "",
      weight: "",
      loading: "",
      arrival: "",
    };
  },
  components: {},
  mounted() {
    this.baiduMap();
  },
  methods: {
    // 上传数据
    postComment() {
      // let obj = {
      //   id: this.id,
      //   no: this.no,
      //   startp: this.startp,
      //   endp: this.endp,
      //   needcar: this.needcar, //车型
      //   carlen: this.carlen, //车长
      //   goods: this.goods,
      //   weight: this.weight,
      //   loading: this.loading,
      //   arrival: this.arrival,
      // };
      // console.log(obj);
      // this.eventBus.$emit('incremented', this.obj)
      eventBus.$emit('chuan', "anbc");
    },

    // 百度地图
    baiduMap() {
      this.myGeo = new BMap.Geocoder(); //获取经纬度的函数
      this.map = new BMap.Map("allmap"); // 创建地图实例

      let point = new BMap.Point(116.231398, 39.567445); // 创建点坐标
      this.map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.centerAndZoom("无锡市", 13); // 初始化地图,设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true);
      this.map.addControl(new BMap.NavigationControl());
      this.map.addControl(new BMap.ScaleControl());
      this.map.addControl(new BMap.OverviewMapControl());
      this.map.addControl(new BMap.MapTypeControl()); //map.setMapStyle({ style: 'midnight' }) //地图风格
      this.map.addControl(
        new BMap.Map("container", { minZoom: 5, maxZoom: 20 })
      ); //map.setMapStyle({ style: 'midnight' }) //地图风格
      let pointList = [];

      for (let i = 0; i < pointList.length; i++) {
        let point = new BMap.Point(pointList[i].lat, pointList[i].lot);
        let marker = new window.BMap.Marker(point); // 创建标注
        this.map.addOverlay(marker); // 将标注添加到地图中 //提示信息  可以解析 HTML标签以及CSS

        let infoWindow = new BMap.InfoWindow(`<p style='text-align:left;font-weight:800'>标题:${pointList[i].name}</p>
        　　　　　　<p style='text-align:left;font-weight:0'>信息:${pointList[i].info}</p>`); // 鼠标移上标注点要发生的事
        marker.addEventListener("mouseover", function () {
          this.openInfoWindow(infoWindow);
        }); // 鼠标移开标注点要发生的事

        marker.addEventListener("mouseout", function () {
          this.closeInfoWindow(infoWindow);
        }); // 鼠标点击标注点要发生的事情
        marker.addEventListener("click", function () {
          alert("点击");
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.app {
  display: flex;
  .left {
    flex: 1;
    text-align: left;
    width: 400px;
    z-index: 1;
    background-color: rgb(255, 255, 255);
    .tab {
      h3 {
        display: inline-block;
        font-size: 17px;
        font-weight: 300;
        background-color: rgb(38, 132, 255);
        color: white;
        padding: 8px 45px;
      }
    }
    .main {
      text-align: left;
      .gorm {
        .title {
          text-indent: 1em;
          margin: 0;
          display: inline-block;
          color: #000;
          font-size: 15px;
        }
        .all-input {
          border: 0;
          font-size: 13px;
        }
        .start {
          margin: 10px 0 10px 10px;
          width: 350px;
          height: 35px;
          border: 1px solid rgb(207, 207, 205);
          span {
            padding: 10px 10px;
            display: inline-block;
            background-color: rgba(224, 223, 223, 0.87);
            font-size: 13px;
            letter-spacing: 3px;
          }
        }
        .end {
          margin: 10px 0 10px 10px;
          width: 350px;
          height: 35px;
          border: 1px solid rgb(207, 207, 205);
          span {
            padding: 10px 10px;
            display: inline-block;
            background-color: rgba(224, 223, 223, 0.87);
            font-size: 13px;
            letter-spacing: 3px;
          }
        }
        .goods {
          display: inline-block;
          margin: 10px 0 10px 10px;
          width: 160px;
          height: 35px;
          border: 1px solid rgb(207, 207, 205);
          span {
            padding: 10px 5px;
            display: inline-block;
            background-color: rgba(224, 223, 223, 0.87);
            font-size: 13px;
            letter-spacing: 1px;
          }
          .all-input {
            text-align: right;
            color: rgb(156, 155, 155);
          }
        }
        .clearfix1 {
          display: inline-block;
          width: 160px;
          padding: 0;
          .weight {
            display: inline-block;
            margin: 10px 0 10px 10px;
            width: 150px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 10px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
              letter-spacing: 3px;
            }
            .all-input {
              width: 50px;
            }
            span {
              font-weight: 8px;
              padding: 10px 9px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
              letter-spacing: 3px;
            }
          }
          .volume {
            display: inline-block;
            margin: 10px 0 10px 10px;
            width: 180px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 10px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
              letter-spacing: 3px;
            }
            .all-input {
              width: 80px;
            }
            span {
              font-weight: 10px;
              padding: 10px 5px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
              letter-spacing: 3px;
            }
          }
        }
        .clearfix2 {
          display: flex;
          .carType {
            flex: 1;
            display: inline-block;
            margin: 10px 0 10px 10px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 8px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
            .all-input {
              width: 76px;
            }
            span {
              font-weight: 10px;
              padding: 10px 10px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
          }
          .carLength {
            flex: 1;
            display: inline-block;
            margin: 10px 15px 10px 10px;
            width: 170px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 8px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
            .all-input {
              width: 50px;
            }
            span {
              font-weight: 10px;
              padding: 10px 8px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
          }
        }
        .clearfix3 {
          .load-time {
            display: inline-block;
            margin: 10px 0 10px 10px;
            width: 180px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 10px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
            .all-input {
              width: 79px;
            }
            span {
              font-weight: 10px;
              padding: 10px 10px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
          }
          .get-time {
            display: inline-block;
            margin: 10px 0 10px 10px;
            width: 180px;
            height: 35px;
            border: 1px solid rgb(207, 207, 205);
            .all-type {
              padding: 10px 10px;
              display: inline-block;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
            .all-input {
              width: 79px;
            }
            span {
              font-weight: 10px;
              padding: 10px 10px;
              background-color: rgba(224, 223, 223, 0.87);
              font-size: 13px;
            }
          }
        }
        .remark {
          textarea {
            width: 380px;
            margin: 20px 10px;
          }
        }
        .btn-box {
          margin: 10px 0;
          text-align: center;
          .ask-btn {
            margin: 10px 0 30px;
            width: 300px;
            height: 40px;
            font-size: 20px;
            background-color: rgb(252, 167, 10);
            border-radius: 40px;
            border: 0px;
            color: white;
            font-weight: 100;
          }
        }
      }
    }
  }
  .right {
    flex: 9;
    width: 800px;
    position: relative;
    // background-color: turquoise;
    .baidumap {
      height: 99%;
      border: 1px solid rgb(247, 244, 244);
      // position: absolute;
      // left: 430px;
      // top: 0;
      // bottom: 140px;
      .BMap_cpyCtrl {
        display: none !important;
      }
      .anchorBL {
        display: none !important;
      }
    }
  }
}
</style>