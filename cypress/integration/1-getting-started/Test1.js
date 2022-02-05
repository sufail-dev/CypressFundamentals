
/// <referece types="Cypress"/>
/// <reference types="Cypress" />

describe('My first test suite',function(){
       it('My first test case',function(){
              cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
              cy.get('.search-keyword').type('ca');
              cy.wait(2000);
              cy.get('.product:visible').should('have.length',4);
              //parent - child chaining
              cy.get('.products').find('.product').should('have.length',4);
              //selecting second product
            //  cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
              cy.get('.products').find('.product').each(
                            ($el,index,$list)=>{
                                  const name= $el.find('h4.product-name').text()
                                  if(name.includes("Cashews")){
                                        cy.wrap($el).find('button').click();
                                  }
                            }


              )
              cy.get('.brand').then(function(logtext){
                     cy.log(logtext.text())
              })

              
             
       })
       
})