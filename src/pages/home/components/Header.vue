<template>
  <div class="header">
    <!-- 头部左侧 -->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>

    <!-- 头部中间搜索框 -->
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
    </div>

    <!-- 头部右侧 -->
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  // reset.css中 html 的 font-size =50px, 而设计图中header部分高度为86px(设计图为二部图)
  // 所以高度为 86/2/50=0.86rem
  // 移动端单位用rem,而rem是根据html来计算的
  .header
    display: flex
    height: .86rem
    background: $bgColor
    line-height: .86rem
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .2rem
    .header-input
      flex: 1
      color: #ccc
      height: .62rem
      line-height: .62rem
      margin-left: .2rem
      margin-top: .12rem
      background: #fff
      border-radius: .1rem
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
