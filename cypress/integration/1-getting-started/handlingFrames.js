import 'cypress-iframe'
describe('Handling Frames', function(){
       it('Frames',function(){
              cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
                //we have to install cypress-iframe 'npm install -D cypress-iframe'
                cy.frameLoaded("#courses-iframe")
                cy.iframe().find("a[href*='mentorship']").eq(0).click()
                //F:\Cypress\node_modules\.bin\cypress
                cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
       })
})