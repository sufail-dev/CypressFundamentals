class HomePage{
       getEditBox(){
              return cy.get('form input[name="name"]')
       }
       getTwoWayDataBinding(){
              return cy.get('h4 input[name="name"]')
       }
       getGenderDropDown(){
              return  cy.get('select')
       }
       getRadioButton(){
              return cy.get('#inlineRadio3')
       }
       getShopTab(){
              return  cy.get(' li:nth-child(2)')
       }




}
export default HomePage;