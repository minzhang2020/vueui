const justifyProps = ['start', 'end', 'center', 'space-around', 'space-between']
const alignProps = ['top', 'middle', 'bottom']
const directionProps = ['row', 'row-reverse', 'column', 'column-reverse']
const prefixCls = 'vu-row'
export default {
  name: 'vuRow',
  props: {
    gutter: Number,
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      type: String,
      validator(value) {
        return ['flex'].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      validator(value) {
        return justifyProps.indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      validator(value) {
        return alignProps.indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      validator(value) {
        return directionProps.indexOf(value) !== -1
      }
    }
  },
  computed: {
    styles() {
      const style = {}
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`
        style.marginRight = style.marginLeft
      }
      return style
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          prefixCls,
          {
            [`${prefixCls}-flex`]: !!this.type,
            [`${prefixCls}-flex-${this.align}`]: !!this.align,
            [`${prefixCls}-flex-${this.justify}`]: !!this.justify,
            [`${prefixCls}-flex-${this.direction}`]: !!this.direction
          }
        ],
        style: this.styles
      },
      this.$slots.default
    )
  }
}
