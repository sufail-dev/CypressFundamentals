describe('Handling dynamic dropdowns', function(){
       it('Dynamic dropdown',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            cy.get('#autocomplete').type('ind')
            cy.get('.ui-menu-item div').each(
              ($e1,index,$list)=>{

                     if($e1.text()==="india"){
                          cy.wrap($e1).click();
                     }
              }


            )
             
       })
})