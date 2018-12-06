<template>
  <div class="wrap">
    <header>
      <div class="TopBar">
        <div class="left">
          <i class="iconfont icon-shouye"></i>
        </div>
        <div class="text">
          <a href="#" class="search">发现</a>
          <a href="#" class="zxj">甄选家</a>
        </div>
        <div class="right">
          <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-gouwuche-copy"></i>
        </div>
      </div>
      <ul class="nav">
        <li class="active">
          <a href="#">推荐</a>
          <span></span>
        </li>
        <li>
          <a href="#">达人</a>
          <span></span>
        </li>
        <li>
          <a href="#">上新</a>
          <span></span>
        </li>
        <li>
          <a href="#">晒单</a>
          <span></span>
        </li>
        <li>
          <a href="#">HOME</a>
          <span></span>
        </li>
      </ul>
      <Split/>
    </header>
   <div class="contentWrap">
      <div class="content">
        <div class="pic" v-if="general.data">
          <img :src="general.data[0].ad.picUrl" alt="">
        </div>
        <Split></Split>
        <Tab></Tab>
        <Split></Split>
        <Tab2 ></Tab2>
        <Split></Split>
        <Tab2></Tab2>
        <Split></Split>
        <Tab2></Tab2>
        <Split></Split>
        <Tab2></Tab2>
        <Split></Split>
        <Tab ></Tab>
        <Split></Split>
        <Tab></Tab>
        <Split></Split>
        <Tab></Tab>
        <Split></Split>
        <Tab2></Tab2>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Tab from '../../components/Tab/Tab'
  import Tab2 from '../../components/Tab2/Tab2'
  export default {
    name: "general-things",
    components:{
      Tab,
      Tab2
    },
    computed:{
      ...mapState(['general'])
    },
    mounted(){
      this.$store.dispatch('getGeneral')
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins';
  .wrap
    width 100%
    margin-bottom 0.8rem
    header
      width 100%
      height 2rem
      position fixed
      top 0
      left 0
      z-index 200
      background-color #fff
      .TopBar
        bottom-border-1px(gray)
        height 1rem
        display flex
        flex 1
        justify-content space-between
        align-items center
        .left
          width: .46rem;
          height: 1rem;
          line-height 1rem
          .iconfont
            font-size 0.6rem

        .text
          width 3.2rem
          line-height 1rem
          text-align center
          .search
            font-size 0.4rem
            color #b4282d
            font-weight bold
          .zxj
            margin-left 0.2rem
        .right
          width 1.4rem
          margin-right 0.2rem
          .iconfont
            font-size 0.5rem
            margin-right 0.3rem
      .nav
        bottom-border-1px(gray)
        width 100%
        height 1rem
        line-height 1rem
        display flex
        flex 1
        justify-content space-around
        li
          font-size 0.38rem
          color #7F7F7F
          font-family Arial
          &.active
            color: #B4282D;
            border-bottom: .04rem solid #B4282D;

  .pic
    width: 100%
    background-color #fff
    box-sizing: border-box;
    margin: .1rem 0;
    margin-top 2.2rem
    box-sizing: border-box;
    padding: .36rem .3rem;
    img
      width: 6.9rem;
      height: 3.76rem;
      position: relative;
      overflow: hidden;
      border-radius: .08rem;



</style>
