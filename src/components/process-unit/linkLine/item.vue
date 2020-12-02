<template>
  <path :d="info"></path>
</template>
<script>
import rule from '../rule'
export default {
  mixins: [rule],
  props: {
    info: {
      default() {
        return ''
      }
    }
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
path {
  fill: none;
  stroke: #329eb6;
  stroke-width: 2px;
  transition: all 0.5s;
}
</style>
