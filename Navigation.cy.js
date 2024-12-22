class Navigation{
  url_login(){
    cy.visit('https://practicesoftwaretesting.com/')
  }
  MainMenu(){
    cy.contains('[class="nav-link active"]').should('be.visible','Home');
    cy.contains('[class="nav-link dropdown-toggle"]').should('be.visible',' Categories ');
    cy.contains('[data-test="nav-contact"]').should('be.visible','Contact');
    cy.contains('[data-test="nav-sign-in"]').should('be.visible','Sign in');
  }
  footer(){
    cy.contains('(//a[@target="_blank"])[1]').should('be.visible','GitHub repo');
    cy.contains('(//a[@target="_blank"])[2]').should('be.visible',' Support this project');
    cy.contains('(//a[@target="_blank"])[3]').should('be.visible','Privacy Policy');
    cy.contains('(//a[@target="_blank"])[4]').should('be.visible','Barn Images');
    cy.contains('(//a[@target="_blank"])[5]').should('be.visible','Unsplash');


  }
  
}
export default Navigation;