import Row from '@/components/row'
import Col from '@/components/col'

const components = [Row, Col]

const install = function(Vue, options) {
  Object.keys(components).forEach(c => {
    Vue.component(c.name, c)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.vue) {
  install(window.vue)
}

export default {
  install,
  ...components
}
