<template>
  <aside class="vu-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'VuAside',
  componentName: 'VuAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>
