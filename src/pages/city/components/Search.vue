<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音" />
    </div>

    <!-- 这个部分是在上面搜索框搜索内容时显示的区块 -->
    <!-- v-show="keyword" 当输入框中有值时显示这个区块 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">
          {{item.name}}
        </li>

        <li class="search-item border-bottom" v-show="!list.length">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    // 监听keyword的改变
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      // 当搜索框中没有输入关键字时，下面的区块中没有内容显示
      if (!this.keyword) {
        this.list = []
        return
      }

      // 当keyword发生改变，隔100ms后箭头函数执行
      this.timer = setTimeout(() => {
        const result = []
        // 循环cities这个对象
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    // 实现搜索内容后显示的区块的滚动
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      padding: 0 .1rem
      box-sizing: border-box
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>
