<template>
  <g>
    <g>
      <template v-for="(item, index) in data">
        <item :info="item" :key="index"></item>
      </template>
    </g>
  </g>
</template>
<script>
import item from './item'
export default {
  components: {
    item
  },
  props: {
    x: {},
    y: {},
    name: {},
    data: {
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  line-height: 21px;
  text-align: center;
  font-size: 21px;
  color: #fff;
  font-weight: bold;
}
</style>
