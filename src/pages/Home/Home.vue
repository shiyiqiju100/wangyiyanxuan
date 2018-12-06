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
         <div class="list" v-if="home.data">
          <div class="item active"  v-for=" (item,index) in home.data.cateList " :key="index">
            <span>{{item.name}}</span>
            <span class="nav"></span>
          </div>
           <!--<div class="item">
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
           </div>-->
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
  <div class="contentWrap">
   <div class="content">
     <div class="swiper-container">
       <div class="swiper-wrapper" v-if="home.data">
         <div class="swiper-slide" v-for="(item,index) in home.data.focusList" :key="index">
           <img :src="item.picUrl" alt="">
         </div>
        <!-- <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/fda101d5e6beeb56d0ff8245139ff30b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/e0c3e253dcfdb170bda823ac5b71247e.jpg?imageView&quality=75&thumbnail=750x0" alt="">
         </div>
         <div class="swiper-slide">
           <img src="https://yanxuan.nosdn.127.net/03d8a81e7be4bb1a8d44dc2118f944a4.jpg?imageView&quality=75&thumbnail=750x0" alt="">
         </div>-->
       </div>
       <!-- 如果需要滚动条 -->
       <div class="swiper-scrollbar">

       </div>
     </div>
     <ul class="promise">
       <li v-if="home.data">
         <a href="#" v-for="(item,index) in home.data.policyDescList" :key="index">
           <i class="icon iconfont icon-queren"></i>
           <span>{{item.desc}}</span>
         </a>
       <!--  <a href="#">
           <i class="icon iconfont icon-queren"></i>
           <span>30天无忧退货</span>
         </a>
         <a href="#">
           <i class="icon iconfont icon-queren"></i>
           <span>48小时快速退款</span>
         </a>-->
       </li>
     </ul>
     <ul class="goods" v-if="home.data">
       <li class="item" v-for="(item,index) in home.data.kingKongModule.kingKongList" :key="index">
         <img :src="item.picUrl" alt="">
         <div class="text">{{item.text}}</div>
       </li>
      <!-- <li class="item">
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
       </li>-->
     </ul>
     <div class="bg"></div>
     <div class="prom">
       <div class="top">
         <div class="topLeft">
          <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
        </div>
         <div class="topRight">
           <img src="https://yanxuan.nosdn.127.net/15435902616394510.png"  alt="">
           <img src="https://yanxuan.nosdn.127.net/15439064549673720.png" alt="">
         </div>
       </div>
       <div class="bottom">
         <img src="https://yanxuan.nosdn.127.net/15438955793172733.png"  alt="">
         <img src="https://yanxuan.nosdn.127.net/15435903918604513.png"  alt="">
       </div>
     </div>
     <div class="split"></div>
     <!--新人专享-->
     <div class="NewExclusive">
       <div class="title">
         <span class="text">新人专享礼</span>
       </div>
       <div class="content">
         <a href="#" class="left" >
           <div class="name">新人专享礼包</div>
           <div class="imgWrap">
             <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png"  alt="">
             <div class="animate"></div>
           </div>
         </a>
         <a href="#" class="right" v-if="home.data">
           <div class="module1" v-for="(item,index) in home.data.indexActivityModule" :key="index">
            <div class="item">
              <div class="picWrap">
                <img :src="item.picUrl"  alt="">
              </div>
              <div class="discount">
                <div class="line1">{{item.activityPrice}}</div>
                <div class="line2">{{item.originPrice}}</div>
              </div>
              <div class="cnt">
                <div class="title">{{item.title}}</div>
                <div class="subTitle">{{item.subTitle}}</div>
                <div class="tag">{{item.tag}}</div>

              </div>
            </div>
           </div>
           <!--<div class="module2">
             <div class="item">
               <div class="picWrap">
                 <img src="http://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png"  alt="">
               </div>
               <div class="discount">
                 <div class="line1">¥1</div>
                 <div class="line2">¥14</div>
               </div>
               <div class="cnt">
                 <div class="title">新人拼团</div>
                 <div class="subTitle">1元起包邮</div>
               </div>
             </div>
           </div>-->
         </a>
       </div>
     </div>
     <div class="split"></div>
     <!--品牌制造-->
     <div class="BrandProduct">
       <div class="moduleTitle">
         <div class="left">
           <span>品牌制造商直供</span>
         </div>
         <a href="#" class="right">
           <span>更多</span>
            <i class="iconfont icon-arrow-left">&gt;</i>
         </a>
       </div>
        <ul class="list" v-if="home.data">
          <li class="item" :style="`backgroundImage:url(${item.picUrl})`" v-for="(item,index) in home.data.tagList" :key="index">
            <div class="cnt">
              <h4 class="title">{{item.name}}</h4>
              <div>
                <span class="price">{{item.floorPrice}}元起</span>
                <i class="newIcon">上新</i>
              </div>
            </div>
          </li>
         <!-- <li class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">9.9元起</span>
                <i class="newIcon">上新</i>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">9.9元起</span>
                <i class="newIcon">上新</i>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">9.9元起</span>
                <i class="newIcon">上新</i>
              </div>
            </div>
          </li>-->
        </ul>
     </div>
     <div class="split"></div>
     <!--类目热销榜-->
      <div class="hotSale">
        <div class="moduleTitle">
          <div class="left">
            <span>类目热销榜</span>
          </div>
        </div>
        <div class="content">
          <div class="line1">
            <a class="item-big item-1">
              <div class="name">
                <span class="txt">服装榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>

            </a>
            <a class="item-big item-2">
              <div class="name">
                <span class="txt">鞋包配饰榜</span>
              </div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/cbbdd7c5622a0eaab31e42247909c959.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>

            </a>
          </div>
          <div class="line2">
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/4c01d86be0ff83ebf5bb22ea6f774c69.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
            <a class="item">
              <div class="name">饮食榜</div>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=200x200"  alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="split"></div>
    <!--人气推荐-->
     <div class="hotRecommend">
       <div>人气推荐</div>
     </div>
   </div>
  </div>

