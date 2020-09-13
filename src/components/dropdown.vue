<template>
  <div class="dropdown-box" v-clickoutside="handleClose">
    <button @click="show = !show">click</button>
    <div class="dropdown" v-show="show">
      <p>下拉框的内容，点击外部关闭</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  data: function() {
    return {
      show: false,
    };
  },
  methods: {
    handleClose() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
[v-clock] {
  display: none;
}

.dropdown-box {
  width: 125px;
}

button {
  display: block;
  width: 100%;
  color: #fff;
  background-color: #39f;
  border: 0;
  padding: 6px;
  text-align: center;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  position: relative;
}

button:active {
  top: 1px;
  left: 1px;
}

.dropdown {
  width: 100%;
  height: 100px;
  margin: 5px 0;
  font-size: 12px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.dropdown p {
  display: inline-block;
  padding: 6px;
}
</style>
