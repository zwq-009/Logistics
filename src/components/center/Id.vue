<template>
  <div class="main">
    <p>最近定位</p>
    <div class="baidumap" id="allmap"></div>
  </div>
</template>
<script>
export default {
  name: "pm-distribution",
  components: {},
  mounted() {
    this.baiduMap();
  },
  methods: {
    baiduMap() {
      this.map = new BMap.Map("allmap"); // 创建地图实例

      let point = new BMap.Point(116.231398, 39.567445); // 创建点坐标
      this.map.centerAndZoom(point, 5); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.centerAndZoom("无锡市", 13); // 初始化地图,设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true);

      //    this.point = new BMap.Point(114.12883, 22.688615)//设置地图位置

      this.map.addControl(new BMap.NavigationControl());
      this.map.addControl(new BMap.ScaleControl());
      this.map.addControl(new BMap.OverviewMapControl());
      this.map.addControl(new BMap.MapTypeControl()); //map.setMapStyle({ style: 'midnight' }) //地图风格
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
.main {
  p{
    background-color: white;
    height: 30px;
    padding: 10px 10px;
    margin: 0 0 10px 0;
  }
  .baidumap {
    width: 1020px;
    height: 550px;
  }

  /* 去除百度地图版权那行字 和 百度logo */
  .baidumap > .BMap_cpyCtrl {
    display: none !important;
  }
  .baidumap > .anchorBL {
    display: none !important;
  }
}
</style>