</div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "home",
    computed:{
      ...mapState(['home'])
    },
    mounted(){
      this.$store.dispatch('getHome',()=>{
        this.$nextTick(()=>{
         this._initScroll()
        })
      })

    },
    methods:{
      _initScroll(){
        new BScroll('.list-header',{
          scrollX: true,
          click: true
        })
        new BScroll('.contentWrap',{
          click: true
        })
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
            paginationType : 'progress',
          },
          autoplay: {
            autoplay:true,
            delay: 3000
          },
        })
      }
    }

  }
</script>

<style lang="stylus" scoped>
  #wrap
    width 100%
    overflow hidden
    .header
     width 100%
     background-color #fff
     height 1.48rem
     position fixed
     z-index 100
     left 0
     top 0
     .header-top
      height 0.88rem
      display flex
      flex-flow row nowrap
      justify-content space-around
      align-items center
     .logo
       width 1.3rem
       height .3rem
       background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
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
            width 16.12rem
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
            padding-left 0.5rem
            display inline-block
            vertical-align middle
            width .5rem
            height .5rem
   .contentWrap
     margin-top 1.5rem
     height calc(100%-1.95rem)
     margin-bottom 50px
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
       background-image url('./images/bg2.gif')
       background-repeat no-repeat
       background-size cover

     .prom
       background-image url('./images/bg3.png')
       background-repeat no-repeat
       background-size cover
       .top
         height 3.92rem
         display flex
         flex-flow row nowrap
         .topLeft>img
         .topRight>img
           display block
           width 100%
        .bottom
          padding-bottom 0.2rem
          height 2rem
          display flex
          flex 1
         img
          display inline-block
          width 50%


     .NewExclusive
       background-color #fff
       margin-bottom 0.2rem
       .title
         height: 1.2rem;
         width: 100%;
         line-height: 1.2rem;
         text-align: center;
         font-family: PingFangSC-Regular;
         font-size: .32667rem;
         .text
           position relative
           &::after
            content: ''
            position: absolute
            top: .2rem
            right -0.4rem
            width: .32rem
            height: .02rem
            background: #333
           &::before
             content: ''
             position: absolute
             top: .2rem
             width: .32rem
             height: .02rem
             background: #333
             left -0.5rem



       .content
         padding-left .4rem
         overflow hidden
         .left
           display: block;
           width: 3.5rem;
           height: 5.23rem;
           background: #F9E9CF;
           border-radius: .05333rem;
           margin-right: .05333rem;
           float: left;
           color: #333;
           .name
             font-family: PingFangSC-Medium;
             font-size: .3rem;
             padding: .4rem 0 0 .4rem;
           .imgWrap
             margin: .66667rem auto;
             width: 3.04rem;
             height: 3.05333rem;
             position: relative;
             img
               width: 3.04rem;
               height: 3.05333rem;

         .right
           float left
           .module1,.module2
             position relative
             background: #FBE2D3;
             border-radius: 4px;
             width: 3.3rem;
             height: 2.6rem;
             margin-bottom: .05333rem;
             .picWrap
               top: .26667rem;
               position: absolute;
               right: 0;
               img
                 width: 80%;
                 height: 80%;
                 margin-left 1rem
              .cnt
                position relative
                left 0.2rem
                .title
                  font-family: PingFangSC-Medium;
                  font-size: .32667rem;
                  text-align left
                  color black
                .subtitle
                  color: #7F7F7F;
              .discount
                position: absolute;
                top: .4rem;
                right: .45333rem;
                width: 0.8rem;
                height: 0.8rem;
                opacity: .8;
                background: #F59524;
                border-radius: 50%;
                padding-top: .13333rem;
                color: #fff;
                text-align: center;
                .line1
                  font-size: .32rem;
                .line2
                  font-size: .26667rem;
                  margin-top: -.09333rem;
                  text-decoration: line-through;


           .module2
             background: #FFECC2;
             border-radius: 4px;
             width: 3.3rem;
             height: 2.1rem;
             .cnt
              .subTitle
                background: #CBB693;
                color #fff
                width 1.3rem
                font-size 0.25rem
                border-radius 0.05rem


     .BrandProduct
       padding 0.05rem 0
       .moduleTitle
         width: 100%;
         height: 1.33333rem;
         line-height: 1.33333rem;
         padding: 0 .4rem;
         background: #fff
         overflow: hidden
         .left
          float: left;
          font-size: .32667rem;
          font-family: PingFangSC-Regular;
          float left
         .right
          display: block;
          font-size: .25rem;
          color: #333;
          line-height: 1.33333rem;
          float right
          margin-right .8rem
       .list
         position: relative;
         overflow: hidden;
         background: #fff;
         margin-bottom: .26667rem;
         padding: 0 .34667rem .34667rem .4rem;
         display flex
         flex-flow row wrap
         .item
          background-size 100% 100%
          background-repeat no-repeat
          position: relative;
          margin: 0 .05333rem .05333rem 0;
          width: 3.3rem;
          height: 2.46667rem;
          overflow: hidden;
          background-color: #f4f4f4;
          border-radius: .05333rem;

          .cnt
           position: absolute;
           left: 0;
           top: 0;
           padding-top: .30667rem;
           width: 100%;
           z-index: 4;
           text-align: center;
           .price
             color: #7F7F7F;
             font-size: .25rem;
           .newIcon
             display: inline-block;
             width: .55333rem;
             height: .42667rem;
             color: #fff;
             font-size: .2rem;
             line-height: .42667rem;
             text-align: center;
             background: #CBB693;
             border-radius: .05333rem;
             margin-left: .13333rem;
             font-style normal



     .split
      width 100%
      height 0.25rem
      background-color #F4F4F4
     .hotSale
       clearFix()
       margin 0 0.2rem
       margin-bottom 0.2rem
       .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        font-size 0.3rem
        padding: 0 .4rem;
        overflow: hidden;
       .content
         .line1
          height 2.6rem
          clearFix()
          .item-1
            background: #F9F3E4;
          .item-2
            background: #EBEFF6;
          .item-big
             width: 3.4rem;
             height: 2.66667rem;
             float: left;
             border-radius: .05333rem;
             margin: 0 .13333rem .13333rem 0;
             position: relative;
             .name
              padding-left: .4rem;
              color: #333;
              font-family: PingFangSC-Medium;
              font-size: .27333rem;
              margin-top: .88rem;
              .txt
               color black
               text-align center
               &::before
                 content ''
                 display block
                 position absolute
                 width 0.5rem
                 height 0.05rem
                 background-color black
                 top 1.3rem
                 left 0.4rem
             .imgWrap
               position absolute
               right 0
               top 0
               img
                width 2rem
                height 2.633rem


         .line2
           clearFix()
           height 4.5rem
           .item
             display: block;
             width: 1.63rem;
             height: 2rem;
             background: #F5F5F5;
             border-radius: .05333rem;
             float: left;
             margin: 0 .13333rem .13333rem 0;
             .name
               margin-top: .13333rem;
               text-align: center;
               font-size: .26rem;
               color: #333;
               font-family: PingFangSC-Medium;
              .imgWrap
                width: 1.6rem;
                height: 1.6rem;
                margin: .02667rem 0 0 0;
                text-align center
     .hotRecommend
       margin-top 0.2rem
</style>
