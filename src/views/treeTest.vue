<template>
  <div>
    <h2 style="text-align:center">this is test of tree</h2>
    <br />
    <tree :tree-data="treeData"></tree>
  </div>
</template>

<script>
import tree from "@/components/tree";

var treeData = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
      ],
    },
  ],
};

export default {
  components: {
    tree,
  },
  data() {
    return {
      treeData: treeData,
    };
  },
};
</script>
