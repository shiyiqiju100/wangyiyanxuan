<template>
  <div class="tab" v-if="general.data">

    <a href="#" v-for="(item,index) in general.data[2].topics" :key="index">
      <div class="info">
        <div class="u-name">
                <span class="ava">
                  <img :src="item.avatar" alt="">
                </span>
          <span>{{item.nickname}}</span>
        </div>
        <div class="title">
          {{item.title}}
        </div>
        <div class="desc">{{item.subTitle}}</div>
        <div class="u-rcount">
          <i class="iconfont icon-yanjing"></i>
          <span>{{item.topicId}}人看过</span>
        </div>
      </div>
      <div class="u-pic">
        <img :src="item.picUrl" alt="">
      </div>
    </a>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "tab",
    computed:{
      ...mapState(['general'])
    },
  }
</script>

<style lang="stylus" scoped>
  .tab
    position: relative;
    padding: .32rem .3rem;
    a
      margin 1.2rem 0
      display flex
      justify-content: space-between
      .info
        width 4rem
        height 1.36rem
        .u-name
          text-align left
          font-size: .28rem;
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .ava
            overflow: hidden;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .12rem;
            border-radius: 50%;
            img
              width: .56rem;
              height: .56rem;
              border-radius: 50%;
        .title
          width: 100%;
          font-size: .36rem;
          color: #333;
          line-height: .44rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          padding-top: .32rem;
          font-family: PingFangSC-Regular;

        .desc
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .28rem;
          line-height: .4rem;
          padding-top: .08rem;
          color: #7f7f7f;
        .u-rcount
          position: absolute;
          left: .3rem;
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
      .u-pic
        width: 2.72rem;
        height: 2.72rem;
        position: relative;
        overflow: hidden;
        border-radius: .08rem;
        img
          width 100%
          height 100%


</style>
