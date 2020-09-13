import Vue from "vue";

Vue.directive("drag", {
  inserted: function(el) {
    el.style.position = "absolute";
    el.onmousedown = function(e) {
      document.onmousemove = function(e) {
        console.log(el);
        console.log(e);
        let left = e.clientX - el.clientWidth / 2;
        let top = e.clientY - el.clientHeight / 2;
        el.style.left = left + "px";
        el.style.top = top + "px";
      };
      el.onmouseup = function() {
        document.onmousemove = null;
        el.onmouseup = null;
      };
    };
  },
  updated() {
    console.log("update");
  },
});
