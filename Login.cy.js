///<reference types="cypress"/>
class Login{
  url_login(){
    cy.visit('https://practicesoftwaretesting.com/')
  }
 
  InValidCredentials() {
    cy.contains('Sign in').click();
    cy.get('#email').type('mishra@gmail.com');
    cy.get('#password').type('alok@54321');
    cy.get('input[type="submit"]').click();
    cy.get('[class="help-block"]').should('be.visible','Invalid email or password')
    cy.get('.ForgetPwd')
  }
  ValidCredentials() {
    cy.contains('Sign in').click();
    cy.get('#email').type('alokmi2111997@gmail.com');
    cy.get('#password').type('Masai@54321');
    cy.get('input[type="submit"]').click();
  
  }
}
export default Login;

