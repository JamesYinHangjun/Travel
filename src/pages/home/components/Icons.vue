<template>
  <!-- 最外层div 是用来占位的  padding-bottom: 50%表示宽高比为2：1 -->
  <div class="icons">
    <!-- 这是每个小图标部分 -->
    <swiper>
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
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        desc: '西溪周家村'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '杭野求生'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
        desc: '灵隐寺'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
        desc: '千岛湖'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '印象西湖'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '西湖'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '杭州宋城'
      }, {
        id: '0010',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/12375c435e1bc4a52074f84f40a685a0.png',
        desc: '杭州极地'
      }]
    }
  },
  computed: {
    // 该计算属性是实现iconList中数据大于8时，剩下的数据会以轮播图形式显示在第二面
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // page 表示页数 每个index 会算出对应的页数
        const page = Math.floor(index / 8)
        if(!pages[page]) {
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
