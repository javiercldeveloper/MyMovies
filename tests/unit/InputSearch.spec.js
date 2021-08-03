import { shallowMount } from '@vue/test-utils'
import InputSearch from '@/components/InputSearch'

describe('InputSearch Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(InputSearch)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('InputSearch')
  })

  test('Should render a div with class search__box', () => {
    expect(wrapper.find('div.search__box').exists()).toBe(true)
  })

  test('Should render an input with class search__input', () => {
    expect(wrapper.find('input.search__input').exists()).toBe(true)
  })

  test('Should receive inputs event debounced', done => {
    wrapper.vm.$on('input', inputValue => {
      expect(inputValue).toBe('querys')
      done()
    })
    wrapper.vm.sendInputValue({ target: { value: 'query' } })
    wrapper.vm.sendInputValue({ target: { value: 'querys' } })
  })

  test('should receive multiple input events if debounce time is exceeded', done => {
    const inputValues = ['query', 'querys']
    let inputCalls = 0

    wrapper.vm.$on('input', inputValue => {
      expect(inputValue).toBe(inputValues[inputCalls])
      if (inputCalls === 1) {
        done()
      }
      inputCalls++
    })
    wrapper.vm.sendInputValue({ target: { value: inputValues[0] } })
    setTimeout(() => {
      wrapper.vm.sendInputValue({ target: { value: inputValues[1] } })
    }, 650)
  })
})
