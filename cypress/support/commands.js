import loginPageElements from '../support/pageObjects/loginPage.js';
import cartPageElements from './pageObjects/cartPage.js';
import checkoutPageElements from './pageObjects/checkoutPage.js';
import productPageElements from './pageObjects/productPage.js';
import specificProductPage from './pageObjects/productSpecificationPage.js';

Cypress.Commands.add('open_web_page', () => {
    cy.visit('/')
    cy.get(loginPageElements.loginPageMainLogo).should('be.visible')
})

Cypress.Commands.add('login', (email, password) => { 
    cy.get(loginPageElements.usernameInput).type(email)
    cy.get(loginPageElements.passwordInput).type(password)
    cy.get(loginPageElements.loginButton).click()
    cy.get(productPageElements.productPageLogo).should('be.visible')
})

Cypress.Commands.add('add_product_to_cart', () => {
    cy.get(productPageElements.addToCartButtonBackPack).click()
    cy.get(productPageElements.shoppingCartBadge).should('have.text','1')
    cy.get(productPageElements.removeBackPackProduct).should('be.visible')
})

Cypress.Commands.add('open_item_description_page', () => {
    cy.get(productPageElements.backPackItemLink).click()
    cy.get(specificProductPage.productImg).should('be.visible')
    cy.get(specificProductPage.addToCartBtn).should('be.visible')
})

Cypress.Commands.add('add_product_to_cart_from_single_item', () => {
    cy.get(specificProductPage.addToCartBtn).click()
    cy.get(productPageElements.shoppingCartBadge).should('have.text','1')
    cy.get(specificProductPage.removeCartBtn).should('be.visible')
})

Cypress.Commands.add('open_cart', () => {
    cy.get(productPageElements.cartBtn).click()
    cy.get(cartPageElements.cartPageTitle).should('have.text', 'Your Cart')
    cy.get(cartPageElements.shoppingProductName).should('be.visible')
    cy.get(cartPageElements.continueShoppingBtn).should('be.visible')
    cy.get(cartPageElements.checkoutBtn).should('be.visible')
})

Cypress.Commands.add('go_to_checkout', () => {
    cy.get(cartPageElements.checkoutBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Your Information')
    cy.get(checkoutPageElements.checkoutCancelBtn).should('be.visible')
    cy.get(checkoutPageElements.checkoutContinueBtn).should('be.visible')
})

Cypress.Commands.add('fill_checkout_info', (firstName, lastName, zipCode) => {
    cy.get(checkoutPageElements.checkoutFirstName).type(firstName)
    cy.get(checkoutPageElements.checkoutLastName).type(lastName)
    cy.get(checkoutPageElements.checkoutZipCode).type(zipCode)
    cy.get(checkoutPageElements.checkoutContinueBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Overview')
    cy.get(checkoutPageElements.checkoutItemName).should('be.visible')
})

Cypress.Commands.add('finish_shopping', () => {
    cy.get(checkoutPageElements.checkoutFinishBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Complete!')
    cy.get(checkoutPageElements.checkoutFinishedMsg).should('have.text', 'Thank you for your order!')
    cy.get(checkoutPageElements.checkoutFinishedImg).should('be.visible')
    cy.get(checkoutPageElements.checkoutBackHomeBtn).should('be.visible')
})



