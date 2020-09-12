<template>
  <div></div>
</template>

<script>
export default {
  name: "table-item",
  props: {
    columns: {
      type: Array,
      required: true,
      default: function() {
        return [];
      },
    },
  },
};
</script>
