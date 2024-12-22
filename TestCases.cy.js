import Login from "../support/PageObjectModel/Login.cy";
import link from "../support/PageObjectModel/Link.cy";
import Categories from "../support/PageObjectModel/Categories.cy";
import ContactPage from "../support/PageObjectModel/ContactPage.cy";
import Navigation from "../support/PageObjectModel/Navigation.cy";
import Validation from "../support/PageObjectModel/ContentValidation.cy";
describe('',()=>{
  const login1=new Login();
  const Categorie1=new  Categories();
  const Contact1=new ContactPage();
  const Validation1=new Validation();
  const Nav=new Navigation();
  const link1=new link();
  it('',()=>{
    login1.url_login();
    login1.ValidCredentials();
    login1.InValidCredentials();
  })
  it('',()=>{
    Categorie1.url_login();
    Categorie1.CategorieAndFilter();
  })
  it('',()=>{
    Contact1.url_login();
    Contact1. InCorrect();
    Contact1. Correct();
  })
  it('',()=>{
    Validation1.url_login();
    Validation1. title();
    Validation1. img();
    Validation1. price();
  })
  it('',()=>{
    Nav.url_login();
    Nav.MainMenu();
  })
  
  
  
})
