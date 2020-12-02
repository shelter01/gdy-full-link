<template>
  <div class="box">
    <!-- 全屏 -->
    <div class="screen-full" @click="screenFull">
      <img src="../assets/icons/screenfull.svg" />
    </div>
    <!-- svg整屏定位 -->
    <svg version="1.1" viewBox="0 0 1700 950" id="screen-full">
      <g class="link-line-box">
        <link-line></link-line>
      </g>
      <g class="input-box">
        <stream-input
          :x="176"
          :y="60"
          :data="inputSource"
          name="信号输入源"
        ></stream-input>
      </g>
      <g class="coding-node-box">
        <coding-node
          :x="484"
          :y="60"
          :data="codingNode"
          name="编码节点"
        ></coding-node>
      </g>
      <g class="lcps-box">
        <lcps :data="input" :x="748" :y="60" name="云导播台"></lcps>
      </g>
      <g class="lcps-output-box">
        <lcps-output :data="lcps"></lcps-output>
      </g>
      <g class="output-box">
        <stream-output
          :x="1430"
          :y="60"
          :data="output"
          name="输出流"
        ></stream-output>
      </g>
      <g class="fluency">
        <fluency :x="340" :y="60" name="信号流畅度"></fluency>
      </g>
    </svg>
  </div>
</template>

<script>
import resDemo from './data.json'
import CONFIG from './process-unit/config'
import screenfull from 'screenfull'
import {
  streamInput,
  lcps,
  linkLine,
  codingNode,
  streamOutput,
  lcpsOutput,
  fluency
} from './process-unit'
export default {
  name: 'fullLink',
  components: {
    streamInput,
    lcps,
    linkLine,
    codingNode,
    streamOutput,
    lcpsOutput,
    fluency
  },
  computed: {
    inputSource() {
      return CONFIG.inputSource
    },
    codingNode() {
      return CONFIG.codingNode
    },
    input() {
      return CONFIG.input
    },
    lcps() {
      return CONFIG.lcps
    },
    output() {
      return CONFIG.output
    }
  },
  data() {
    return {
      streamInputData: [],
      aaa: [1]
    }
  },
  methods: {
    screenFull() {
      const el = document.getElementById('screen-full')
      if (screenfull.isEnabled) {
        screenfull.toggle(el)
      }
    },
    getlinkList() {
      this.resetData()
      this.$nextTick(() => {
        this._makePublish(resDemo.data.publish)
      })
    },
    resetData() {
      this.streamInputData = []
    },
    _makePublish(data) {
      if (!data || !data.length) {
        return false
      }
      data.forEach(item => {
        let inputData = item.publish[0]
        if (inputData.type == 'stream_input') {
          const dataObj = {
            type: inputData.type,
            name: inputData.name || '输入源',
            fluency: 100,
            fluencyTo: 100
          }
          this.streamInputData.push(dataObj)
        }
      })
    }
  },
  mounted() {
    this.getlinkList()
  }
}
</script>

<style scoped lang="less">
.box {
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  background-color: #1b1c20;
  .screen-full {
    position: absolute;
    top: 1%;
    right: 1%;
    width: 1.5vw;
    height: 1.5vw;
    cursor: pointer;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
    }
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(0.9);
  }
}
</style>
