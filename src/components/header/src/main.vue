<template lang="">
  <header class="vu-header" :style="{height}" >
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'VuHeader',
  componentName: 'VuHeader',
  props: {
    height: String,
    default: '60px'
  }
}
</script>
