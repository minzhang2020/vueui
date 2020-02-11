import { shallowMount } from '@vue/test-utils'
import Row from '@/components/row/src/row.js'

describe('Row组件测试', () => {
  const wrapper = shallowMount(Row, {
    propsData: {
      type: 'flex',
      justify: 'start',
      align: 'top',
      direction: 'column',
      gutter: 15
    }
  })
  const tag = 'header'
  const headerWrapper = shallowMount(Row, {
    propsData: {
      tag
    }
  })
  it('Tag默认是div', () => {
    expect(wrapper.element.tagName.toLocaleLowerCase()).toBe('div')
  })
  it('修改tag为header', () => {
    expect(headerWrapper.element.tagName.toLocaleLowerCase()).toBe(tag)
  })
  it('设置type为flex', () => {
    expect(wrapper.classes('vu-row-flex')).toBe(true)
  })
  it('设置justify,align,direction', () => {
    expect(wrapper.classes('vu-row-flex-start')).toBe(true)
    expect(wrapper.classes('vu-row-flex-top')).toBe(true)
    expect(wrapper.classes('vu-row-flex-column')).toBe(true)
  })
  it('设置gutter', () => {
    expect(wrapper.element.style.marginLeft).toBe('-7.5px')
  })
})
