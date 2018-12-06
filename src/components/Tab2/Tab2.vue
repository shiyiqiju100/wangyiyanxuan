<template>
  <div class="tab">
    <a href="#">
      <div class="u-name">
        <span class="ava">
       <img src="https://yanxuan.nosdn.127.net/c78fd2991f97593e17cdb6fdad5044b1.png?imageView&quality=65&thumbnail=56y56 " alt="">
        </span>
        <span>选妹</span>
      </div>
      <div class="title">揭秘2018严选商品线隐藏进阶之路，为美好生活品质加分</div>
      <div class="u-pic">
        <img src="https://yanxuan.nosdn.127.net/2dad391fc894261717d59c1e31e221f8.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
      <div class="u-rcount">
        <i class="iconfont icon-yanjing"></i>
        <span>95.6k人看过</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "tab2"
  }
</script>

<style lang="stylus" scoped>
  .tab
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .36rem .3rem;
   .u-name
     font-size: .28rem;
     color: #333;
     line-height: .36rem;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;

    .ava
      overflow: hidden;
      border-radius: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: .01rem solid #d9d9d9;
      margin-right: .12rem;

      img
        width: .56rem;
        height: .56rem;
        border-radius: 50%;
      span
        display: inline-block;
        vertical-align: middle;

   .title
    font-size: .36rem;
    color: #333;
    line-height: .52rem;
    margin: -.08rem 0 .16rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: PingFangSC-Regular;

  .u-pic
    width: 6.9rem;
    height: 3.76rem;
    position: relative;
    margin-bottom: .2rem;
    overflow: hidden;
    border-radius: .08rem;

  img
    width 100%
    height 100%

  .u-rcount
    font-size: .22rem;
    color: #999;
    line-height: .32rem;
    margin-top: .18rem;

</style>
