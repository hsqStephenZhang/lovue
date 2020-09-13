<template>
  <div class="timer" :class="timerTheme">
    <div id="timer-label"></div>
    <div id="timer">{{ currentTime }}</div>
    <div>
      <button></button>
      <button></button>
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "timer",
  props: {
    minutes: {
      type: Number,
      validator(value) {
        return value >= 0 && value <= 60;
      },
    },
    seconds: {
      type: Number,
      validator(value) {
        return value >= 0 && value <= 60;
      },
    },
    startLabel: {
      type: String,
      default: "start",
    },
    pauseLabel: {
      type: String,
      default: "pause",
    },
    resetLabel: {
      type: String,
      default: "reset",
    },
    muted: {
      type: Boolean,
      default: "false",
    },
  },
  data() {
    return {
      min: this.minutes,
      secs: this.seconds,
      tiemrId: 0,
      audio: null,
      running: false,
      paused: false,
      stopped: true,
      muted: this.muted,
    };
  },
  computed: {
    currentTime() {
      let minutes = this.min < 10 ? "0" + this.min : this.min;
      let seconds = this.secs < 10 ? "0" + this.secs : this.secs;
    },
    isStartDisabled() {
      return this.running;
    },
    isPauseDisabled() {
      return this.stopped || this.paused;
    },
    isResetDisabled() {
      return false;
    },
  },

  methods: {
    run() {
      this.running = true;
      this.paused = false;
      this.stopped = false;
    },
    pause() {
      this.running = false;
      this.paused = true;
      this.stopped = false;
    },
    stop() {
      this.running = false;
      this.paused = false;
      this.stopped = true;
    },
  },
};
</script>
