<template>
  <div class="radio">
    <input type="radio" id="radioId" :checked="checked" @change="updateValue" />
    <label for="radioId"></label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
    checked: {
      type: Boolean,
    },
  },
  methods: {
    updateValue() {
      this.$emit("change", event.target.checked);
    },
  },
};
</script>

<style>
.radio label {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #2eb5f0;
  position: relative;
  cursor: pointer;
}
.radio label::before {
  content: " ";
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.radio input[type="radio"] {
  display: none;
}
.radio input[type="radio"]:checked + label {
  background-color: #2eb5f0;
}
</style>
