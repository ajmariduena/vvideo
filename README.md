# vvideo

> A simple Vue.js Video component

Demo [Here](http://vvideo.ajmariduena.com/)

## Usage

```html
<vvideo 
  source-webm="http://techslides.com/demos/sample-videos/small.webm"
  source-ogg="http://techslides.com/demos/sample-videos/small.ogv"
  source-mp4="http://techslides.com/demos/sample-videos/small.mp4"
  source-3gp="http://techslides.com/demos/sample-videos/small.3gp"
>
</vvideo>
```

### Props

| Prop name | Description | Type | Required | Default value |
|---------- |-------- |---------- |---------- |---------- |
| `source-webm` | Path to webm src | `String` | no |  |
| `source-ogg` | Path to ogg src | `String` | no |  |
| `source-mp4` | Path to mp4 src | `String` | no |  |
| `source-3gp` | Path to 3gp src | `String` | no |  |
| `play-button` | Show play button | `Boolean` | no | `true` |
| `mute-button` | Show mute button | `Boolean` | no | `true` |
| `progress-bar` | Show progress bar | `Boolean` | no | `true` |
| `full-screen-button` | Show fullscreen button | `Boolean` | no | `true` |
| `wrapper-class` | Change default wrapper class | `String` | no | `vvideo_wrapper` |
| `video-class` | Change default video class | `String` | no | `vvideo` |
| `toolbar-class` | Change default progress bar class | `String` | no | `vvideo__toolbar` |
| `button-class` | Change default button class | `String` | no | `vvideo__button` |
| `progress-bar-class` | Change default progress bar class | `String` | no | `vvideo__progressbar` |

### Events

| Event name | Description | Parameters |
|---------- |-------- |---------- |
| `click` | fire when hello text is clicked | helloText: `String` |

### Slots

Here you can customize vvideo buttons, it can be anything you want.

| Slot name | Description | Accepted Element |
|---------- |-------- |---------- |
| `playIcon` | Play button content slot | `any` |
| `pauseIcon` | Pause button content slot | `any` |
| `replayIcon` | Replay button content slot | `any` |
| `muteIcon` | Mute button content slot | `any` |
| `muteOffIcon` | Unmute button content slot | `any` |
| `fullScreenIcon` | Fullscreen button content slot | `any` |


### Default styles

Default vvideo styles just for reference.

```
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
```

## Roadmap
- [ ] Add click to play option

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guide.

---
This component was generated with [vue-authoring-template](https://github.com/DrSensor/vue-authoring-template) using [vue-cli](https://github.com/vuejs/vue-cli).
