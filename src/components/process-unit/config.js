const inputSource = [
  {
    name: '4k摄像机视频流',
    position: { x: 176, y: 108 },
    src: 'camera',
    fluency: 0
  },
  {
    name: '4k摄像机视频流',
    position: { x: 176, y: 212 },
    src: 'camera',
    fluency: 0
  },
  {
    name: '4k摄像机视频流',
    position: { x: 176, y: 316 },
    src: 'camera',
    fluency: 0
  },
  {
    name: '4k摄像机视频流',
    position: { x: 176, y: 420 },
    src: 'camera',
    fluency: 0
  },
  {
    name: '视频备片流',
    position: { x: 176, y: 524 },
    src: 'video',
    fluency: 0
  },
  {
    name: '视频备片流',
    position: { x: 176, y: 628 },
    src: 'video',
    fluency: 0
  },
  {
    name: '视频备片流',
    position: { x: 176, y: 732 },
    src: 'video',
    fluency: 0
  },
  {
    name: '视频备片流',
    position: { x: 176, y: 836 },
    src: 'video',
    fluency: 0
  }
]

const codingNode = [
  {
    name: '5G背包',
    position: { x: 484, y: 108 },
    src: 'bag',
    fluency: 0
  },
  {
    name: '5G背包',
    position: { x: 484, y: 212 },
    src: 'bag',
    fluency: 0
  },
  {
    name: '5G背包',
    position: { x: 484, y: 316 },
    src: 'bag',
    fluency: 0
  },
  {
    name: '5G背包',
    position: { x: 484, y: 420 },
    src: 'bag',
    fluency: 0
  },
  {
    name: '5G网络传输',
    position: { x: 484, y: 524 },
    src: 'net',
    fluency: 0
  },
  {
    name: '5G网络传输',
    position: { x: 484, y: 628 },
    src: 'net',
    fluency: 0
  },
  {
    name: '5G网络传输',
    position: { x: 484, y: 732 },
    src: 'net',
    fluency: 0
  },
  {
    name: '5G网络传输',
    position: { x: 484, y: 836 },
    src: 'net',
    fluency: 0
  }
]

const input = [
  {
    name: '输入',
    position: { x: 748, y: 108 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 212 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 316 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 420 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 524 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 628 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 732 },
    src: 'input',
    fluency: 0
  },
  {
    name: '输入',
    position: { x: 748, y: 836 },
    src: 'input',
    fluency: 0
  }
]

const lcps = [
  {
    name: '输出',
    position: { x: 1089, y: 361 },
    src: 'output'
  }
]

const output = [
  {
    name: '投屏电脑1',
    position: { x: 1430, y: 108 },
    src: 'computer',
    fluency: 0
  },
  {
    name: '投屏电脑2',
    position: { x: 1430, y: 212 },
    src: 'computer',
    fluency: 0
  },
  {
    name: '投屏电脑3',
    position: { x: 1430, y: 316 },
    src: 'computer',
    fluency: 0
  },
  {
    name: '投屏电脑4',
    position: { x: 1430, y: 420 },
    src: 'computer',
    fluency: 0
  },
  {
    name: '4k监视器',
    position: { x: 1430, y: 524 },
    src: 'moniter',
    fluency: 0
  },
  {
    name: '4k监视器',
    position: { x: 1430, y: 628 },
    src: 'moniter',
    fluency: 0
  },
  {
    name: '移动端输出效果',
    position: { x: 1430, y: 732 },
    src: 'mobile',
    fluency: 0
  },
  {
    name: '移动端输出效果',
    position: { x: 1430, y: 836 },
    src: 'mobile',
    fluency: 0
  }
]

export default { inputSource, codingNode, input, lcps, output }
