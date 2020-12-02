<template>
  <foreignObject
    :x="info.position.x"
    :y="info.position.y"
    width="100"
    height="100"
  >
    <div class="box" :title="info.name" :class="_statusClass(info.fluency)">
      <div class="status">
        <img :src="src" />
        <div class="wrap">
          <div class="crop"></div>
        </div>
        <div class="wrap2">
          <div class="crop"></div>
        </div>
      </div>
      <div class="name">
        {{ info.name }}
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
  .status {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 75px;
    img {
      width: 52px;
      height: 70px;
    }
    .wrap {
      position: absolute;
      transform: rotate(45deg) translate3d(0, 0, 0);
      display: inline-block;
      transition: transform 300ms ease-out;
      width: 100px;
      left: 18px;
      top: 42px;
      z-index: -1;
      .crop {
        position: relative;
        width: 48px;
        height: 48px;
        margin: 0;
        display: block;
        overflow: hidden;
        transform: skew(-16deg, -16deg) translate3d(0, 0, 0);
        border: 2px solid #29c8c7;
      }
    }
    .wrap2 {
      position: absolute;
      transform: rotate(45deg) translate3d(0, 0, 0);
      display: inline-block;
      transition: transform 300ms ease-out;
      width: 100px;
      left: 18px;
      top: 48px;
      z-index: -2;
      .crop {
        position: relative;
        width: 48px;
        height: 48px;
        margin: 0;
        display: block;
        overflow: hidden;
        transform: skew(-16deg, -16deg) translate3d(0, 0, 0);
        border: 2px solid #135d5d;
      }
    }
  }
  .name {
    color: #37c28b;
    height: 20px;
    padding-top: 6px;
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &.success {
    .wrap {
      .crop {
        border-color: #29c8c7;
      }
    }
    .wrap2 {
      .crop {
        border-color: #135d5d;
      }
    }
  }
  &.error {
    .wrap {
      .crop {
        border-color: red;
      }
    }
    .wrap2 {
      .crop {
        border-color: rgb(122, 22, 22);
      }
    }
  }
}
</style>
