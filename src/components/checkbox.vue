<template>
  <div>
    <input type="checkbox" class="inputbox" id="inputbox" />
    <label for="inputbox"></label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
};
</script>

<style></style>
