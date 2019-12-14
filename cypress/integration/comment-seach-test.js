// eslint-disable-next-line no-undef
describe('dstVueTest-Stories', function () {
  // eslint-disable-next-line no-undef
  before(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/#/signin')
    // eslint-disable-next-line no-undef
    cy.get('#app1 > div > form > div > input')
      .type('sxy')
    // eslint-disable-next-line no-undef
    cy.get('#app1 > div > form > div > p > input')
      .type('123')
    // eslint-disable-next-line no-undef
    cy.get('#app1 > div > form > div > button.btn.btn-primary.btn1').click()
    // eslint-disable-next-line no-undef
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(4) > a').click()
  })
  // eslint-disable-next-line no-undef
  it('Comments page', function () {
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(4) > a').click()
    // eslint-disable-next-line no-undef
    cy.get('#app2 > h3')
      .should('contain', 'Search for comments')
    // eslint-disable-next-line no-undef
    cy.get('#app2 > div').find('col')
      .should(($col) => {
        // eslint-disable-next-line no-undef
        expect($col).to.have.length(0)
      })
    // eslint-disable-next-line no-undef
    cy.get('#app2 > form > div > input')
      .type('5df46280531ffc0ef9580b5e')
    // eslint-disable-next-line no-undef
    cy.get('#app2 > form > div > button').click()
    // eslint-disable-next-line no-undef
    cy.url().should('include', 'comments')
    // eslint-disable-next-line no-undef
    cy.screenshot()
  })
})
