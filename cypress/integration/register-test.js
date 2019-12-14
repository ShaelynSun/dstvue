describe('dstVueTest-Register', function () {
  before( () =>{
    cy.visit('http://localhost:8080/#/register')
    cy.get('#app1 > form > div > button.btn2')
      .should('contain', 'To Login')
    cy.get('#app1 > form > div > div > a')
  })
  it('User register', function () {
    cy.get('#app1 > form > div > input')
      .type('CYname1')
    cy.get('#app1 > form > div > p > input')
      .type('CYpsw2')
    cy.get('#app1 > form > div > button.btn.btn-primary.btn1').click()
    cy.get('#app1 > form > div > button.btn2')
      .should('contain', 'Successful! To Login')
    cy.screenshot()
  })
})
