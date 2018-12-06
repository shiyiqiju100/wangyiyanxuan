<template>
  <div class="TopBar">
    <div class="left">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
    </div>
    <slot>
      <div class="text">
        <a href="#" class="search">发现</a>
        <a href="#" class="zxj">甄选家</a>
      </div>
    </slot>

    <div class="right">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-gouwuche-copy"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top-bar"
  }
</script>

<style lang="stylus" scoped>
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
      width 2.2rem
      line-height 0.8rem
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
</style>
