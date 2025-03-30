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
        cy.open_web_page()  
    })

    context('Shopping directly by product home page', { tags: ['success'] }, () => {
        it('Buying backpack product', () => {    
            cy.login(loginData.username, loginData.password)  
            cy.add_product_to_cart() 
            cy.open_cart()
            cy.go_to_checkout()
            cy.fill_checkout_info(shoppingData.firstName, shoppingData.lastName, shoppingData.zipCode)
            cy.finish_shopping()
          })         
    })    

    context('Shopping from a specific product page', { tags: ['success'] }, () => {
        it('Buying backpack product', () => {     
            cy.login(loginData.username, loginData.password)  
            cy.open_item_description_page()
            cy.add_product_to_cart_from_single_item()
            cy.open_cart()
            cy.go_to_checkout()
            cy.fill_checkout_info(shoppingData.firstName, shoppingData.lastName, shoppingData.zipCode)
            cy.finish_shopping()
          })         
    })
  })