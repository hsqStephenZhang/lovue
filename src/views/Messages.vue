<template>
  <div class="messages">
    <textarea
      name="raw_md"
      id="raw_md"
      cols="30"
      rows="10"
      v-model="content"
    ></textarea>
    <div class="board">
      <board :content="content"></board>
    </div>
  </div>
</template>

<script>
import board from "@/components/board";
export default {
  components: {
    board,
  },
  data() {
    return {
      content: "**Bold** *Italic* [link] (https://www.baidu.com)",
    };
  },
};
</script>

<style>
.messages {
  font-size: 2rem;
  display: flex;
  min-height: 100vh;
}

.messages textarea {
  font-size: 2rem;
  flex: 1;
}
.messages .board {
  flex: 1;
  border: 1px solid black;
}
</style>
