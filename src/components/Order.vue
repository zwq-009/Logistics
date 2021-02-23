<template>
  <div>
      <div class="top">
          输入单号：<input class="num" type="number" name="quantity" min="1000" max="2000">
    <button class="search">查询</button>
    </div>
    <div class="main">
    <table>
            <tr>
                <th>运单编号</th>
                <th>运输日期</th>
                <th>运输货物</th>
            <th>运输状态</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
    
    </table>
    </div>
  </div>
</template>

<script>
export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
</script>
<style lang="less" >
.top{
    padding: 10px 0 0 20px;
    
    .num{
        width: 200px;
    }
    .search{
        padding: 2px 6px;
        font-size: 15px;
        font-weight: 1000;
        color: rgb(11, 37, 77);
        background-color: rgb(184, 252, 164);
        border: 1px solid rgb(56, 68, 75);
        border-radius: 5px;
    }

}
.main{
    width: 500px;
}
</style>