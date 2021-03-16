<template>
  <div class="app">
    <p>最近反馈</p>
    <div class="top">
      <div class="top1">
        <div class="lef">
          <textarea
            class="text"
            type="text"
            v-model="content"
            placeholder="(*必填)请填写问题描述，不多于200字"
          />
        </div>
      </div>
      <div class="btn">
        <input class="btn1" type="button" value="提交" @click="add" />
      </div>
    </div>
    <div class="lis">
      <table class="table">
        <thead>
          <tr class="tr1">
            <th class="th1">反馈时间</th>
            <th class="th2">反馈内容</th>
            <th class="th4">处理结果</th>
            <th class="th3">操作</th>
          </tr>
          <tr class="tr2" v-for="item in list" :key="item.id">
            <td>{{ item.ctime }}</td>
            <td>{{ item.content }}</td>
            <td class="td3">{{ item.result }}</td>
            <td>
              <button class="btn" @click="detail(item.id)">撤销</button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      ctime: "",
      content: "",
      list: [
        {
          id: "1",
          content: "物流平台提供什么服务",
          result: "未处理",
          ctime: "2020/8/15上午9:38:23",
        },
        {
          id: "2",
          content: "货物中途丢失怎么办？受损怎么办？",
          result: "未处理",
          ctime: "2020/9/30下午2:42:36	",
        },
        {
          id: "3",
          content: "自己测量的货物与承运商的不相符合怎么办？",
          result: "未处理",
          ctime: "2021/3/10下午4:24:39	",
        },
      ],
    };
  },

  methods: {
    add() {
      if (this.content) {
        var brand = {
          // 以下函数返回 min（包含）～ max（包含）之间的数字：
          id: (this.data = Math.floor(Math.random() * 1000 + 1) + 4),
          content: this.content,
          ctime: new Date().toLocaleString(), //时间2021/3/10下午6:22:59
        };
        this.list.push(brand);
        this.content = "";
      }
    },

    detail(id) {
      // 根据Id删除数据
      var index = this.list.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
      });
      this.list.splice(index, 1);
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
  .top {
    text-align: center;
    .top1 {
      padding: 10px 0 0 20px;
      .lef {
        display: inline-block;
        width: 450px;
        height: 150px;
        margin: 0 30px 0 10px;
        background-color: white;
        .text {
          width: 450px;
          height: 150px;
        }
      }
    }
    .btn {
      text-align: center;
      display: inline-block;
      width: 70px;
      height: 30px;
      margin: 10px 0 10px 0;
      .btn1 {
        width: 70px;
        height: 30px;
      }
    }
  }
  .lis {
    text-align: center;
    margin: 0 auto;
    .table {
      thead {
        .tr1 {
          background-color: rgb(67, 168, 207);
          color: white;
          height: 40px;
          .th1 {
            width: 200px;
          }
          .th2 {
            width: 200px;
          }
          .th3 {
            width: 100px;
          }
          .th4 {
            width: 100px;
          }
        }
        .tr2 {
          border-bottom: 3px solid rgb(112, 111, 111);
          td {
            word-spacing: 10px;
            padding: 5px 10px;
            .btn{
              background-color: rgb(127, 215, 218);
              border-radius: 5px;
            }
          }
          .td3{
            color: red;
            font-size: 15px;

          }
        }
      }
    }
  }
}
</style>