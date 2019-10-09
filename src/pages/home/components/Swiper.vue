<template>
  <!-- 最外层加上一层div: 当轮播图还未加载完成，且网速较慢时，轮播图下面的内容会出现在轮播图的位置
  用户看起来会有抖动的效果影响 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 控制轮播图下面的点的
        pagination: '.swiper-pagination',
        // 控制循环
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/d470f926c1ae3f32169122a44ce5939f.jpg_750x200_63bde493.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/8e06952844ba820aea69f3468e16c8d1.jpg_750x200_fda53def.jpg'
      }]
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
