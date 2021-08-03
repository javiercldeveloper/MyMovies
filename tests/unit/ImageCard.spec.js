import { shallowMount } from '@vue/test-utils'
import ImageCard from '@/components/ImageCard'

describe('ImageCard Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ImageCard, {
      propsData: {
        item: {
          id: 1,
          title: 'Película',
          resource: 'popular'
        },
        isCategoryItem: true
      },
      stubs: ['router-link']
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('ImageCard')
  })

  test('Should render a li with class image-card', () => {
    expect(wrapper.find('li.image-card').exists()).toBe(true)
  })

  test('Should render a div with class image-card__body', () => {
    expect(wrapper.find('div.image-card__body').exists()).toBe(true)
  })

  test('Should render a span with class image-card__body-title', () => {
    expect(wrapper.find('span.image-card__body-title').exists()).toBe(true)
  })

  test('If item has a title should be rendered in the span', () => {
    expect(wrapper.find('span.image-card__body-title').text()).toBe('Película')
  })

  test('If item does not have a title should render the default one', async () => {
    wrapper.setProps({
      item: {
        id: 1
      }
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.find('span.image-card__body-title').text()).toBe('Titulo no disponible')
  })

  test('If is a category item the route should redirect to the item category', () => {
    expect(wrapper.vm.route.name).toBe('Category')
    expect(wrapper.vm.route.params.category).toBe('popular')
  })
  test('If is a movie item the route should redirect to the movie detail page', async () => {
    wrapper.setProps({
      item: {
        id: 1
      },
      isCategoryItem: false
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.route.name).toBe('Movie')
    expect(wrapper.vm.route.params.movieId).toBe(1)
  })
})
