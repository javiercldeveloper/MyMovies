import { shallowMount, createLocalVue } from '@vue/test-utils'
import Badge from '@/components/Badge'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Badge Test', () => {
  let wrapper = null
  const store = new Vuex.Store({
    getters: { cartMoviesIds: () => [2, 3] }
  })

  beforeEach(() => {
    wrapper = shallowMount(Badge, { store, localVue })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('Badge')
  })

  test('A span should be rendered if there are items in the cart', () => {
    expect(wrapper.find('span').exists()).toBe(true)
  })

  test('The number of items in the cart should be rendered if it is not empty', () => {
    expect(wrapper.find('span').text()).toBe('2')
  })

  test('No span should be rendered if there are no items in the cart', async () => {
    const getters = { cartMoviesIds: () => [] }
    store.hotUpdate({ getters })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('span').exists()).toBe(false)
  })
})
