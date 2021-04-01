<template>
  <foreignObject
    :x="info.position.x"
    :y="info.position.y"
    width="120"
    height="100"
  >
    <div class="box" :class="_statusClass(info.fluency)">
      <div class="fluency">{{ info.name }}</div>
      <div class="text">
        <!-- {{ info.fluency > 98 || info.fluency == 0 ? '流畅' : '卡顿' }} -->
        {{ fluency }}
      </div>
    </div>
  </foreignObject>
</template>
<script>
import rule from '../rule'
export default {
  mixins: [rule],
  data() {
    return {}
  },
  props: {
    // key: {
    //   default() {
    //     return 0
    //   }
    // },
    info: {
      default() {
        return []
      }
    }
  },
  computed: {
    fluency() {
      if (this.info.fluency >= 98) {
        return '流畅'
      } else if (this.info.fluency > 0) {
        return '卡顿'
      } else {
        return '未输入'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  .text {
    padding-top: 5px;
    color: #33c78d;
  }
  &.success {
    .text {
      color: #33c78d;
    }
  }
  &.error {
    .text {
      color: red;
    }
  }
  &.none {
    .text {
      color: rgb(182, 180, 180);
    }
  }
}
</style>
