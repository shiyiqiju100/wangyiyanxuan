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
          <!--短信验证码登录-->
          <div class="btnWrap" style="display:none">
            <div class="w-button w-button-x1">
              <span>请输入手机号</span>
            </div>
            <div class="w-button w-button-x1">
              <span>&nbsp;请输入短信验证码</span>
               <span class="code">获取验证码</span>
            </div>
            <div class="w-button w-button-x2">
              <span>遇到问题?</span>
              <span>使用密码登录验证</span>
            </div>
            <div class="btn w-button">登录</div>
            <div class="btn w-button btn2">其它登录方式</div>
            <div class="btn btn3">注册账号></div>
          </div>
          <!--账户密码登录-->
          <div class="btnWrap" >
            <div class="w-button w-button-x1">
              <span>账户名</span>
            </div>
            <div class="w-button w-button-x1">
              <span >密码</span>
            </div>
            <div class="w-button w-button-x2">
              <span>确认密码</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;忘记密码</span>


            </div>
            <div class="btn w-button">登录</div>
            <div class="btn w-button btn2">其它登录方式</div>
            <div class="btn btn3">注册账号></div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
  import TopBar from '../../components/TopBar/TopBar'
  export default {
    name: "login",
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
    background: #fff;
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
        border-bottom 1px solid #F2F5F4
        width 80%
        margin 0 auto
        height 0.8rem
        text-align left
        line-height 0.8rem
        margin-bottom 0.2rem
        border-radius 0.05rem
        color #a1a2a2
        .code
         width 1.5rem
         height 0.5rem
         border-radius 0.05rem
         border 1px solid #848585
         text-align center
         line-height 0.5rem
         display inline-block
         margin-left 1.8rem
         color #696a6a
      .w-button-x2
       span
          margin-right 2.2rem
          color #696a6a
      .btn
        text-align center
        width 80%
        margin 0 auto
        border 1px solid #b4282d
        background-color #b4282d
        margin-top 0.2rem
        color #fff
      .btn2,.btn3
        background #fff
        color #b4282d
      .btn3
        color #696a6a
        border none

</style>
