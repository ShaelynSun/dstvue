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
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(5) > a').click()
  })
  // after( () =>{
  //   cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(4) > a > i').click()
  // })
  // eslint-disable-next-line no-undef
  it('Comments page', function () {
    cy.get('#app1 > h3').should('contain', 'Add Comments')
    cy.get('#app1 > form > div:nth-child(1) > input').type('5df46280531ffc0ef9580b5f')
    cy.get('#app1 > form > div:nth-child(2) > input').type('wow')
    cy.get('#app1 > form > div.error').should('be.visible')
    cy.get('#app1 > form > div:nth-child(2) > input').type('wowwowowow')
    cy.get('#app1 > form > p > button').click()
    cy.get('#app1 > form > p.typo__p').should('contain', 'Add successful!')
    cy.screenshot()
  })
})
