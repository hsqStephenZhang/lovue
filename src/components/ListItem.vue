<template>
  <div class="list-item">
    <!-- <div class="avatar"><slot name="avatar"></slot></div>
    <div class="title"><slot name="title"></slot></div> -->
    <slot></slot>
    <div class="action"><slot name="action"></slot></div>
    <div class="extra"><slot name="extra"></slot></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAction(index) {
      this.$emit("onEmitIndex", index);
    },
  },
};
</script>

<style>
.list-item {
  min-width: 50px;
  max-width: 200px;
  /* width: 100px; */
  margin: 0px auto;
  /* display: inline-block; */
  list-style: none;
  background: #e0e0e0;
  border: 1px solid;
  border-radius: 4px;
}

.action .extra {
  display: inline;
}

.extra {
  background: red;
}

/* .list-item {
  font-size: 10px;
} */
</style>
