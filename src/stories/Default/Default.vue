<template>
  <div class="wrapper">
    <vvideo
      :progress-bar="true"
      :full-screen-button="true"
      :play-button="true"
      source-webm="http://techslides.com/demos/sample-videos/small.webm"
      source-ogg="http://techslides.com/demos/sample-videos/small.ogv"
      source-mp4="http://techslides.com/demos/sample-videos/small.mp4"
      source-3gp="http://techslides.com/demos/sample-videos/small.3gp">
    >
    </vvideo>
  </div>
</template>

<script>
/**@see https://github.com/storybooks/storybook/tree/master/addons/knobs#available-knobs */
import { text } from '@storybook/addon-knobs/vue'

export default {
  components: {
    Vvideo: () => import('@/Vvideo')
  },
  data() {
    return {
      mp4Video: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: #34495e;
  }
  .wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

