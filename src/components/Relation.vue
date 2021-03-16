<template>
  <div class="rel">
    <div class="main">
      <p class="p1"><b>联系客服</b></p>
      <div class="dv1">
        <h3>————————o&nbsp;&nbsp;联系我们&nbsp;&nbsp;o————————</h3>
        <p>全国热线电话：400-484-5653</p>
        <p>地址: <i href="#">江苏省无锡市新吴区震泽路国家软件园18号</i></p>
        <span>邮箱（e-mail）：yunshu@qq.com</span>
      </div>
      <div class="dv2">
        <h3 class="ht">————————o&nbsp;&nbsp;特色服务&nbsp;&nbsp;o————————</h3>
        <div class="dvm">
          <div class="dvn">
            <div class="dvn1">
              <p>供应金融链</p>
              <span>提供“门到门一站式”的物流服务</span>
            </div>
            <div class="dvn2">
              <p>运输优势</p>
              <span>可以满足客户多样化的用箱需求</span>
            </div>
            <div class="dvn3">
              <p>科技</p>
              <span>用信仰和科技成就与众不同</span>
            </div>
            <div class="dvn4">
              <p>冷链仓干配</p>
              <span
                >提供从生产、存储、运输、销售到消费结束的一系列活动的冷链服务</span
              >
            </div>
          </div>
          <p>秉承着“分享提升价值,服务实现共赢”的理念，</p>
          <p>打造了便捷、高效、多元、智慧的综合物流服务体系,</p>
          <p>
            为行业的有序发展营造一个良好的环境，为客户和社会创造更多的价值。
          </p>
        </div>
        <div class="d2">
          <h4>业务优势</h4>

          <p>服务理念</p>
          <span> 客户至上安全快捷信誉服务热情</span>
          <p>服务形象</p>
          <span> 以专业的人才,专业的知识,专业的操作程序,塑造专业形象</span>
          <p>服务目标</p>
          <span>
            我们用心,让您放心,行业口碑声名远扬,以优质品质赢得市场、以诚信服务赢得未来。以独到的战略眼光,谋求客户与自身利益的超大化及合理化,实现多方互利互惠,共同发展的长远目标</span
          >
          <p>行业资质</p>
          <span>创建了一套先进管理经验,取得了相当的成效。</span>
        </div>
      </div>

      <div class="dv3">
        <h3>————————o&nbsp;&nbsp;关于我们&nbsp;&nbsp;o————————</h3>
        <img :src="require('../assets/img/home/backg.jpg').default" >
        <div class="em">
          <p>
            作为全国第一家以多式联运为题材上市的物流企业，
            以“物流+贸易+金融+科技”的经营思路，深耕多式联运与综合物流发展，
            已形成“网点覆盖全国、铁路跨欧亚大陆、航线链接海丝国家”的多式联运网络，
            业务体系涵盖“运储配”基础物流、冷链物流、国际物流、驻厂物流等多元物流形态，
            以及实业投资、船舶管理等综合服务。
          </p>
        </div>
        <div class="wm">
          <div class="erwei"></div>
          <span>扫一扫关注“物流平台”公众号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { carlist } from '../main.js'
export default {
created() {
    this._carlist()
  },
  methods: {
    _carlist() {
      // 页面加载时请求资源
      carlist().then(data => {
        console.log(data)
      })
    }
  }};
</script>

 <style lang="less" scoped>
