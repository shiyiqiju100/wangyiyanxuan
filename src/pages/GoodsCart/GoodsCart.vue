<template>
   <div class="wrap">
     <div class="title">
       <h2>购物车</h2>
       <a href="#">领券</a>
     </div>
     <div class="content">
       <ul class="list">
        <li class="item">
          <i class="icon"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <span>满88元免邮费</span>
        </li>
       </ul>
       <div class="container">
         <div class="cart">
           <i class="icon"></i>
           <i class="iconfont icon-gouwuche-copy"></i>
           <div class="text">去添加点什么吧</div>
         </div>
         <div class="login">
          <div class="loginBtn">登录</div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
  export default {
    name: "goods-cart"
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'
 .wrap
   width 100%
   height 100%
   .title
     height 0.88rem
     background-color #ffffff
     text-align center
     line-height 0.88rem
     position: relative;
     h2
      font-size 0.35rem
     a
      position absolute
      right 0.5rem
      top 0
      color: #B4282D;
   .content
     clearFix()
     background #f4f4f4
     .list
       width: 90%
       margin 0 auto
       .item
         float left
         margin-right 0.1rem
         .icon
           display: inline-block;
           vertical-align: middle;
           background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
           background-repeat: no-repeat;
           width: .13333rem;
           height: .13333rem

     .container
       position: absolute;
       top: -.66667rem;
       right: 0;
       bottom: 0;
       left: 0;
       height: 4rem;
       margin: auto;
 </style>
