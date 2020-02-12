export default {
  name: 'VuCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'VuRow') {
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0
    }
  },
  render(h) {
    const classList = []
    const style = {}
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }
    const arr = ['span', 'offset']
    arr.forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(prop !== 'span' ? `vu-col-${prop}-${this[prop]}` : `vu-col-${this[prop]}`)
      }
    })
    const sizes = ['sm', 'md', 'lg', 'xl']
    sizes.forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`vu-col-${size}-${this[size]}`)
      } else if (typeof this[size] === 'object') {
        const props = this[size]
        Object.keys(props).forEach(prop => {
          classList.push(prop !== 'span' ? `vu-col-${size}-${prop}-${props[prop]}` : `vu-col-${size}-${props[prop]}`)
        })
      }
    })
    return h(
      this.tag,
      {
        class: ['vu-col', classList],
        style
      },
      this.$slots.default
    )
  }
}
