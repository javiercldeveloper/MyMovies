const movie = require('../fixtures/movie/movie.json')

describe('Page Cart Test', () => {
  beforeEach(() => {
    cy.visit('/cart')
  })

  it('Cart is empty if no movies added', () => {
    cy.contains('p', 'No tienes películas guardadas en tu listado.')
  })

  it('Should have movies if added', () => {
    cy.window().then(win => {
      win.__store__.dispatch('addToCart', movie)
    })
    cy.get('li.cart-list__item').should('exist')
  })

  it('Should have no movies if removed', () => {
    cy.window().then(win => {
      win.__store__.dispatch('addToCart', movie)
    })
    cy.get('li.cart-list__item').should('exist')
    cy.get('div.cart-list__item__remove-button').click()
    cy.get('li.cart-list__item').should('not.exist')
  })
})
