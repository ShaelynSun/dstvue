describe('dstVueTest-Register', function () {
  before( () => {
    cy.visit('http://localhost:8080/#/signin')
    cy.get('#app1 > div > form > div > input')
      .type('sxy')
    cy.get('#app1 > div > form > div > p > input')
      .type('123')
    cy.get('#app1 > div > form > div > button.btn.btn-primary.btn1').click()
  })
  after( () => {
    cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(4) > a > i').click()
  })
  it('User Sign in', function () {
    cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(2) > a').click()
    cy.get('#app1 > h4').should('contain', 'Welcome sxy')
    cy.screenshot()
  })
})
