<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="点餐" name="first">
            <el-table :data="tableData" stripe border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="price" sortable label="价格" width="80"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column label="操作" width="90" fixed="right">
                <template slot-scope="scope">
                  <el-button size="small" type="text" @click="delSingleGoods(scope.row)">删除</el-button>
                  <!-- <el-button @click="handleClick(scope)" type="text" size="small">查看</el-button> -->
                  <el-button size="small" type="text" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="btn-action">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <el-row>
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li
                  v-for="goods in oftenGoods"
                  v-bind:key="goods.goodsId"
                  @click="addOrderList(goods)"
                >
                  <span>{{goods.goodsName}}</span>
                  <span class="o-price">{{goods.price}}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-row>
        <el-row>
          <div class="goods-type">
            <el-tabs v-model="activeType" type="card">
              <el-tab-pane label="汉堡" name="hanbao">
                <ul class="cookList">
                  <li
                    v-for="goods in type0Goods"
                    v-bind:key="goods.goodsId"
                    @click="addOrderList(goods)"
                  >
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食" name="xiaoshi">
                <ul class="cookList">
                  <li
                    v-for="goods in type0Goods"
                    v-bind:key="goods.goodsId"
                    @click="addOrderList(goods)"
                  >
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料" name="yinliao">
                <ul class="cookList">
                  <li
                    v-for="goods in type0Goods"
                    v-bind:key="goods.goodsId"
                    @click="addOrderList(goods)"
                  >
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐" name="taocan">
                <ul class="cookList">
                  <li
                    v-for="goods in type0Goods"
                    v-bind:key="goods.goodsId"
                    @click="addOrderList(goods)"
                  >
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17
        }
      ],
      activeName: "first",
      activeType: "hanbao",
      type0Goods: [
        {
          goodsId: 1,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "快乐全家桶",
          price: 80
        },
        {
          goodsId: 5,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "脆皮炸鸡腿",
          price: 10
        },
        {
          goodsId: 6,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "大块鸡米花",
          price: 15
        },
        {
          goodsId: 20,
          goodsImg:
            "http://img13.360buyimg.com/n1/jfs/t1/5356/22/668/309742/5b92435fE2c0ee1e3/28cf5c75e58d6f19.jpg",
          goodsName: "香脆鸡柳",
          price: 17
        }
      ]
    };
  },
  methods: {
    //添加订单列表的方法
    addOrderList(goods) {
      console.log(goods);
      this.totalCount = 0; //汇总数量清0
      this.totalMoney = 0;
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        //console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }

      //进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    },
    delSingleGoods(goods) {
      console.log(goods);
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
    },
    delAllGoods(){
      this.tableData=[];
    },
    /**
     * 结账
     */
    checkout(){
      if(this.tableData.length>0){
        this.$message({
          message: '结账成功，感谢下次光临',
          type: 'success'
        });
      }else{
        this.$message({
          message:'当前商品列表为空',
        })
      }
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
.btn-action {
  margin-top: 20px;
  margin-right: 20px;
  right: 0;
  float: right;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  cursor: pointer;
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px 20px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>