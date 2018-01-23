class Video {
  loadVideo(video) {
    this.video = video;
  }

  get paused() {
    return this.video.paused;
  }

  get muted() {
    return this.video.muted;
  }

  get currentTime() {
    return this.video.currentTime;
  }

  get percent() {
    return `${this.currentTime / this.duration * 100}%`;
  }

  get duration() {
    return this.video.duration;
  }

  /**
   * Listen for video ended event
   * @param {*} callback
   */
  listenForEnded(callback) {
    this.video.addEventListener("ended", callback);
  }

  /**
   * Listen for video play event
   * @param {*} callback
   */
  listenForPlay(callback) {
    this.video.addEventListener("play", callback);
  }

  /**
   * Listen for video timeupdate event
   * @param {*} callback
   */
  listenForPlaying(callback) {
    this.video.addEventListener("timeupdate", callback());
  }

  /**
   * Play video
   * @param {*} callback
   */
  play(callback) {
    this.video.play();
    return callback(this.paused);
  }

  /**
   * Pause video
   * @param {*} callback
   */
  pause(callback) {
    this.video.pause();
    return callback(this.paused);
  }

  enterFullScreen() {
    if (this.ifFullScreenEnabled) {
      if (this.video.requestFullscreen) {
        return this.video.requestFullscreen();
      } else if (this.video.webkitRequestFullscreen) {
        return this.video.webkitRequestFullscreen();
      } else if (this.video.mozRequestFullScreen) {
        return this.video.mozRequestFullScreen();
      } else if (this.msRequestFullscreen) {
        return this.video.msRequestFullscreen();
      }
    }
  }

  exitFullScreen() {
    if (this.ifFullScreenEnabled) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  mute(callback) {
    this.video.muted = true;
    return callback(this.muted);
  }

  unMute(callback) {
    this.video.muted = false;
    return callback(this.muted);
  }

  /**
   * Check if fullscreen is enabled
   */
  get ifFullScreenEnabled() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }
}

export default Video;
