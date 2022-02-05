
import HomePage from '../PageObject/HomePage'
import ProductsPage from '../PageObject/ProductsPage'

describe('framework start',function(){

       before(function(){
              //runs pnce before all the it block
              //fixture is a mthod for accessing files in fixture, we have to resolve the promise 
              cy.fixture('example').then(function(data){
                     this.data=data;
              })


           

       })
       it('frameowrk start',function(){
             const homePage= new HomePage()
             const productPage=new ProductsPage()
              cy.visit("https://rahulshettyacademy.com/angularpractice/")
              homePage.getEditBox().type(this.data.name)
              homePage.getGenderDropDown().select(this.data.gender)
              homePage.getTwoWayDataBinding().should('have.value',this.data.name)
              //validating attribute 
              homePage.getEditBox().should('have.attr','minlength','2')
              homePage.getRadioButton().should('be.disabled')

              //click shop tab
             homePage.getShopTab().click()
              this.data.products.forEach(element => {
                     cy.selectProduct(element)
              });
              // cy.selectProduct('Black')
              // cy.selectProduct('Nokia')
              productPage.getProductsButton().click()

              




       })


})