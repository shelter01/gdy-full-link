<template>
  <foreignObject
    :x="info.position.x"
    :y="info.position.y"
    width="130"
    height="250"
  >
    <div class="box" :title="info.name">
      <div class="status">
        <img :src="src" />
        <div class="wrap">
          <div class="crop">111</div>
        </div>
        <div class="wrap2">
          <div class="crop"></div>
        </div>
        <div class="name">
          {{ info.name }}
        </div>
      </div>
    </div>
  </foreignObject>
</template>
<script>
import rule from '../rule'
export default {
  mixins: [rule],
  data() {
    return {
      upHere: false
    }
  },
  props: {
    type: {},
    info: {
      default() {
        return {}
      }
    }
  },
  computed: {
    src() {
      return require(`../imgs/${this.info.src}.png`)
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  text-align: center;
  height: 100%;
  .status {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 200px;
    img {
      width: 96px;
      height: 214px;
      position: absolute;
      left: 18px;
      z-index: 10;
    }
    .wrap {
      position: absolute;
      transform: rotate(45deg) translate3d(0, 0, 0);
      display: inline-block;
      transition: transform 300ms ease-out;
      width: 206px;
      left: 0;
      top: 184px;
      z-index: 0;
      .crop {
        position: relative;
        width: 94px;
        height: 94px;
        margin: 0;
        display: block;
        overflow: hidden;
        transform: skew(-16deg, -16deg) translate3d(0, 0, 0);
        border: 2px solid #29c8c7;
        border-radius: 50%;
      }
    }
    .wrap2 {
      position: absolute;
      transform: rotate(45deg) translate3d(0, 0, 0);
      display: inline-block;
      transition: transform 300ms ease-out;
      width: 206px;
      left: 0;
      top: 194px;
      z-index: 1;
      .crop {
        position: relative;
        width: 94px;
        height: 94px;
        margin: 0;
        display: block;
        overflow: hidden;
        transform: skew(-16deg, -16deg) translate3d(0, 0, 0);
        border: 2px solid #135d5d;
        border-radius: 50%;
      }
    }
    .name {
      position: absolute;
      transform: translate3d(0, 0, 0);
      display: inline-block;
      // transition: transform 300ms ease-out;
      width: 206px;
      left: -36px;
      top: 143px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      z-index: 12;
    }
  }
}
</style>
