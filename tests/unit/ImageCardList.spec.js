import { shallowMount } from '@vue/test-utils'
import ImageCardList from '@/components/ImageCardList'

describe('ImageCardList Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ImageCardList, {
      propsData: {
        results: []
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('ImageCardList')
  })

  test('Should render a ul with class image-card-grid', () => {
    expect(wrapper.find('ul.image-card-grid').exists()).toBe(true)
  })

  test('The ul should not include image-card-grid--big if twoItemsPerRow prop is false or not included', async () => {
    expect(wrapper.find('ul.image-card-grid--big').exists()).toBe(false)

    wrapper.setProps({
      results: [],
      twoItemsPerRow: false
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('ul.image-card-grid--big').exists()).toBe(false)
  })

  test('The ul should include image-card-grid--big if twoItemsPerRow prop is true', async () => {
    wrapper.setProps({
      results: [],
      twoItemsPerRow: true
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('ul.image-card-grid--big').exists()).toBe(true)
  })
})
