<template>
  <div class="column" :style="{ flex: flexPercent(span), margin: gutter }">
    <slot name="content">{{ span }}</slot>
  </div>
</template>

<script>
export default {
  name: "column",
  props: {
    span: {
      type: Number,
      default: 24,
    },
    margin: {
      type: String,
      default: "2px 2px",
    },
    offset: {
      type: Number,
      default: 0,
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    flexPercent() {
      return this.span / 24;
    },
  },
};
</script>

<style>
.column {
  text-align: center;
  vertical-align: center;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;

  width: 100px;
  margin: 2px 2px;
  border-radius: 2px;
  background: skyblue;
}
</style>
