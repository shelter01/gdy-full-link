<template>
  <div id="app">
    <gdy-full-link />
  </div>
</template>

<script>
import fullLink from './components/fullLink.vue'

export default {
  name: 'App',
  components: {
    gdyFullLink: fullLink
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
