<template>
  <div class="home">
    <div class="header"><slot name="header">header</slot></div>
    <div class="main">
      <h4>使用作用域插槽，可以直接访问子组件的数据</h4>
      <test-slot :list="books">
        <template slot="withdata" slot-scope="child">
          <li>{{ child.itemName }}</li>
        </template>
      </test-slot>
    </div>
    <div class="footer"><slot name="footer">footer</slot></div>
  </div>
</template>

<script>
// @ is an alias to /src
import testSlot from "@/components/testSlot";

export default {
  name: "Home",
  components: {
    testSlot,
  },
  data() {
    return {
      books: ["aaaa", "bbbb", "cccc"],
    };
  },
};
</script>

<style>
.main {
  font-size: 30px;
}

.header .footer {
  font-size: 4px;
}

.footer {
  /* position: absolute; */
}
</style>
