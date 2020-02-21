import Row from '@/components/row'
import Col from '@/components/col'
import Container from '@/components/container'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Aside from '@/components/aside'
import Main from '@/components/main'
import Icon from '@/components/icon'
import Button from '@/components/button'
import ButtonGroup from '@/components/button-group'
import Link from '@/components/link'
const components = [Row, Col, Container, Header, Footer, Aside, Main, Icon, Button, ButtonGroup, Link]

const install = function(Vue, options) {
  Object.keys(components).forEach(c => {
    const comp = components[c]
    Vue.component(comp.name, comp)
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
