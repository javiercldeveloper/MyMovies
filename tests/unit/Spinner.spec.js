import { shallowMount } from '@vue/test-utils'
import Spinner from '@/components/Spinner'

describe('Spinner Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Spinner)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('Spinner')
  })

  test('Should render a div with class spinner__container', () => {
    expect(wrapper.find('div.spinner__container').exists()).toBe(true)
  })

  test('Should render a div with class spinner__image', () => {
    expect(wrapper.find('div.spinner__image').exists()).toBe(true)
  })
})
