

describe('Handling Static dropdowns', function(){
       it('static dropdown',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
          //in select argument it is checking whether option2 matching value
          cy.get('select').select('option2').should('have.value','option2') 
       
             
       })
})