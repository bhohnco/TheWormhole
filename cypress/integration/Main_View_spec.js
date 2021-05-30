describe('Show main view of Worm Hole App', () => {

  beforeEach(() => {
    cy.fixture('mock-topArtist-stubbing-data.json')
      .then(mockTopArtists => {
        cy.intercept('GET', 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json', {
          statusCode: 200,
          delay: 100,
          body: mockTopArtists
        })
      })

    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display title on main page view', () => {
    cy.get('.glow').should('contain', 'W o r m h o l e')
  })

  it('Should show a randomization of countries selected button on load', () => {
    cy.get('.random-location').should('contain', 'Randomize Music Location')
  })

})
