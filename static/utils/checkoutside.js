Vue.directive("clickoutside", {
  bind: function(el, binding, vnode) {
    function documentHandler(event) {
      console.log(event);
      if (el.contains(event.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(event);
      }
      el.__vueClickOutSide__ = documentHandler;
      document.addEventListener("click", documentHandler);
    }
  },
  unbind: function(el, binding) {
    document.removeEventListener("click", el.__vueClickOutSide__);
    delete el.__vueClickOutSide__;
  },
});
