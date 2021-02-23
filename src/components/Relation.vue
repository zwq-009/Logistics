<template>
  <div>
    <div class="main">
      <p class="">联系客服</p>

      <div class="dv1">
        <h3>联系我们</h3>
        <p>全国热线电话：400-484-5653</p>
        <p>地址: <i href="#">江苏省无锡市新吴区震泽路国家软件园18号</i></p>
        <span>邮箱（e-mail）：yunshu@qq.com</span>
      </div>

      <h3>特色服务</h3>
      <p></p>
      <h4>业务优势</h4>
      <p>我们用心,让您放心,行业口碑声名远扬,以优质品质赢得市场、以诚信服务赢得未来
</p>
<p>服务理念
    客户至上安全快捷信誉服务热情
服务形象
以专业的人才,专业的知识,专业的操作程序,塑造专业形象
服务目标
以独到的战略眼光,谋求客户与自身利益的超大化及合理化,实现多方互利互惠,共同发展的长远目标
行业资质
创建了一套先进管理经验,取得了相当的成效。
</p>
      <div>
        <img src="../assets/img/download.jpg" alt="" />
      </div>
      <h3>关于我们</h3>
      <img :src="imgUrl" alt="错误" />
      <p>扫码关注公众号</p>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      imgurl: require("../assets/img/erweima.png"),
    };
  },
};
</script>

<style lang="less" >
.mian {
  width: 800px;
  height: 1000px;
  border: 1px solid black;
}
h3 {
  text-align: center;
  color: rgb(21, 111, 214);
}
</style>