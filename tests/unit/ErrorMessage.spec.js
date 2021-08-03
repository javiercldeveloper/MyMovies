import { shallowMount } from '@vue/test-utils'
import ErrorMessage from '@/components/ErrorMessage'

describe('ErrorMessage Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ErrorMessage, {
      propsData: {
        message: 'hello'
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('ErrorMessage')
  })

  test('A div with class error-container should be rendered', () => {
    expect(wrapper.find('div.error-container').exists()).toBe(true)
  })

  test('The error message prop should be rendered in the paragraph', () => {
    expect(wrapper.find('p').text()).toBe('hello')
  })
})
