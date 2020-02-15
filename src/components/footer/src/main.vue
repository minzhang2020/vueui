<template lang="">
  <footer class="vu-footer" :style="{height}" >
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'VuFooter',
  componentName: 'VuFooter',
  props: {
    height: String,
    default: '60px'
  }
}
</script>
