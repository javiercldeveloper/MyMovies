describe('PageCategory Test', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/now_playing**', 'fixture:home/nowPlaying.json').as('now_playing')
    cy.visit('/category/now_playing')
    cy.wait('@now_playing')
  })

  it('Should render the HeroSection', () => {
    cy.contains('p.hero-subtitle', 'Selecciona tu favorita')
  })

  it('Should show some results on page load', () => {
    cy.get('.image-card-grid > li').should('exist')
  })

  it('Should send to movie detail page if clicked on item', () => {
    cy.get('li').first().click()
    cy.url().should('include', '/movie/')
  })
})
