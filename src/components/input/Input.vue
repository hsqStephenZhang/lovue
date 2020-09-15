<template>
  <div>
    <input
      class="input-box"
      type="text"
      @input="updateValue"
      :value="value"
      :placeholder="size"
      :style="{
        fontSize: fontSize,
        '--color': color,
        margin: '2px 2px',
        'max-width': width,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
    },
    placeholder: {
      type: String,
      default: "input here",
    },
    span: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      color: "skyblue",
    };
  },
  computed: {
    fontSize() {
      if (this.size === "small") return "1em";
      else if (this.size === "large") return "2em";
      else return "1.5em";
    },
    width() {
      return this.span + "em";
    },
  },
  methods: {
    updateValue() {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
/* 声明scoped,就可使用绑定的变量*/
.input-box {
  color: var(--color);
}
</style>
