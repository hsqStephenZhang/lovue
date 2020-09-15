<template>
  <div class="grid" :style="{ height: height }">
    <slot></slot>
    <!-- <div style="grid-column:6/ span 2;background:blue">6-8</div> -->
  </div>
</template>

<script>
export default {
  name: "grid",

  props: {
    height: {
      type: String,
      default: "auto",
    },
    gutter: {
      type: String,
      default: "2px",
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-auto-flow: dense;
  grid-auto-columns: 1fr;
  column-gap: 2px;
}

.grid * {
  background: red;
}
</style>
