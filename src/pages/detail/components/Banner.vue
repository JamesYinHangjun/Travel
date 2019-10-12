<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_600x330_8d179634.jpg" alt="">

      <div class="banner-info">
        <div class="banner-title">
          双溪漂流(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span> 39
        </div>
      </div>
    </div>

    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'Detail',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1412/ab/9d9e2649352dec35b48ca6fbc174034c.water.jpg_350x240_36f23ce3.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/43/09abfd25a2bbc0e96d3064741395ad6d.water.jpg_350x240_88b4fddb.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        margin-top: .14rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
