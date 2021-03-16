<template>
<div>
  <div class="main">
    <div class="mid">
      <div class="head"></div>
      <p class="title">公司介绍</p>
      <div class="msh">
        <div class="lef"></div>
        <div class="about">
          <p>
            2016年9月，广州三桩网络科技有限公司正式成立，注册资金500万人民币，是一家专注于网络传媒、互联网信息服务及物流平台开发的企业。本公司拥有一批专业的软件项目研发人才和企业管理人才，力量雄厚，具备多体系架构的系统开发技术和平台构造能力，拥有丰富的软件系统实施经验。
          </p>
          <p>
            广州三桩网络科技有限公司在成立之际已经研发出意在整合社会运力资源的物流交易平台。货主可以通过呱呱物流平台，快速匹配附近的货车资源，平台系统自动计算显示运费，为货主提供行业最合理的运价，并获得优质的货运服务；司机可以借助呱呱物流平台迅速接单，获得更为丰厚的收入回报。呱呱物流平台是为货主、车主提供“安全、稳定、平价、可视”的免费共享使用的物流交易平台。
          </p>
        </div>
      </div>
      <div class="contact">
        <div class="addr">
          <p>联系QQ：1097234514</p>
          <p>联系邮箱：1097234514@qq.com</p>
          <p>联系电话：020-82517602 &nbsp; 张生</p>
          <p>
            联系地址：广东省广州市黄埔区开发区西区宝石路22号中穗大厦4楼401、402、403房
          </p>
          <div class="img"></div>
          <p>欢迎关注三桩网络公众号</p>
        </div>
      </div>
    </div>
</div>
</div>
</template>
<style lang="less" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  padding: 12px;
  .mid {
    .head {
      width: 1200px;
      height: 330px;
      background-image: url("../../assets/img/bottom/company.jpg");
      background-size: 100% 100%;
    }
    .title {
      font-size: 20px;
      line-height: 20px;
      border-left: 6px solid #2b9dff;
      width: 1165px;
      margin: 20px auto 10px;
      font-weight: 700;
      padding-left: 10px;
    }
    .msh {
      .lef {
        width: 500px;
        height: 338px;
        display: inline-block;
        background-image: url("../../assets/img/bottom/company1.jpg");
        background-size: 100% 100%;
      }
      .about {
        display: inline-block;
        width: 675px;
        padding: 18px;
        box-sizing: border-box;
        p {
          text-indent: 2em;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  .contact {
    width: 1200px;
    background-color: rgba(201, 204, 204, 0.664);
    padding-left: 80px;
    .addr {
        
      font-size: 18px;
      line-height: 30px;
      color: #666;
      p{
        margin: 0;
        padding: 20px 0 10px 0;
      }
      .img {
          width: 200px;
          height: 200px;
          background-image: url("../../assets/img/qm.jpg");
          background-size:100% 100%;
        }
      }
    }
  }
  }
</style>