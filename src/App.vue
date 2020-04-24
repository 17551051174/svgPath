<template>
  <div class="vxh5">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang='scss'>
html, body, .vxh5 {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.video-js .vjs-big-play-button{
  line-height: 60px !important;
  height: 60px !important;
  width: 60px !important;
  top: 50% !important;
  left: 50% !important;
  border-radius: 50% !important;
  transform: translate(-50%, -50%) !important;
}
.video-js.vjs-fluid, .video-js.vjs-16-9, .video-js.vjs-4-3 {
  height: 100% !important;
}
</style>
