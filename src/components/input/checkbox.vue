<template>
  <div class="checkbox">
    <input type="checkbox" :id="id" :checked="checked" @change="updateValue" />
    <label :for="id"></label>
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
      default: false,
    },
    value: {
      type: [String, Number, Array, Boolean],
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("change", event.target.checked);
    },
  },
  // v-model 在不同的html上面会监控不同的属性，抛出不同的事件
  //   text 和 textarea 元素使用 value 属性和 input 事件；
  // checkbox 和 radio 使用 checked 属性和 change 事件；
  // select 字段将 value 作为 prop 并将 change 作为事件。
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
