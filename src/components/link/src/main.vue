<template>
  <a :href="disabled ? null : href" v-bind="$attrs" @click="handleClick" :class="classes">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>
    <template v-if="$slots.icon">
      <slot v-if="$slots.icon" name="icon"></slot>
    </template>
  </a>
</template>
<script>
export default {
  name: 'VuLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  computed: {
    classes() {
      return ['vu-link', this.type ? `vu-link--${this.type}` : '', this.disabled && 'is-disabled', this.underline && !this.disabled && 'is-underline']
    }
  },
  methods: {
    handleClick(evt) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', evt)
        }
      }
    }
  }
}
</script>
