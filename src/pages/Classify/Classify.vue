<template>
  <div id="j-categoryList">
    <header>
      <div class="search">
        <i class="icon iconfont icon-sousuo"></i>
        <span>搜索商品, 共19914款好物</span>
      </div>
    </header>
    <div class="border"></div>
    <div class="m-cateNavVerWrap">
      <div class="leftScroll">
        <ul id="j-cateNav" v-if="category.data">
          <li class="item" @click="getIndex(index1)" :class="{active:index===index1}" v-for="(c,index1) in category.data"
              :key="index1">
            <a href="#" class="txt">{{c.name}}</a>
          </li>

        </ul>
      </div>
    </div>
    <div class="m-subCateList">
      <div class="rightScroll">
        <div class="content" v-if="category.data">
          <div class="banner" :style="`backgroundImage:url(${category.data[index].wapBannerUrl})`"></div>
          <div class="cateList">
            <ul class="list" v-if="category.data">
              <li class="item" v-for="(item,index) in category.data[index].subCateList" :key="index">
                <div class="itemWrap">
                  <img
                    :src="item.bannerUrl"
                    alt="">
                  <div class="name">{{item.name}}</div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "classify",
    data() {
      return {
        index: 0
      }
    },
    computed: {
      ...mapState(['category'])
    },
    mounted() {
      this.$store.dispatch('getCategory', () => {
        this.$nextTick(() => {
          this.__initScroll()
        })
      })
    },

    methods: {
      __initScroll() {
        var bs = new BScroll('.m-cateNavVerWrap', {
          click: true
        })
        //   console.log(bs);
      },

      getIndex(index1) {
        this.index = index1
      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  header
    width 100%
    background-color: #fff
    position fixed
    left 0rem
    top 0
    z-index 200

  #j-categoryList
    width 100%
    overflow hidden

  .search
    background #ededed;
    width 85%
    padding 0.15rem
    border-radius 0.05rem
    height 0.25rem
    text-align center
    line-height 0.25rem
    margin 0.2rem auto
    .icon
      display inline-block
      vertical-align middle
      width .37rem
      height .37rem

  .border
    top-border-1px(gray)
    width 100%
    position fixed
    top 1rem
    left 0
    height 0.02rem
    z-index 100

  .m-cateNavVerWrap
    right-border-1px(gray)
    position: fixed;
    top: 1rem;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 1.8rem;
    background-color #fff
    overflow hidden
    .leftScroll
      padding-bottom 1rem
      box-sizing border-box
      width 100%
      #j-cateNav
        width 100%
        .item
          width 100%
          height: .76667rem;
          text-align: center;
          border: none;
          line-height .76667rem
          &.active
            .txt
              color red
          .txt
            color black

  .m-subCateList
    margin-top 1rem
    margin-left: 1.65rem;
    padding: .4rem .4rem .28rem;
    overflow hidden
    .rightScroll
      width: 100%
      overflow hidden
    .banner
      position: relative;
      width: 100%;
      height: 2.3rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size:100% 100%;
      border-radius: 4px;
    .cateList
      .list
        clearFix()
        .item
          float left
          display: inline-block;
          margin-right: .16rem;
          font-size: 0;
          width: 1.5rem;
          vertical-align: top;

          .itemWrap
            width 1.5rem
            height 1.9rem
            img
              display block
              width 1.3rem
              height 1.3rem
              margin-left 0.2rem
            .name
              height: .96rem;
              font-size: .2rem;
              text-align: center;
              line-height: .38rem;
              display: block;


</style>
