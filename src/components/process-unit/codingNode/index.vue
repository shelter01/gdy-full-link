<template>
  <g>
    <foreignObject :x="x" :y="y" width="120" height="25">
      <div class="title">{{ name }}</div>
    </foreignObject>
    <template v-for="(item, index) in data">
      <item :info="item" :key="index"></item>
    </template>
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
  },
  computed: {}
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