.rel {
  width: 1200px;
  margin: 0 auto;
  .main {

    text-align: center;
    width: 1200px;
    .p1 {
      text-align: left;
      margin: 0;
      padding: 15px 20px 20px;
      font-size: 30px;
      color: rgb(31, 168, 150);
      background-color: rgb(197, 203, 206);
    }
    .dv1 {
      margin: 20px 0 20px;
      padding-bottom: 20px;
      text-align: left;
      font-size: 25px;
      background-color: rgb(219, 221, 221);
      h3 {
        text-align: center;
        margin: 10px 0 20px;
        font-size: 29px;
        font-weight: 200;
        color: rgb(9, 135, 253);
        background-color: #ffffff;
        padding: 15px 0 15px;
      }
    }
    .dv2 {
      margin: 10px 0 20px;
      padding-bottom: 20px;
      text-align: left;
      font-size: 25px;
      .ht {
        text-align: center;
        margin: 10px 0 20px;
        font-size: 29px;
        font-weight: 200;
        color: rgb(9, 135, 253);
        background-color: rgba(246, 248, 244, 0.658);
        padding: 15px 0 15px;
      }
      .dvm {
        padding: 0 0 30px 60px;
        background-color: rgba(179, 182, 184, 0.781);
        .dvn {
          text-align: center;
          width: 1000px;
          display: flex;
          .dvn1 {
            border: 1px solid rgb(248, 246, 246);
            height: 200px;
            flex: 1;
            border-radius: 5px;
            margin: 30px 30px 10px;
            text-align: center;
            background-image: url('../assets/img/relation/download.jpg');
            background-size: 100% 100%;
            color: rgb(248, 247, 245);
            p {
              padding-bottom: 10px;
              margin: 30px 5px;
              font-size: 30px;
              color: rgb(14, 153, 247);
              border-bottom: 1px solid rgb(248, 246, 246);
            }
            span {
              font-size: 15px;
            }
          }
          .dvn2 {
            border: 1px solid rgb(248, 246, 246);
            height: 200px;
            flex: 1;
            border-radius: 5px;
            margin: 30px 30px 10px;
            text-align: center;
            background-image: url('../assets/img/relation/ugp.jpg');
            // background-size: 100% 100%;
            color: rgb(248, 247, 245);
            p {
              padding-bottom: 10px;
              margin: 30px 5px;
              font-size: 30px;
              color: rgb(14, 153, 247);
              border-bottom: 1px solid rgb(248, 246, 246);
            }
            span {
              font-size: 15px;
            }
          }
          .dvn3 {
            border: 1px solid rgb(248, 246, 246);
            height: 200px;
            flex: 1;
            border-radius: 5px;
            margin: 30px 30px 10px;
            text-align: center;
            background-image: url('../assets/img/relation/fmgp.jpg');
             background-size: 100% 100%;
            color: rgb(248, 247, 245);
            p {
              padding-bottom: 10px;
              margin: 30px 5px;
              font-size: 30px;
              color: rgb(14, 153, 247);
              border-bottom: 1px solid rgb(248, 246, 246);
            }
            span {
              font-size: 15px;
            }
          }
          .dvn4 {
            border: 1px solid rgb(248, 246, 246);
            height: 200px;
            flex: 1;
            border-radius: 5px;
            margin: 30px 30px 10px;
            text-align: center;
            background-image: url('../assets/img/relation/m.jpg');
            color: rgb(248, 247, 245);
            p {
              padding-bottom: 10px;
              margin: 30px 5px;
              font-size: 30px;
              color: rgb(14, 153, 247);
              border-bottom: 1px solid rgb(248, 246, 246);
            }
            span {
              font-size: 15px;
            }
          }
        }
        p {
          font-size: 15px;
          color: rgba(32, 32, 32, 0.699);
          text-align: center;
          margin: 5px 10px 5px;
        }
      }
      .d2 {
        margin: 0;
        background-color: rgb(248, 246, 246);
        h4 {
          margin: 0px 0 10px;
          padding-top: 20px;
          color: rgb(20, 98, 243);
          background-color: rgb(248, 246, 246);
        }
        p {
          margin: 5px;
          color: white;
          display: inline-block;
          padding: 10px 40px 10px 20px;
          border-radius: 5px;
          font-size: 20px;
          background-color: rgb(108, 128, 146);
        }
        span {
          color: white;
          display: block;
          padding: 10px 0 10px 30px;
          border-radius: 5px;
          margin-left: 5px;
          font-size: 17px;
          background-color: rgb(75, 120, 150);
        }
      }
    }
    .dv3 {
      margin: 10px 0 20px;
      padding-bottom: 20px;
      text-align: left;
      font-size: 25px;
      img{
        margin: 10px 0 10px;
        width: 100%;
        height: 100%;
      }

      h3 {
        text-align: center;
        margin: 0;
        font-size: 29px;
        font-weight: 200;
        margin: 10px 0;
        color: rgb(9, 135, 253);
        background-color: rgba(246, 248, 244, 0.658);
        padding: 15px 0 15px;
      }
      .em {
        p {
          padding:  10px 50px;
          margin: 8px 0 0;
          font-size: 18px;
          text-indent: 2em;
          line-height: 30px;
          letter-spacing: 5px;
        }
      }
      .wm {
        .erwei {
          width: 100px;
          height: 100px;
          margin: 10px 90px 5px;
          background-image: url("../assets/img/qm.jpg");
          background-size: 100px 100px;
        }
        span {
          font-size: 10px;
          padding: 5px 30px;
          margin-left: 40px;
          border-radius: 5px;
          background-color: rgba(95, 94, 94, 0.233);
        }
      }
    }
  }
}
</style>