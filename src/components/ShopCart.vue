<template>

  <div id="cart" class="product_b" style="padding:0;background: #fff;">
    <!--<div class="shop-list">-->
        <!--<div class="list-header">-->
        <!--<span  class="cname">-->
          <!--<span  class="cname-icon">-->
            <!--<input type="checkbox" class="icon" id="checkA" v-on:click="checkAll($event.currentTarget)"/>-->
          <!--</span>-->
          <!--潮人部落-->
              <!--</span>-->
        <!--</div>-->
      <!--<div class="line"></div>-->
    <!--</div>-->
    <table id="goods_table" class="shoplist margincenter">
      <thead>
      <tr>
        <td>  <input  class="icon" type="checkbox" id="checkA" v-on:click="checkAll($event.currentTarget)"/><label for="checkA"></label></td>
        <td colspan="6">潮人部落</td>
      </tr>
      </thead>
      <div class="line"></div>
      <tr class="trnone"></tr>
      <tr v-for="(item,index) in list">
        <td >
          <input class="icon" type="checkbox" :id="'check'+index" name="checkboxs" v-model="checkeds[index]" />
          <label :for="'check'+index"></label>
        </td>
        <td>
          <div class="shop-img" :style="getBackground(item.subimage1Filename)"></div>

        </td>
        <td style="text-align:left;">

          <div>{{item.goodsTitle}}</div>
          <p>￥{{item.unitPrice}}</p>
        </td>

        <td >
          <em v-on:click="minius(index)">-</em>
          <input type="number" v-model.number="item.purchaseQuantity" />
          <em v-on:click="add(index)">+</em>
        </td>
        <td>
          <button v-on:click="del(index)">删除</button>
        </td>
      </tr>
      <tr class="trbottom">
        <td colspan="2">已选（{{checkNum}}）</td>
        <td colspan="3">
          <i>商品合计金额：</i>
          <em>￥{{sum.toFixed(2)}}</em>&nbsp;&nbsp;&nbsp;&nbsp;
          <button>下单</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Vue from "vue";
  let list = [
    {
      goodsTitle: "礼品_100积分兑换礼品_100积分兑换礼品_100积分兑换",							//商品名
      specifications: "大包",							//商品规格
      unitPrice: "5",									//商品单价
      subimage1Filename :"//cdn01.xiaogj.com/file/mall/default/goods.png",		//商品图片名
      purchaseQuantity: 6								//商品数量
    },
    {
      goodsTitle: "雕牌洗衣粉",
      specifications: "大包",
      unitPrice: "13",
      subimage1Filename: "//cdn01.xiaogj.com/file/mall/default/goods.png",
      purchaseQuantity: 1
    },
    {
      goodsTitle: "旺仔牛奶",
      specifications: "20盒装",
      unitPrice: "45",
      subimage1Filename: "//cdn01.xiaogj.com/file/mall/default/goods.png",
      purchaseQuantity: 1
    }
  ] //Vue对象
  export default {
    name: "ShopCart",
      data() {
        return {
          list: list,
          checkeds: new Array(list.length)
        }
      },
      computed: {
        sum: function () {
          let sum = 0;
          for (let i in this.list) {
            if (this.checkeds[i])
              sum += this.list[i].unitPrice * this.list[i].purchaseQuantity;
          }
          return sum;
        },
        checkNum: function () {
          let num = 0;
          for (let i in this.checkeds) {
            if (this.checkeds[i]) {
              num++;
            }
          }
          return num;
        }
      },
      methods: {
        getBackground:function(name){
          return "background-image:url("+name+")";
        },
        del: function (index) {
          this.list.splice(index, 1);
          this.checkeds.splice(index,1); //同时删除对应的选中状态标识
        },
        add: function (index) {
          this.list[index].purchaseQuantity++;
        },
        minius: function (index) {
          if (this.list[index].purchaseQuantity > 1) {
            this.list[index].purchaseQuantity--;
          }
        },
        checkAll: function (event) {
          if (event.checked) {
            for (let i = 0; i < this.checkeds.length; i++) {
              Vue.set(this.checkeds, i, true);
            }
          } else {
            for (let i = 0; i < this.checkeds.length; i++) {
              Vue.set(this.checkeds, i, false);
            }
          }
        }
      }

  }




</script>

<style scoped lang="less">
  button{
    width: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    color: #fff;
    font-size: 30px;
    background: #1e88f5;
  }
  .shop-img {
    position: relative;
    width: 180px;
    height: 130px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 50%;
    background-size: cover;
    background-color: #eef1f6;
  }
  input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], textarea {
    width: 40px;
   text-align: center;
    height: inherit;
    border: 1px solid #666;

  }
  input {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font-size:28px
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .shop-list {
    margin-bottom: 9px;
    background-color: #fff;
    .list-header{
      height: 80px;
      line-height: 80px;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      position: relative;
      font-size: 30px;
        .cname{
        max-width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
          .cname-icon {
            width: 100px;
            height: 80px;
            display: inline-block;
            text-align: center;
             .icon{
              color: #999;
              font-size: 40px;

            }
          }
      }
       .edit{
        padding: 0 18px;
      }
    }
    .line{border-bottom:1px solid #666;width:100%}
  }
  .shoplist{font-size: 30px;}
  table{
    font-size: 28px;
    thead td{border-bottom:1px solid #666;}
     td{
      padding:10px;
    }
   .des{
     width:300px;
     .title{
       font-size: 30px;
       color: #333;
       line-height: 32px;
       display: -webkit-box;
       overflow: hidden;
       text-overflow: ellipsis;
       word-break: break-all;
       -webkit-box-orient: vertical;
       -webkit-line-clamp: 2;
     }
     .num{
       osition: absolute;
       left: 0;
       right: 0;
       bottom: 0;
       height: 15px;
       line-height: 15px;
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       -webkit-box-pack: justify;
       justify-content: space-between;
       -webkit-box-orient: horizontal;
       -webkit-box-direction: normal;
       flex-direction: row;
     }
   }
  }

</style>
