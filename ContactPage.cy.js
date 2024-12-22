class ContactPage{
  url_login(){
    cy.visit('https://practicesoftwaretesting.com/')
    cy.wait(5000)
  }
 
  InCorrect(){
    cy.contains('Contact').click();
    cy.get('#first_name').type('praveen');
    cy.get('#last_name').type('padav');
    cy.get('#email').type('alok@12345');
    cy.get('#subject').type('Selenium');
    cy.get('#message').type('Alok Mishra ');
    cy.get('[value="Send"]').click();

  }
  Correct(){
    cy.get('#first_name').type('Alok');
    cy.get('#last_name').type('Mishra');
    cy.get('#email').type('alok@54321');
    cy.get('#subject').type('Cypress');
    cy.get('#message').type('Alok mishra');
    cy.get('[value="Send"]').click();
    cy.get('[role="alert"]').should('be.visible','Thanks for your message! We will contact you shortly.');
  }
}
export default ContactPage;