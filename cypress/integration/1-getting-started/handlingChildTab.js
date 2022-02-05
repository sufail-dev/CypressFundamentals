const { should } = require("chai");

describe('Handling Static dropdowns', function(){
       it('static dropdown',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//cypress has no knowledge about child windows
//we need to delete target attribute(removing the attribute)
//.invoke()-invoking jquery functions
//we need to open it in the same page ,so we need to remove target attribute
cy.get('#opentab').invoke('removeAttr','target').click()//removeAttr is a jquery method to remove attribute
//Navigating to backward , we will use cy.go()
cy.go('back')

//to get the current url

cy.url().should('include','qaclicacademy')

       })
})