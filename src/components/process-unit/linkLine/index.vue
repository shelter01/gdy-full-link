<template>
  <g>
    <transition-group tag="g" name="fade">
      <template v-for="(item, index) in line">
        <item :info="item" :key="index"></item>
      </template>
    </transition-group>
    <foreignObject
      :x="0"
      :y="0"
      width="1700"
      height="950"
      v-for="(item, index) in path"
      :key="index"
      v-show="boolList[index].fly"
    >
      <div class="flyline" :style="path[index]">
        <img src="../imgs/fly.png" alt="" />
      </div>
    </foreignObject>
  </g>
</template>
<script>
import LINE from './config'
import item from './item'
export default {
  components: {
    item
  },
  data() {
    return {
      boolList: [
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false },
        { fly: false }
      ]
    }
  },
  methods: {
    // 随机显示几条飞线动画
    changeBool() {
      const tempArr = this.boolList
      for (let i = 0; i < tempArr.length; i++) {
        tempArr[i].fly = Math.random() > 0.7 ? true : false
      }
      this.boolList = tempArr
    }
  },
  mounted() {
    this.changeBool()
    setInterval(() => {
      this.changeBool()
    }, 3000)
  },
  computed: {
    line() {
      return LINE.line
    },
    path() {
      return LINE.path
    }
  }
}
</script>
<style lang="less" scoped>
.flyline {
  width: 40px;
  height: 20px;
  // offset-path: path('M 830 894 C 950,780 1050,1080 1150,570');
  offset-distance: 0%;
  animation: red-ball 3s linear infinite;
  img {
    width: 100%;
    height: 100%;
  }
}
@keyframes red-ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
</style>
