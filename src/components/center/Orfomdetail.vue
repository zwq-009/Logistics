
<template>
<div>
    
  <h3>我是子组件！</h3>
  
  <h3>{{inputName[1]}}</h3>
  <!-- <h3>{{ currentProduct.startp }}</h3> -->
</div>

</template>
 
<script>
  export default {
      // id: this.$route.params.id,
        props: {
          // id: int,
      inputName: Array,
      required: true
    }, //声明一个自定义的属性
      computed: {
    // currentProduct() {
    //   return this.list.find((item) => {
    //     if (item.id == this.id) {
    //       return item;
    //     }
    //   });
    // },
  },
  }

</script>
 <style lang="less" scoped>
 
 </style>
