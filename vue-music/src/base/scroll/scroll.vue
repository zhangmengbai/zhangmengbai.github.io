<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    // 默认值：0
    // 可选值：1、2、3
    // 作用：有时候我们需要知道滚动的位置。
    // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
    // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
    // 当probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
    // 如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    // 属性：监听滚动事件
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      // 是否监听滚动事件 pos参数为位置
      if (this.listenScroll) {
        let me = this
        // 在better-scroll中this默认是指向'scroll'，所以在外层先行保留了vue实例的this
        this.scroll.on('scroll', (pos) => {
          // $emit 触发当前vue实例上的事件 在此为触发scroll事件，然后将附带参数，这里为pos传递给监听器
          me.$emit('scroll', pos)
        })
      }
    },
    enable () {
      // this.scroll指向better-scroll的实例
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    // 刷新scroll，重新计算高度
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}

</script>
