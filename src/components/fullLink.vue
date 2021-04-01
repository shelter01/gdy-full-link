<template>
  <div class="box" id="screen-full">
    <!-- 全屏 -->
    <div class="screen-full" @click="screenFull">
      <img src="../assets/icons/screenfull.svg" />
    </div>
    <!-- svg整屏定位 -->
    <svg version="1.1" viewBox="0 0 1700 950">
      <g class="link-line-box">
        <link-line></link-line>
      </g>
      <g class="input-box">
        <stream-input
          :x="176"
          :y="60"
          :data="inputSource"
          name="信号输入源"
          :lineFluency="lineFluency"
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
        <fluency
          :x="340"
          :y="60"
          name="信号流畅度"
          :lineFluency="lineFluency"
        ></fluency>
      </g>
    </svg>
  </div>
</template>

<script>
// import resDemo from './data.json'
import CONFIG from './process-unit/config'
import screenfull from 'screenfull'
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axios = axios
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
      url: 'http://112.124.197.76:8888/v2/LPS.GetAllStatusForAppStream',
      lcpsInData: [],
      lineFluency: []
      // index: 0
    }
  },
  methods: {
    screenFull() {
      const el = document.getElementById('screen-full')
      if (screenfull.isEnabled) {
        screenfull.toggle(el)
      }
    },
    async getlinkList() {
      const { data: res } = await this.$axios.get(this.url)
      this.resetData()
      this.$nextTick(() => {
        this._makePublish(res.data.publish)
      })
    },
    resetData() {
      this.streamInputData = []
      this.lineFluency = []
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
            fluency: item.publishFluency,
            fluencyTo: item.publishToFluency
          }
          this.streamInputData.push(dataObj)
        }
        // if (item.type === 'lcps_in') {
        //   const dataObj = {
        //     type: item.type,
        //     name: item.name || `信道${index + 1}`,
        //     fluency: item.publishFluency,
        //     fluencyTo: item.publishToFluency
        //   }
        //   this.lcpsInData.push(dataObj)
        // }
      })
      this.makefluency(this.streamInputData)
    },
    makefluency(stream) {
      for (let i = 0; i < stream.length; i++) {
        const data = {
          fluency: Math.max(stream[i].fluencyTo, stream[i].fluency)
          // fluency: 98
        }
        this.lineFluency.push(data)
      }
    }
  },
  created() {
    this.getlinkList()
  },
  mounted() {
    setInterval(() => {
      this.getlinkList()
    }, 2000)
  }
}
</script>

<style scoped lang="less">
.box {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  font-family: Helvetica;
  background-color: #1b1c20;
  background-image: url('../assets/icons/background.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
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
    display: block;
    width: 100%;
    transform: scale(0.8);
  }
}
</style>
