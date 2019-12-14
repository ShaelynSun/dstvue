/* eslint-disable no-undef */
describe('dstVueTest-Stories', function () {
  before(() => {
    cy.visit('http://localhost:8080/#/signin')
    cy.get('#app1 > div > form > div > input')
      .type('sxy')
    cy.get('#app1 > div > form > div > p > input')
      .type('123')
    cy.get('#app1 > div > form > div > button.btn.btn-primary.btn1').click()
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(2) > a').click()
  })
  // after( () =>{
  //   cy.get('#nav_collapse > ul.navbar-nav.ml-auto > li:nth-child(4) > a > i').click()
  // })
  // eslint-disable-next-line no-undef
  it('Stories page', function () {
    // eslint-disable-next-line no-undef
    cy.get('#app1 > h3').should('contain', 'Stories')
    // cy.get('#app1 > div > div.table-responsive > table > tbody').find('tr').should(($tr) => {
    //   expect($tr).to.have.length(5)
    // })
    //    cy.get('#app1 > div > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(9) > a').click()
    cy.get('#app1 > div > div.table-responsive > table > tbody > tr:nth-child(1)')
      .should('contain', 'a weird baby')
    cy.get('#app1 > div > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(11) > a').click()
    cy.url().should('include', 'edit')
    cy.get('#type').select('Myth')
    cy.get('#classes').select('Chinese')
    cy.get('#app > div > div > div > div > form > div:nth-child(4) > input').type('a')
    cy.get('#app > div > div > div > div > form > p > button').click()
    cy.get('#app > div > div > div > div > form > p.typo__p').should('contain', 'Get your story!')
    cy.get('#nav_collapse > ul:nth-child(1) > li:nth-child(2) > a').click()
    cy.get('#app1 > div > div.table-responsive > table > tbody > tr:nth-child(2) > td:nth-child(12) > a').click()

    cy.get('#swal2-title').should('contain', 'Are you totaly sure?')
    cy.get('body > div.swal2-container.swal2-fade.swal2-shown > div > div.swal2-buttonswrapper > button.swal2-confirm.swal2-styled').click()
    cy.get('#swal2-title').should('contain', 'Deleted')
    cy.get('body > div.swal2-container.swal2-fade.swal2-shown > div > div.swal2-buttonswrapper > button.swal2-confirm.swal2-styled').click()
    cy.get('#app1 > div > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(12) > a').click()
    cy.get('body > div.swal2-container.swal2-fade.swal2-shown > div > div.swal2-buttonswrapper > button.swal2-cancel.swal2-styled').click()

    cy.screenshot()
  })
})
