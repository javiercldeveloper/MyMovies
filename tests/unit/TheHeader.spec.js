import { shallowMount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader'

describe('TheHeader Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(TheHeader, {
      stubs: ['router-link']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('TheHeader')
  })

  test('Should render a header with class header', () => {
    expect(wrapper.find('header.header').exists()).toBe(true)
  })

  test('Should render a div with class header__inner', () => {
    expect(wrapper.find('div.header__inner').exists()).toBe(true)
  })

  test('Should render three router links', () => {
    expect(wrapper.findAll('router-link-stub').length).toBe(3)
  })

  test('Should render the Logo as a router link', () => {
    expect(wrapper.find('router-link-stub.logo').exists()).toBe(true)
  })

  test('Should render one nav item', () => {
    expect(wrapper.findAll('nav').length).toBe(1)
  })

  test('Should render two images in the nav elements', () => {
    expect(wrapper.findAll('img').length).toBe(2)
  })
})
