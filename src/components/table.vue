<template>
  <div></div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
      default: function() {
        return [];
      },
    },
    data: {
      type: Object,
      required: true,
      default: function() {
        return {};
      },
    },
    showhead: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "title",
    },
  },
  filters: {
    captialize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  methods: {},
};
</script>
