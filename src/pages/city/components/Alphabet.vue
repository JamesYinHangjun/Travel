<template>
  <ul class="list">
    <li class="item" v-for="item in letters" :key="item" :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
        {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      // 截流
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      // letters = ['A','B','C','D']
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // 把点击的字母传给兄弟组件 List.vue, 先将数据传给父组件City.vue,再将数据传给List.vue
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // startY 代表的是字母表A的顶部距离绿色下沿的高度
          // const startY = this.$refs['A'][0].offsetTop
          // console.log(startY)    74

          // e.touches[0].clientY 指手指距离最顶部的高度，79表示蓝色区域的高度
          // touchY指的是手指当前所在的字母距离绿色下沿的高度
          const touchY = e.touches[0].clientY - 79
          // 20 是每个字母的高度，index 表示手指当前的字母距离字母A有多少个字母
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)

          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus"  scoped>
  @import '../../../assets/styles/variables.styl'
  .list
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
