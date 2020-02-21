<template>
  <i :class="`vu-icon-${name}`"></i>
</template>
<script>
export default {
  name: 'VuIcon',
  props: {
    name: String
  }
}
</script>
