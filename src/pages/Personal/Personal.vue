<template>
  <div class="wrap">
    <header>
      <TopBar>
        <slot>
          <div class="text">
          </div>
        </slot>
      </TopBar>
    </header>
    <div class="loginTypesWrap">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="loginWrap">
            <img class='img' src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
          </div>
          <div class="btnWrap">
            <div class="w-button w-button-x1">
              <i class="iconfont icon-shouji-copy"></i>
              <span @click="$router.replace('/login')">手机号码登录</span>
            </div>
            <div class="w-button w-button-x1">
              <i class="iconfont icon-message"></i>
              <span>&nbsp;&nbsp;&nbsp; 短信登录</span>
            </div>
            <div class="btn">
              <span>手机号快捷注册</span>
              <i class="iconfont icon-arrow-left"></i>
            </div>
          </div>
        </div>
         <div class="thirdWrap">
       <div class="itemWrap">
         <span class="item">
           <i class="iconfont icon-weixin"></i>
           <span class="name">微信</span>
         </span>
       </div>
       <div class="itemWrap">
         <span class="item">
           <i class="iconfont icon-QQ"></i>
           <span class="name">QQ</span>
         </span>
       </div>
       <div class="itemWrap">
         <span class="item">
           <i class="iconfont icon-weibo"></i>
           <span class="name">微博</span>
         </span>
       </div>
     </div>
      </div>


  </div>
  </div>
</template>

<script>
  import TopBar from '../../components/TopBar/TopBar'

  export default {
    name: "personal",
    components: {
      TopBar
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  header
    bottom-border-1px(gray)
    .text
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
      background-repeat: no-repeat;
      background-size: 2.29333rem 5.6rem;
      width: 2.29333rem;
      height: .72rem;
      background-position: 0 -1.70667rem;


  .loginTypesWrap
    height 12.24rem
   .m-loginTypes
     position: relative;
     height: 100%;
     background: #F2F5F4;
     .loginWrap
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem;
      .img
        width: 2.5rem;
        height: 0.9rem;

     .btnWrap
       width 100%
       height 4.6rem
       margin-top -1rem
       .w-button
        border 1px solid #b4282d
        width 80%
        margin 0 auto
        height 0.8rem
        background-color #b4282d
        color #fff
        text-align center
        line-height 0.8rem
        margin-bottom 0.2rem
        border-radius 0.05rem
        &:nth-child(2)
         background none
         color  #b4282d
       .btn
        text-align center
        width 80%
        margin 0 auto
     .thirdWrap
       width 100%
       height 0.6rem

       display flex
       flex 1
       justify-content center
       align-items center
       .item
         margin-right 0.5rem
         border-right  1px solid #7F7F7F
         &:nth-child(3)
          border none
         .name
           font-size: .3rem;
           line-height: .53333rem;
           height: .53333rem;
           color: #7F7F7F;
           padding-right 0.2rem
          .iconfont
           color #7F7F7F
           font-size 0.38rem
</style>
