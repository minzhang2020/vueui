<template lang="">
  <section class="vu-container" :class="{'is-vertical':isVertical}" >
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'VuContainer',
  componentName: 'VuContainer',
  props: {
    direction: String,
    validator(value) {
      return ['vertical', 'horizontal'].indexOf(value) !== -1
    }
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === ' horizontal') {
        return false
      } else {
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
              const tag = vnode.componentOptions && vnode.componentOptions.tag
              return tag === 'vu-header' || tag === 'vu-footer'
            })
          : false
      }
    }
  }
}
</script>
