describe('MyMovies ', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/upcoming**', 'fixture:home/upcoming.json').as('upcomingApi')
    cy.route('GET', '**/now_playing**', 'fixture:home/nowPlaying.json').as('now_playing')
    cy.route('GET', '**/popular**', 'fixture:home/popular.json').as('popularApi')
    cy.route('GET', '**/top_rated**', 'fixture:home/topRated.json').as('top_ratedApi')
    cy.visit('/')
    cy.wait(['@upcomingApi', '@now_playing', '@popularApi', '@top_ratedApi'])
  })
  it('Should render the HeroSection', () => {
    cy.contains('h1', 'La película que buscas está aquí')
  })
  it('Should render 4 image cards', () => {
    cy.get('img.image-card__image').should('have.length', 4)
  })
  it('Should render 4 different images', () => {
    const imageSrcArray = []
    cy.get('img.image-card__image').each(($el) => {
      imageSrcArray.push($el[0].src)
    })
      .then(() => {
        const uniqueItems = [...new Set(imageSrcArray)]
        expect(uniqueItems.length).to.equal(4)
      })
  })
  it('Should send to category detail page if clicked on item', () => {
    cy.get('li').first().click()
    cy.url().should('include', '/category/')
  })
})
