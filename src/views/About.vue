<template>
  <div class="about">
    <h1>This is an about page</h1>
    <List>
      <List-item @onEmitIndex="onEmitIndex">
        <button @click="handleAction(1)" slot="action">click1</button>
      </List-item>
      <List-item @onEmitIndex="onEmitIndex">
        <button @click="handleAction(2)" slot="action">click1</button>
      </List-item>
      <List-item @onEmitIndex="onEmitIndex">
        <button @click="handleAction(3)" slot="action">click1</button>
      </List-item>
    </List>
    <p>currentIndex:{{ currentIndex }}</p>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import List from "@/components/List";

export default {
  components: {
    List,
    ListItem,
  },
  data() {
    return {
      currentIndex: -1,
      books: ["aaaa", "bbbb", "ccccc", "dddd"],
    };
  },
  methods: {
    onEmitIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>
