<template>
  <div
    class="row"
    :style="{
      display: this.display,
      'justify-content': this.justifyContent,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      default: "flex",
    },
    justifyContent: {
      type: String,
      default: "space-around",
    },
    alignItems: {
      type: String,
      default: "center",
    },
    alignContent: {
      type: String,
      default: "space-around",
    },
  },
};
</script>

<style>
* {
  margin: 2px;
  padding: 0px;
}

.row {
  min-height: 1em;
}
</style>
