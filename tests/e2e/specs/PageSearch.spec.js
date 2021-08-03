describe('PageSearch Test', () => {
  beforeEach(() => {
    cy.visit('/search')
  })
  it('Should contain an input search', () => {
    cy.get("input[type='search']").should('exist')
  })

  it('Should show some results after typing', () => {
    cy.get("input[type='search']").type('a')
    cy.server()
    cy.route('GET', '**/movie**', 'fixture:search/complete.json').as('searchApi')
    cy.wait('@searchApi')
    cy.get('.image-card-grid > li').should('exist')
  })

  it('Should clear results when clearing the input', () => {
    cy.get("input[type='search']").type('a')
    cy.server()
    cy.route('GET', '**/movie**', 'fixture:search/complete.json').as('searchApi')
    cy.wait('@searchApi')
    cy.get('.image-card-grid > li').should('exist')
    cy.get("input[type='search']").clear()
    cy.get('.image-card-grid > li').should('not.exist')
  })

  it('Should show no results when response is empty', () => {
    cy.get("input[type='search']").type('a')
    cy.server()
    cy.route('GET', '**/movie**', 'fixture:search/empty.json').as('searchApi')
    cy.wait('@searchApi')
    cy.contains('No hay resultados')
  })

  it('Should show no more results when next response is empty', () => {
    cy.get("input[type='search']").type('a')
    cy.server()
    cy.route('GET', '**/movie**', 'fixture:search/complete.json')
    cy.scrollTo(0, 4000)
    cy.route('GET', '**page=2**', 'fixture:search/empty.json').as('searchApi')
    cy.wait('@searchApi')
    cy.contains('No hay mas resultados')
  })

  it('Should send to movie detail page if clicked on item', () => {
    cy.get("input[type='search']").type('a')
    cy.server()
    cy.route('GET', '**/movie**', 'fixture:search/complete.json').as('searchApi')
    cy.wait('@searchApi')
    cy.get('li').first().click()
    cy.url().should('include', '/movie/')
  })
})
