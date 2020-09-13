<template>
  <div class="column" :style="{ flex: this.span, margin: this.gutter + 'px' }">
    <slot>{{ span }}</slot>
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
    offset: {
      type: Number,
      default: 0,
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {},
};
</script>

<style>
.column {
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background: #e0e0e0;
}
</style>
