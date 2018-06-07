<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 利用keep-alive缓存页面，避免切换页面时多次发送请求，影响用户体验 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascropt-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
