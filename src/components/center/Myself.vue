<template>
  <div class="app">
    <p>我的资料</p>
    <div class="main">
      <div class="left" >
        <div class="top">
          <span class="p1">头像:</span>
          <span class="p2">
            <img :src="require('../../assets/center/self.jpg').default" alt="" />
          </span>
        </div>
        <div class="top">
          <span class="p1">昵称</span>
          <span class="p2">{{ name }}</span>
        </div>
        <div class="top">
          <span class="p1">手机号码</span>
          <span class="p2">{{tel }}</span>
        </div>
        <div class="top">
          <span class="p1">公司名</span>
          <span class="p2">{{comp}}</span>
        </div>
        <button class="btn" value="修改资料" @click="change">{{ bton }}</button>
      </div>
      <div class="right" v-show="isShow">
        <!-- 上传图片 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="inp">
          <input class="pt" type="text" v-model="name" placeholder="请填写新名称" />
        </div>
        <div class="inp">
          <input class="pt" type="tel" v-model="tel" placeholder="请填写新手机号" />
        </div>
        <div class="inp">
          <input class="pt" type="text" v-model="comp" placeholder="请填写公司名" />
        </div>
        <button class="bto" type="submit" @click="tip">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      name: "未命名",
      isShow: false,
      bton: "修改资料",
      comp: "无",
      tel: "18726841741",
    };
  },
  methods: {
    change: function () {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.bton = "撤销修改";
      } else {
        this.bton = "修改资料";
      }
    },
    tip(){
      console.log("ah");
      this.isShow = !this.isShow;
        this.bton = "修改资料";

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
    display: flex;
    padding: 20px 50px;
    .left {
      flex: 1;
      width: 500px;
      .top {
        padding: 20px 5px;
        display: flex;
        .p1 {
          flex: 1;
          margin: auto 0;
          text-align: right;
          display: inline-block;
          padding: 0 10px;
        }
        .p2 {
          flex: 4;
          margin: auto 0;
          text-align: left;
          display: inline-block;
          img {
            border-radius: 5px;
            border: 1px solid rgb(150, 149, 149);
            width: 50px;
            height: 50px;
          }
        }
      }
      .btn {
        padding: 5px 20px;
        margin-left: 80px;
      }
    }
    .right {
      // display: none;
      flex: 1;
      width: 500px;
      .inp {
        padding: 15px 0px;
        .pt {
          border: 1px solid rgb(131, 131, 131);
          height: 25px;
          border-radius: 5px;
          width: 200px;
        }
      }
      .bto {
        padding: 8px 35px;
        color: wheat;
        border-radius: 5px;
        border: 0;
        background-color: rgb(2, 89, 189);
        margin-left: 30px;
        font-weight: 300;
      }
    }
  }
}

.avatar-uploader {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  margin-bottom: 40px;
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
  .avatar-uploader-icon {
    background-color: rgb(145, 143, 143);
    font-size: 28px;
    color: #eaebee;
    margin: 10px 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
