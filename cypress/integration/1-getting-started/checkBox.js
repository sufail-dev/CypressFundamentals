describe('UI Elements Check',function(){
       it('ChecBox Check', function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
              //mltiple should can use by using .and
              cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
              //uncheck
              cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
              //to check all 
              cy.get('input[type="checkbox"]').check(['option2','option3'])
              


       })




})