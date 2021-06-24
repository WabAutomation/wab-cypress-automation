
it('Open facebook login page', () => {
   cy.visit('https://www.westernalliancebancorporation.com/');
  })

it('Login cypress as a user', function() {
  cy.get('#main-menu > li:nth-child(1) > a').trigger('mouseover')
    cy.get('.btn-provider-google').click();
    cy.visit(Cypress.env('gmailSignInUrl'))
    cy.get('#email').type('wabdemoacct@gmail.com');
    cy.get('#identifierNext').click();
    cy.get('#pass').type('Wabqademo2021');
    cy.get('#passwordNext').click();
  })



 


  