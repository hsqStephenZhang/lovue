<template>
  <div>
    <!-- <aside class="preview">{{ notePreview }}</aside> -->
    <aside class="preview" v-html="notePreview"></aside>
  </div>
</template>

<script>
import marked from "@/js/marked";

export default {
  props: {
    content: {
      type: String,
    },
  },
  computed: {
    notePreview() {
      return marked(this.content);
    },
  },
  methods: {
    saveNote(val) {
      console.log("saving note", val);
      localStorage.setItem("content", val);
    },
  },
  watch: {
    content: {
      handler: "saveNote",
    },
  },
};
</script>

<style>
.preview {
  display: inline-flexbox;
}
</style>
