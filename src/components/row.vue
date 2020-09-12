<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.row {
  display: flex;
  min-height: 100px;
  align-content: space-between;
  justify-content: space-between;
}
</style>
