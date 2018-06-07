<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active:currentPageIndex === index}" v-for="(item, index) in dots" :key="item"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {addClass} from 'common/js/dom'
import BScroll from 'better-scroll'

export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      // dots为轮播导航点数组，数组长度需等同于轮播图原始数组长度（无缝滚动功能slider会使原始数组+2，故iniDots需在iniSlider前）
      this._initDots()
      this._initSlider()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)
    // 事件监听方法
    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      // refresh是better-scroll的刷新方法
      this.slider.refresh()
    })
  },
  methods: {
    // refresh () {
    //   if (this.slider) {
    //     this._setSliderWidth(true)
    //     // this.slider.refresh()
    //   }
    // },
    _setSliderWidth (isResize) {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        // momentum滚动动画
        momentum: false,
        // snap如果不使用传入对象方法会导致无法无缝轮播并且出现空白轮播页
        // 例如写为 snap: true,
        //         snapLoop: this.loop,
        //         snapThreshold: 0.3,
        //         snapSpeed: 400
        // 就会导致上述问题
        // snap为轮播配置
        snap: {
          // 横向轮播
          loop: this.loop,
          // 滚动到下一个的阈值
          threshold: 0.3,
          // 滚动速度 数值越小越快
          speed: 400
        }
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex

        if (this.autoPlay) {
          this._play()
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _play () {
      // 如若不重置定时器会造成手动拖动后计时混乱现象
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // .next是better-scroll插件的方法
        this.slider.next()
      },
      // 需再设置轮播时间间隔
      this.interval)
    }
  },
  // 组件销毁时清除定时器，利于内存释放
  destroyred () {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll

</style>
