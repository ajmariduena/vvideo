<template>
  <div :class="wrapperClass">
    <video ref="video" :class="videoClass">
        <source :src="sourceWebm" v-if="sourceWebm" type="video/webm"> 
        <source :src="sourceOgg" v-if="sourceOgg" type="video/ogg"> 
        <source :src="sourceMp4" v-if="sourceMp4" type="video/mp4">
        <source :src="source3gp" v-if="source3gp" type="video/3gp">
    </video>
    <div :class="toolbarClass">
      <!-- Toogle Play Button -->
      <div>
        <button @click.prevent="togglePlay" :class="buttonClass" :style="buttonStyle" v-if="playButton">
          <slot name="playIcon" v-if="paused && !ended">
            <play-icon height="24px" width="24px" fill="white" />
          </slot>
          <slot name="pauseIcon" v-if="!paused && !ended">
            <pause-icon height="24px" width="24px" fill="white" />
          </slot>
          <slot name="replayIcon" v-if="ended">
            <replay-icon height="24px" width="24px" fill="white" />
          </slot>
        </button>
      </div>
      <!-- Progress bar -->
      <div :class="progressBarClass" v-if="progressBar">
        <span :style="{ width: percent }"></span>
      </div>
      <!-- Toggle Muted, FullScreen Button -->
      <div>
        <button :class="buttonClass" @click.prevent="toggleSound" :style="buttonStyle" v-if="muteButton">
            <slot name="muteIcon" v-if="!muted">
              <mute-icon height="24px" width="24px" fill="white" />
            </slot>
            <slot name="muteOffIcon" v-if="muted">
              <mute-off-icon height="24px" width="24px" fill="white" />
            </slot>
        </button>
        <button :class="buttonClass" @click.prevent="enterFullScreen" v-if="fullScreenButton" :style="buttonStyle">
          <slot name="fullScreenIcon">
            <full-screen-icon height="24px" width="24px" fill="white" />
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";
import ReplayIcon from "./ReplayIcon";
import MuteIcon from "./MuteIcon";
import MuteOffIcon from "./MuteOffIcon";
import FullScreenIcon from "./FullScreenIcon";

/* Video Class */
import Video from "./../video";
import video from "./../video";

export default {
  name: "Vvideo",
  props: {
    sourceWebm: {
      type: String
    },
    sourceOgg: {
      type: String
    },
    sourceMp4: {
      type: String
    },
    source3gp: {
      type: String
    },
    wrapperClass: {
      type: String,
      default: () => "vvideo_wrapper"
    },
    videoClass: {
      type: String,
      default: () => "vvideo"
    },
    toolbarClass: {
      type: String,
      default: () => "vvideo__toolbar"
    },
    buttonClass: {
      type: String,
      default: () => "vvideo__button"
    },
    progressBarClass: {
      type: String,
      default: () => "vvideo__progressbar"
    },
    playButton: {
      type: Boolean,
      defaul: () => true
    },
    muteButton: {
      type: Boolean,
      default: () => true
    },
    progressBar: {
      type: Boolean,
      default: () => true
    },
    fullScreenButton: {
      type: Boolean,
      default: () => true
    }
  },
  components: {
    PlayIcon,
    PauseIcon,
    ReplayIcon,
    MuteIcon,
    MuteOffIcon,
    FullScreenIcon
  },
  data() {
    return {
      Video: new Video(),
      currentTime: 0,
      muted: false,
      percent: "0%",
      paused: true,
      ended: false,
      buttonStyle: {
        cursor: "pointer",
        userSelect: "none"
      }
    };
  },
  mounted() {
    this.Video.loadVideo(this.$refs.video);
    this.Video.listenForEnded(() => (this.ended = true));
    this.Video.listenForPlay(() => (this.paused = false));
    this.Video.listenForPlaying(() => this.setPercent);
  },
  methods: {
    togglePlay() {
      this.ended = false;
      if (this.Video.paused) {
        return this.Video.play(paused => (this.paused = paused));
      }
      this.Video.pause(paused => (this.paused = paused));
    },
    toggleSound() {
      if (this.Video.muted) {
        return this.Video.unMute(muted => (this.muted = muted));
      }
      this.Video.mute(muted => (this.muted = muted));
    },
    setPercent() {
      this.percent = this.Video.percent;
    },
    enterFullScreen() {
      if(!this.fullScreen) {
        return this.Video.enterFullScreen();
      }
    }
  }
};
</script>

<style>
.vvideo_wrapper {
  width: 500px;
  height: 350px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}
.vvideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.vvideo__toolbar {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin-bottom: 6px;
  position: absolute;
  bottom: 0;
  left: 0;
  align-items: center;
}
.vvideo__button {
  z-index: 2;
  width: 50px;
  height: 100%;
  position: relative;
  appearance: none;
  border: 0;
  background: none;
  outline: 0;
  transition: transform 200ms ease-in-out;
}
.vvideo__button:hover {
  transform: scale(1.2);
}
.vvideo__progressbar {
  flex: 1;
  height: 10px;
  position: relative;
  background: #efefef;
  z-index: 2;
  border-radius: 5px;
  margin: 0 1rem;
  overflow: hidden;
}
.vvideo__progressbar > span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: #3498db;
  transition: all 300ms linear;
}
</style>
