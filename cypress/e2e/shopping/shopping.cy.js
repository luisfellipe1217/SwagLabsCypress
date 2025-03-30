///<reference types='cypress'/>

describe('SwagLabs Shopping Validation', { tags: ['login'] }, () => {
    
    let shoppingData
    let loginData

    beforeEach("loading and accessing fixtures", function () {
        cy.fixture('shoppingData').then((shoppingJson) => {
            shoppingData = shoppingJson
        })

        cy.fixture('loginData').then((loginJson) => {
            loginData = loginJson
        })
        cy.clearAllLocalStorage()  
        cy.openWebPage()  
    })

    context('Shopping directly by product home page', { tags: ['success'] }, () => {
        it('Buying backpack product', () => {    
            cy.login(loginData.username, loginData.password)  
            cy.addProductToCart() 
            cy.openCart()
            cy.goToCheckout()
            cy.fillCheckoutInfo(shoppingData.firstName, shoppingData.lastName, shoppingData.zipCode)
            cy.finishShopping()
          })         
    })    

    context('Shopping from a specific product page', { tags: ['success'] }, () => {
        it('Buying backpack product', () => {     
            cy.login(loginData.username, loginData.password)  
            cy.openItemDescriptionPage()
            cy.addProductToCartFromSingleItem()
            cy.openCart()
            cy.goToCheckout()
            cy.fillCheckoutInfo(shoppingData.firstName, shoppingData.lastName, shoppingData.zipCode)
            cy.finishShopping()
          })         
    })
  })