<template>
  <!-- 最外层加上一层div: 当轮播图还未加载完成，且网速较慢时，轮播图下面的内容会出现在轮播图的位置
  用户看起来会有抖动的效果影响 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 控制轮播图下面的点的
        pagination: '.swiper-pagination',
        // 控制循环
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // >>> 样式穿透，使其不受scoped的影响
  // .swiper-pagination-bullet-active 是轮播图下面的点默认的类，可以用来控制其颜色
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
