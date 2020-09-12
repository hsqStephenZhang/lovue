<template>
  <div>
    <slot name="withdata" v-for="item in list" :item-name="item"></slot>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
};
</script>
