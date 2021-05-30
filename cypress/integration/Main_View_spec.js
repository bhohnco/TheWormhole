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
  });

  it('Should be able to visit the main page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display title on main page view', () => {
    cy.get('.glow').should('contain', 'W o r m h o l e')
  });

  it('Should have back lighting to our page title', () => {
    cy.get('.glow').trigger('').should('have.css', 'text-shadow')
  });

  it('Should show go home and randomization of countries selected buttons on load', () => {
    cy.get('.random-location').should('contain', 'Randomize Music Location')

      .get('.go-home').should('contain', 'Return Home')
  });

  it('Should display background image inside the header of the main page', () => {
    cy.get('header').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/night-sky.3ce7405c.jpeg")')
  });

  it('Should display a search form that has a countries dropdown, an input line and search button', () => {
    cy.get('select').select('DROP DOWN').should('have.value', 'dropDown')

      .get('form button')
      .find('input[type=text]').should('have.length', 1)

      .get('form').find('button').should('contain', 'Search Artist Library')
  });

  it('Should load the main view with top tracks on display', () => {
    cy.get('.tracks-list')
      .find('top-track').should('have.length', 0)
  });

})
