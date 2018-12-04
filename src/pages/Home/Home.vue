<template>
<div id="wrap">
  <div class="header">
    <div class="header-top">
      <div class="logo">
        <a href="#"></a>
      </div>
      <div class="search">
        <i class="icon iconfont icon-sousuo"></i>
          <span>搜索商品, 共19914款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="tabWrap">
     <div class="Hscroll">
       <header class="list-header">
         <div class="list">
          <div class="item active">
            <span>推荐</span>
            <span class="nav"></span>
          </div>
           <div class="item">
             <span>推荐</span>
           </div>
           <div class="item">
            <span>推荐</span>
          </div>
           <div class="item">
             <span>推荐</span>
           </div>
           <div class="item">
             <span>推荐</span>
           </div>
           <div class="item">
             <span>推荐</span>
           </div>
           <div class="item">
             <span>推荐</span>
           </div>
         </div>

       </header>
     </div>
    <div class="toggleWrap">
        <div class="toggle">
          <i class="icon iconfont icon-icon"></i>
        </div>
        </div>

    </div>

  </div>
  <div class="content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/03d8a81e7be4bb1a8d44dc2118f944a4.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar">

      </div>
    </div>
    <ul class="promise">
     <li>
       <a href="#">
         <i class="icon iconfont icon-queren"></i>
         <span>网易自营品牌</span>
       </a>
       <a href="#">
         <i class="icon iconfont icon-queren"></i>
         <span>30天无忧退货</span>
       </a>
       <a href="#">
         <i class="icon iconfont icon-queren"></i>
         <span>48小时快速退款</span>
       </a>
     </li>
    </ul>
    <ul class="goods">
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
     <li class="item">
         <img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">
         <div class="text">居家</div>
     </li>
    </ul>
    <div class="bg"></div>
  </div>

</div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  export default {
    name: "home",
    mounted(){
     new BScroll('.list-header',{
        scrollX: true,
        click: true
      })

      new BScroll('.content',{
        click: true
      })

      var mySwiper = new Swiper ('.swiper-container', {

        loop: true, // 循环模式选项

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
          paginationType : 'progress',
        },
      })
    }
  }
</script>

<style lang="stylus" scoped>
  #wrap
    width 100%
    overflow hidden
    .header
     height 1.48rem
     position fixed
    .header-top
      height 0.88rem
      display flex
      flex-flow row nowrap
      justify-content space-around
      align-items center
     .logo
       width 1.3rem
       height .3rem
       background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
       display inline-block
       margin-right .1rem
       background-size cover
       background-position: center
       margin-left .2rem
     .search
      width 4.42rem
      background #ededed;
      padding 0.15rem
      border-radius 0.1rem
      text-align center
      .icon
        display inline-block
        vertical-align middle
        width .37rem
        height .37rem


     .login
      width .8rem
      height .4rem
      line-height: .4rem
      text-align: center
      color: #b4282d
      border: 1px solid #b4282d
      border-radius: .10667rem
      margin-left: .1rem

    .tabWrap
      width 100%
      height 0.6rem

      position relative
      .Hscroll
        width 100%
        height 100%

        .list-header
          width 6.5rem
          .list
            width 13.12rem
            margin-left 0.1rem
            height 0.6rem
            line-height 0.6rem
            .item
              float left
              text-align center
             &.active
               color #b4282d
             span
              padding 0 .213rem
              font-size .3rem
              color #333
              text-align center
              &::after
                content ''
                position absolute
                left 0
                bottom 0
                width 0.7rem
                height .02rem
                background-color #b4282d
                margin-left 0.4rem


      .toggleWrap
         width 1.6rem
         height 0.6rem
         position:absolute
         right -13px
         top 0
         background #fff
        .toggle
          height .1rem
          text-align center
          width 1.0rem
          .icon
            margin-top .2rem
            padding-left 1rem
            display inline-block
            vertical-align middle
            width .5rem
            height .5rem




   .content
     margin-top 1.5rem
     height calc(100%-1.95rem)
     .swiper-container
      img
        height 4rem

     .promise
       width 100%
       height 0.72rem
       display flex
       justify-content space-around
       align-items center
       background-image url('./images/bg.png')
       background-repeat no-repeat
       background-size cover
       li
         padding-right 0.2rem
         .icon
           width 0.4rem
           height 0.4rem
           color #B4282D
           margin-right 0.05rem
           margin-left 0.2rem
         span
           font-size 0.2rem
           color #B4282D
     .goods
       background-image url('./images/bg.png')
       background-repeat no-repeat
       background-size 100% 100%
       width 100%
       height auto
       display flex
       flex-flow row wrap
       align-items center
       justify-content center
      .item
       img
         width 1.46667rem
         height 1.46667rem
       .text
         font-size 0.26rem
         text-align center
         margin-top 0.1rem
         width 1.3rem
     .bg
       width 100%
       height 3.3rem
       background-color #00b43c
       background-image url('./images/bg.png')
       background-repeat no-repeat
       background-size cover






</style>
