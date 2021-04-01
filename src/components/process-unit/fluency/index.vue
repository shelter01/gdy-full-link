<template>
  <g>
    <foreignObject :x="x" :y="y" width="120" height="25">
      <div class="title">{{ name }}</div>
    </foreignObject>
    <template v-for="(item, index) in fluency">
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
    lineFluency: {
      default() {
        return []
      }
    }
  },
  data() {
    return {
      fluencyConfig: [
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 137 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 241 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 345 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 449 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 553 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 657 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 761 },
          fluency: 0
        },
        {
          name: '0 kbs 25帧',
          position: { x: 340, y: 865 },
          fluency: 0
        }
      ]
    }
  },
  computed: {
    // 显示前i个真实数据
    fluency() {
      const res = []
      for (let i = 0; i < this.lineFluency.length; i++) {
        let num = this.lineFluency[i].fluency * 30
        // this.lineFluency[i].fluency == 0
        //   ? 3000
        //   : this.lineFluency[i].fluency * 30
        let text = num === 0 ? ' kbs 0帧' : ' kbs 25帧'
        if (i === 0) {
          num = this.lineFluency[i].fluency * 60
          text = num === 0 ? ' kbs 0帧' : ' kbs 50帧'
        }
        const data = {
          name: num + text,
          position: this.fluencyConfig[i].position,
          fluency: this.lineFluency[i].fluency
        }
        res.push(data)
      }
      return [...res, ...this.fluencyConfig.slice(res.length + 1)]
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
