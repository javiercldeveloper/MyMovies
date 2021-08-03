import { shallowMount } from '@vue/test-utils'
import ImageFromServer from '@/components/ImageFromServer'

describe('ImageFromServer Test', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ImageFromServer, {
      propsData: {
        item: {
          poster_path: 'mock.jpg',
          title: 'Titulo'
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('Name of the component matches its file name', () => {
    expect(wrapper.vm.$options.name).toMatch('ImageFromServer')
  })

  test('Should render an img with class image-from-server', () => {
    expect(wrapper.find('img.image-from-server').exists()).toBe(true)
  })

  test('Should use item image if has poster_path', () => {
    expect(wrapper.find('img').element.src).toContain('mock.jpg')
  })
  describe('If item has no poster_path', () => {
    test('Should use default image src', async () => {
      wrapper.setProps({
        item: {
          title: 'Titulo'
        }
      })
      await wrapper.vm.$nextTick()

      expect(wrapper.find('img').element.src).toContain('no-image.png')
    })

    test('Should render an img with class image-from-server--no-image', async () => {
      wrapper.setProps({
        item: {
          title: 'Titulo'
        }
      })
      await wrapper.vm.$nextTick()

      expect(wrapper.find('img.image-from-server--no-image').exists()).toBe(true)
    })

    test('Should render an img with class movie-detail-page if is movieDetailPage', async () => {
      wrapper.setProps({
        item: {
          title: 'Titulo'
        },
        movieDetailPage: true
      })
      await wrapper.vm.$nextTick()

      expect(wrapper.find('img.movie-detail-page').exists()).toBe(true)
    })
  })
})
