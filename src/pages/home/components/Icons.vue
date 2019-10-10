<template>
  <!-- 最外层div 是用来占位的  padding-bottom: 50%表示宽高比为2：1 -->
  <div class="icons">
    <!-- 这是每个小图标部分 -->
    <swiper :options="swiperOption">
      <!-- 这里的page是指的是每页上的图标 -->
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <!-- <div class="icon" v-for="item in iconList" :key="item.id"> -->
          <!-- 这里用page来替换原来的iconList -->
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        // 控制轮播图不自动滚动
        autoPlay: false
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    // 该计算属性是实现iconList中数据大于8时，剩下的数据会以轮播图形式显示在第二面
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        // page 表示页数 每个index 会算出对应的页数
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  @import '../../../assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      overflow: hidden
      position: relative
      float: left
      width: 25%
      height: 0
      // 占总高度的一半
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-box-sizing: border-box
        padding: .1rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        // white-space: nowrap
        // overflow: hidden
        // text-overflow: ellipsis
        ellipsis()
</style>
