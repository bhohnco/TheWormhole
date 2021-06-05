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

  it('Should display a message for the user while the page is loading', () => {
    cy.get('.message').should('contain', 'Page')
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

  it('Should render the drop down component in the form component', () => {
    cy.get('.drop-render').should('contain', 'Select country...')

      .get('form button')
      .find('input[type=text]').should('have.length', 1)

      .get('form').find('button').should('contain', 'Search Artist Library')
  });

  it('Should have a dropdown menu on click', () => {
    cy.get('.control').click()
  });

  it('Should have a smaller title of the top tracks list', () => {
    cy.get('h3').should('contain', 'Top Tracks')
  });

  it('Should open with display of message for UX while top tracks load', () => {
    cy.get('.message-box').should('be.visible')
      .get('p').should('contain', 'Page')
  });

  it('Should load the main view with top tracks country', () => {
    cy.get('.tracks-list').should('be.visible')
      .get('h3').should('have.length', 2)
  });

  it('Should display single block of tracks onto the main view on load', () => {
    cy.get('ol').should('have.length', 1)
  });

  it('Should have a subtitle of the top artists listing', () => {
    cy.get('h3').should('contain', 'Top Artists')
  });

  it('Should load top artitsts onto the main view of the page on load', () => {
    cy.get('ol').should('have.length', 1)
  });

  it('Should display the artists names in a numbered list', () => {
    cy.get('ol>li').should('contain', '')
  });

});
//
// describe('400 error handling message for main page view', () => {
//
//   it('Displays a 404 for UI when the server is down', () => {
//
//     cy.intercept('GET', 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json',
//     {
//       statusCode: 404,
//       delay: 200
//
//     })
//     cy.visit('h2').should('contain', '404: oh no! Nothing in here. We cannot seem to find the page you are looking for')
// });
//
// describe('500 error handling message for main page view', () => {
//
//   it('Displays a 500 specific error message for UI when the server is down', () => {
//
//     cy.intercept('GET', 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=ireland&api_key=18f07debe7c3cfc543178cd9046e1ec4&format=json',
//     {
//       statusCode: 500,
//       delay: 200
//
//     })
//     cy.visit('h2').should('contain', '500: Uhoh, the angry computer gnome just drop kicked one of our servers. This page is temporarily unavailable.')
//   })
// });
//
// });
