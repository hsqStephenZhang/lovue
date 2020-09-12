<template>
  <div>
    <li>
      <div
        class="self"
        :class="{ bold: isFolder, folder: isFolder, commonitem: !isFolder }"
        @click="toggle"
        @dblclick="makeFolder"
      >
        {{ tree.name }}
        <span v-if="isFolder">{{ isOpen ? closeShape : openShape }}</span>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <tree-item
          class="{folder:isFolder,commonitem:!isFolder}"
          v-for="(child, index) in tree.children"
          :key="index"
          :tree="child"
          @make-folder="$emit('make-folder', $event)"
          @add-child="$emit('add-child', $event)"
        >
        </tree-item>
        <li class="addchild" @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "treeItem",
  props: {
    tree: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
      openShape: ">",
      closeShape: "V",
    };
  },
  computed: {
    isFolder() {
      return this.tree.children && this.tree.children.length;
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder() {
      if (!this.isFolder) {
        this.$emit("make-folder", this.tree);
        this.isOpen = true;
      }
    },
    addChild() {
      this.$emit("add-child", this.tree);
    },
  },
};
</script>

<style>
.bold {
  font-weight: bold;
}
ul {
  padding-left: 0.2em;
  line-height: 1.5em;
  list-style-type: none;
}

li ul {
  background: #e0e0e0;
  border-radius: 2px;
}

.folder {
  cursor: pointer;
}

.commonitem {
  cursor: default;
}

.addchild {
  cursor: pointer;
}

.self .child {
  width: 100px;
  background: red;
}
</style>
