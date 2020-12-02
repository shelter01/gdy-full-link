<template>
  <g>
    <foreignObject :x="x" :y="y" width="120" height="25">
      <div class="title">{{ name }}</div>
    </foreignObject>
    <template v-for="(item, index) in fluencyList">
      <item :key="index" :info="item"></item>
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
  data() {
    return {
      fluencyList: [
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 137 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 241 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 345 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 449 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 553 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 657 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 761 },
          fluency: 0
        },
        {
          name: '3000 kbs 25帧',
          position: { x: 340, y: 865 },
          fluency: 0
        }
      ]
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
