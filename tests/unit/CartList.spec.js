import { shallowMount } from '@vue/test-utils'
import CartList from '@/components/CartList'

describe('CartList Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(CartList, {
      propsData: {
        items: [
          {
            id: 1,
            title: 'Película'
          }
        ]
      },
      stubs: ['router-link']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('CartList')
  })

  test('Should render an ul with class cart-list', () => {
    expect(wrapper.find('ul.cart-list').exists()).toBe(true)
  })

  describe('If items prop is not empty', () => {
    test('li elements should have class cart-list__item', () => {
      expect(wrapper.find('li').attributes().class).toContain('cart-list__item')
    })
    test('There must be a router link with class cart-list__item__details', () => {
      expect(wrapper.find('router-link-stub').attributes().class).toContain('cart-list__item__details')
    })
    test('There must be a p with class cart-list__item__title with the item title inside', () => {
      expect(wrapper.find('p.cart-list__item__title').exists()).toBe(true)
      expect(wrapper.find('p.cart-list__item__title').text()).toEqual('Película')
    })
    test('There must be a div with class cart-list__item__remove-button', () => {
      expect(wrapper.find('div.cart-list__item__remove-button').exists()).toBe(true)
    })
    test('There must be an img with the remove icon', () => {
      expect(wrapper.find('img').attributes().src).toContain('remove.svg')
    })
  })

  test('If items prop is an empty array no li items should be rendered', async () => {
    wrapper.setProps({
      items: []
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('li').length).toBe(0)
  })

  test('Should emit a removeItem event with the itemId when removeFromCart is triggered', async () => {
    await wrapper.vm.removeFromCart(2)
    expect(wrapper.emitted().removeItem[0][0]).toBe(2)
  })
})
