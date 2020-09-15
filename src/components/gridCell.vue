<template>
  <div v-bind:style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "grid-cell",
  props: {
    span: {
      type: [Number],
      default: 1,
    },
    offset: {
      type: Number,
      default: 0,
    },
    gutter: {
      type: String,
      default: "2px",
    },
  },
  data() {
    return {
      styleObject: {
        "grid-column": this.offset + "/" + (this.offset + this.span),
        display: "flex",
        "justify-content": "center",
        "align-content": "center",
        "justify-items": "center",
        "align-items": "center",
        background: "red",
        "border-radius": "5%",
      },
    };
  },
  mounted: function() {
    // console.log(this.styleObject);
    // console.log(this.offset, this.span);
    // console.log(this.styleObject["grid-column"]);
  },
};
</script>
