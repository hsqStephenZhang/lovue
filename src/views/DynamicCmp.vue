<template>
  <div>
    <component :is="currentView"></component>
    <button @click="hadnleChangeView('A')">to A</button>
    <button @click="hadnleChangeView('B')">to B</button>
  </div>
</template>

<script>
import comA from "@/components/test/comA";
import comB from "@/components/test/comB";
export default {
  components: {
    comA,
    comB,
  },
  data() {
    return {
      currentView: "comA",
    };
  },
  methods: {
    handleChangeView(name) {
      this.currentView = "com" + name;
    },
  },
};
</script>
