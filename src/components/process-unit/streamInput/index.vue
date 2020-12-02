<template>
  <g>
    <foreignObject :x="x" :y="y" width="120" height="25">
      <div class="title">{{ name }}</div>
    </foreignObject>
    <template v-for="(item, index) in data">
      <item :info="item" :key="index"></item>
    </template>
    <foreignObject :x="x - 90" :y="189" width="80" height="20">
      <div class="city">杭州</div>
    </foreignObject>
    <foreignObject :x="x - 90" :y="293" width="80" height="20">
      <div class="city">杭州</div>
    </foreignObject>
    <foreignObject :x="x - 90" :y="397" width="80" height="20">
      <div class="city">北京</div>
    </foreignObject>
    <foreignObject :x="x - 90" :y="501" width="80" height="20">
      <div class="city">北京</div>
    </foreignObject>
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
.city {
  font-size: 14px;
  font-weight: bold;
  color: #38a9cd;
  text-align: right;
  background-image: url('../../../assets/icons/position.svg');
  background-size: 100% 100%;
}
</style>
