<template>
  <div class="checkbox">
    <input type="checkbox" id="inputId" />
    <label for="inputId"></label>
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

<style>
.checkbox input[type="checkbox"] {
  display: none;
}
.checkbox label {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #2eb5f0;
  position: relative;
  cursor: pointer;
}
.checkbox label::before {
  display: inline-block;
  content: " ";
  width: 12px;
  border: 2px solid #fff;
  height: 4px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  top: 5px;
  left: 3px;
  position: absolute;
  opacity: 0;
}
.checkbox input[type="checkbox"]:checked + label {
  background: #2eb5f0;
}
.checkbox input[type="checkbox"]:checked + label::before {
  opacity: 1;
  transform: all 0.5s;
}
</style>
