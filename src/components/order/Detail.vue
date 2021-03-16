<template>
  <div class="app">
    <div class="main">
      <p class="po">货车信息详情</p>
      <div class="list">
        <p class="p">货车出发地:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.startp }}</span></p>
        <p class="p">货车到达地:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.endp }}</span></p>
        <p class="p">货车出发时间:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.loading }}</span></p>
        <p class="p">货车到到达时间:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.arrival }}</span></p>
        <p class="p">货车id:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.id }}</span></p>
        <p class="p">货车运单编号:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.no }}</span></p>
        <p class="p">货车车型信息:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.needcar }}&nbsp;&nbsp;&nbsp;{{ currentProduct.carlen }}</span>&nbsp;米</p>
        <p class="p">货车车牌信息:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.carnum }}</span></p>
        <p class="p">货车运输状态:&nbsp;&nbsp;&nbsp;<span class="spa">{{ currentProduct.state }}</span></p>
        <p class="p">货车载货吨位:&nbsp;&nbsp;&nbsp;<span>{{ currentProduct.weight }}</span>&nbsp;吨</p>
        <p class="p">备注:&nbsp;&nbsp;&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      // pro: {},
    };
  },

  computed: {
    ...mapState(["products"]),
    currentProduct() {
      return this.products.find((item) => {
        if (item.id == this.id) {
          return item;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  // height: 300px;
  background-color: pink;
}
.main {
  // position: absolute;
  // top: 20%;
  // left: 30%;
  width: 450px;
  height: 750px;
  margin: 50px auto 50px;
  background-color: rgb(187, 186, 186);
  border-radius: 5px;
  text-align: center;
  // z-index: 99;
  .po{
    padding: 10px 10px;
    font-size: 25px;
    color: rgb(116, 113, 113);
    border-bottom: 1px solid white;
  }
  .list{
    text-align: left;
    padding: 5px 30px 10px;
    flex-direction: column;
    .p{
      padding: 5px 5px;
      font-size: 20px;
      border-radius: 5px;
      color: rgb(12, 12, 12);
      font-weight: 30px;
      background-color: rgb(226, 225, 224);
      span{
        color: rgb(134, 134, 134);
        font-size: 20px;
      }
      .spa{
        color: turquoise;
      }
    }
  }

}
</style>