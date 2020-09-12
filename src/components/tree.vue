<template>
  <div class="bar">
    <ul>
      <tree-item
        class="tree"
        :tree="treeData"
        @make-folder="makeFolder"
        @add-child="addChild"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
import treeItem from "@/components/treeItem";
export default {
  name: "tree",
  components: {
    treeItem,
  },
  props: {
    treeData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    makeFolder(tree) {
      this.$set(tree, "children", []);
      this.addChild(tree);
    },
    addChild(child) {
      child.children.push({
        name: "new stuff",
      });
    },
  },
};
</script>

<style>
ul li {
  background: #e0e0e0;
  border-radius: 2px;
}

.bar {
  background: skyblue;
  border-radius: 2px;
  min-height: 80vh;
  max-width: 25%;
  min-width: 20%;
}
</style>
