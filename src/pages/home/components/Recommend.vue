<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- border-bottom是前面引入的border.css中解决一像素边框问题的 -->
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg',
        title: '双溪漂流',
        desc: '江南惊险漂流，水清、竹多、落差大'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg',
        title: '双溪漂流',
        desc: '江南惊险漂流，水清、竹多、落差大'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg',
        title: '双溪漂流',
        desc: '江南惊险漂流，水清、竹多、落差大'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/e6/e646f4221574cc2a90.water.jpg_200x200_d9b6cabd.jpg',
        title: '双溪漂流',
        desc: '江南惊险漂流，水清、竹多、落差大'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top:.16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
