<template>
  <div class="switch">
    <input type="checkbox" id="checkId" checked />
    <label for="checkId"></label>
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
.switch label {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: red;
  border-color: red;
  border-radius: 10px;
}
.switch label::before {
  content: " ";
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  right: 22px;
  top: 2px;
  background-color: #fff;
  transition: all 0.4s ease;
  cursor: pointer;
}
.switch input {
  display: none;
}
.switch input:checked + label {
  background-color: rgb(19, 206, 102);
  border-color: rgb(19, 206, 102);
}
.switch input:checked + label::before {
  right: 2px;
}
</style>
