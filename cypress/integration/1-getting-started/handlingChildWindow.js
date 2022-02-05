describe('Handling Child window', function(){
       it('Child Window',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

              //Grab the attribute value - choose prop()
              cy.get('#opentab').then(function(el){
                     const url=el.prop('href');
                     cy.visit(url)
              })
              
       })
})