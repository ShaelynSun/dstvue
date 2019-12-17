// eslint-disable-next-line no-undef
describe('dstVueTest-Home', function () {
  // eslint-disable-next-line no-undef
  it('Home page', function () {
    cy.visit('http://localhost:8080/')
    cy.title().should('contain', 'dst')
    // eslint-disable-next-line no-undef
    cy.contains('Do you have anything to share ?')
    // eslint-disable-next-line no-undef
    cy.get('#app > nav').contains('Register')
    cy.get('#app > div > h2').contains('Dynamic Story Telling')
    cy.get('#app > div > table > tr > td:nth-child(1) > p.lead')
      .contains('Do you have anything to share ?')
    cy.get('#app > div > table > tr > td:nth-child(1) > p:nth-child(3) > a').click()
    cy.url().should('include', 'stories')
    cy.screenshot()
  })
  // eslint-disable-next-line no-undef
  it('Top-bar', function () {
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(2) > a').click()
    cy.url().should('include', 'stories')
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(4) > a').click()
    cy.url().should('include', 'comments')
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(6) > a').click()
    cy.url().should('include', 'map')
    cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(1) > a').click()
    cy.url().get('#app > div > h3')
      .should('contain', 'Register')
    cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(3) > a').click()
    cy.url().get('#app1 > div > h3')
      .should('contain', 'Signin')
    cy.screenshot()
  })
})
