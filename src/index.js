import Row from '@/components/row'
import Col from '@/components/col'
import Container from '@/components/container'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Aside from '@/components/aside'
import Main from '@/components/main'

const components = [Row, Col, Container, Header, Footer, Aside, Main]

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
