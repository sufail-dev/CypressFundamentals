describe('Handling Static dropdowns', function(){
       it('static dropdown',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
              cy.get('#alertbtn').click()
              cy.get('[value="Confirm"]').click()
// to get text from alert cypress not providing anything
//to fire event we use window:alert
cy.on('window:alert',(str)=>{
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

//confirm alert
cy.on('window:confirm',(str)=>{
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

       })
})