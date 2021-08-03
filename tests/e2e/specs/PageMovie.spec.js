describe('Page Movie Test', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/movie/497698**', 'fixture:movie/movie.json').as('movieApi')
    cy.visit('/movie/497698')
    cy.wait('@movieApi')
  })

  it('Should render a button to add to the cart', () => {
    cy.get('button').should('exist')
  })
  it('Should add movie to the cart on button click', () => {
    cy.get('button').click()
    cy.get('span.badge').should('exist')
  })
  it('Should remove movie from the cart on button click', () => {
    cy.server()
    cy.route('GET', '**/movie/497698**', 'fixture:movie/movie.json').as('movieApi')
    cy.visit('/movie/497698')
    cy.wait('@movieApi')
    cy.get('button').click()
    cy.get('span.badge').should('exist')
    cy.get('button').click()
    cy.get('span.badge').should('not.exist')
  })
})
