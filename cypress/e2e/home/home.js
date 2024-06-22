import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the home page', ()=>{
    cy.log('Visiting home page');
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  });

When('I click make appointment button', ()=>{
    cy.log('Clicking make appointment button');
    cy.get('a#btn-make-appointment').click();
})
  
Then('I should see the login page', ()=>{
    cy.log('Checking if redirected to login page');
    cy.url().should('include', 'https://katalon-demo-cura.herokuapp.com/profile.php#login');
  });