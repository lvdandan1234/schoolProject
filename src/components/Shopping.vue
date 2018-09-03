<template>
  <div class="shopping">
    <div class="nav"  @click="toggleNav()">
      分类
      <svg width="20" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
        <polygon points="0,12 20,12 10,19"></polygon>
      </svg>
    </div>
    <div :class="{'active':isA}" class="list-nav">
      <ul>
        <li @click="selectItem(item)" :class="{'activeLi':selectItemName==item.name}" v-for="item in sortList ">
          <span></span>{{item.name}}
        </li>
      </ul>

    </div>
    <div class="dialog" @click="toggleNav()">

    </div>
    <div class="list">
      <mt-loadmore :top-method="loadTop"  ref="loadmore">

      <router-link tag="div"  :to="{path:'/proDetails',query:{id:item.ItemID}}" class="shop-row" v-for="item in shopData.Data" >
        <div class="top">
          <div class="shop-img" :style="getBackground(item.Image)"></div>
          <div class="shop-base-info-wrap">{{item.Name}}</div>
        </div>
        <div class="bottom">
          <div class="price">¥{{(item.Money).toFixed(2)}}</div>
        </div>
      </router-link>
      </mt-loadmore>
    </div>

  </div>

</template>

<script>
  import Vue from "vue";
  import shopData from "./shopData.json";
  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);
  export default {
    name: "Shopping",
    data() {
      return {
        isA: false,
        selectItemName: "",
        sortList: [
          {name: '材料'}, {name: "芭蕾舞鞋"}
        ],
        shopData: shopData
      }
    },
    methods: {
      toggleNav: function () {
        this.isA = !this.isA
      },
      selectItem: function (item) {
        this.toggleNav();
        this.selectItemName = item.name;
        this.loadTop(item.id);

      },
      getBackground:function(name){
        return "background-image:url("+name+")";
      },
      loadTop:function(){
        this.$refs.loadmore.onTopLoaded();
      }
    }
  }

</script>

<style scoped lang="less">
  .shopping {
    min-width: 100%;
    min-height: 100%;
    position: relative;
    background: #eef1f6;
    .nav {
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 30px;
      background-color: #fff;
      position: relative;
      border-bottom: 1px solid #666;
      z-index: 2;
    }
    .sort_icon {
      vertical-align: middle;
      transition: all .3s;
      fill: #999;

    }
    .dialog {
      background: rgba(0, 0, 0, .1);
      opacity: 0;
      transition: all 0.3s;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
    .list-nav {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 1;
      background: white;
      transform: translate(0, -100%);
      transition: all 0.3s;
      &.active {
        transform: translate(0, 0);
        top: 81px;
      }
      &.active ~ .dialog {
        opacity: 1;
      }
    }
    .list-nav ul {
      list-style: none;
      padding: 10px;
      margin: 0px;
      li {
        padding: 5px;
        height: 80px;
        line-height: 80px;
        text-align: left;
        vertical-align: middle;
        font-size: 30px;
        background-color: #fff;
        span {
          width: 8px;
          height: 36px;
          background-color: #1e88f5;
          display: inline-block;
          margin: 14px 5px -7px 10px;
          line-height: 30px;
        }
        &.activeLi {
          color: #1e88f5;
        }
      }
    }
   .list {
     position:absolute;
     left:0px;
     top:90px;
     bottom:0px;
     width:100%;
     overflow: scroll;
     .shop-row {
     //  top: 90px;
       margin: 20px 20px 0px;
      // width: 100%;

       background: #fff;
       .top {
         position: relative;
         padding: 20px;
         display: flex;
         justify-content: space-between;
         border-bottom: 1px solid #eef1f6;

         .shop-img {
           position: relative;
           width: 226px;
           height: 169.5px;
           background-repeat: no-repeat;
           background-attachment: scroll;
           background-position: 50%;
           background-size: cover;
           background-color: #eef1f6;
         }
         .shop-base-info-wrap {
           position: relative;
           flex: 1;
           margin-left: 20px;
           min-width: 0;
           font-size: 30px;
           line-height: 40px;
           color: #333;
           display: -webkit-box;
           overflow: hidden;
           text-overflow: ellipsis;
           word-break: break-all;
         }
       }
       .bottom {
         height: 72px;
         .price {
           color: #e93a0e;
           font-size: 32px;
           margin-right: 8px;
           float: right;
           padding-top: 10px;
           padding-right: 10px;
         }
       }
     }
   }
  }


</style>
