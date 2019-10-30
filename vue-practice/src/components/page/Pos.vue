<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="点餐" name="first">
            <el-table :data="tableData" stripe border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称" style="width: 40%"></el-table-column>
              <el-table-column prop="price" sortable label="价格" style="width: 30%"></el-table-column>
              <el-table-column prop="number" label="数量" style="width: 15%"></el-table-column>
              <el-table-column label="操作" style="width: 15%"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="2">我是产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "pos",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.pos {
  height: 100%;
}
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
.el-row {
  height: 100%;
}
</style>