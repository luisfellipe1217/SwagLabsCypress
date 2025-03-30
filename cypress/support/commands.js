import loginPageElements from '../support/pageObjects/loginPage.js';
import cartPageElements from './pageObjects/cartPage.js';
import checkoutPageElements from './pageObjects/checkoutPage.js';
import productPageElements from './pageObjects/productPage.js';
import specificProductPage from './pageObjects/productSpecificationPage.js';

Cypress.Commands.add('openWebPage', () => {
    cy.visit('/')
    cy.get(loginPageElements.loginPageMainLogo).should('be.visible')
})

Cypress.Commands.add('login', (email, password) => { 
    cy.get(loginPageElements.usernameInput).type(email)
    cy.get(loginPageElements.passwordInput).type(password)
    cy.get(loginPageElements.loginButton).click()
    cy.get(productPageElements.productPageLogo).should('be.visible')
})

Cypress.Commands.add('addProductToCart', () => {
    cy.get(productPageElements.addToCartButtonBackPack).click()
    cy.get(productPageElements.shoppingCartBadge).should('have.text','1')
    cy.get(productPageElements.removeBackPackProduct).should('be.visible')
})

Cypress.Commands.add('openItemDescriptionPage', () => {
    cy.get(productPageElements.backPackItemLink).click()
    cy.get(specificProductPage.productImg).should('be.visible')
    cy.get(specificProductPage.addToCartBtn).should('be.visible')
})

Cypress.Commands.add('addProductToCartFromSingleItem', () => {
    cy.get(specificProductPage.addToCartBtn).click()
    cy.get(productPageElements.shoppingCartBadge).should('have.text','1')
    cy.get(specificProductPage.removeCartBtn).should('be.visible')
})

Cypress.Commands.add('openCart', () => {
    cy.get(productPageElements.cartBtn).click()
    cy.get(cartPageElements.cartPageTitle).should('have.text', 'Your Cart')
    cy.get(cartPageElements.shoppingProductName).should('be.visible')
    cy.get(cartPageElements.continueShoppingBtn).should('be.visible')
    cy.get(cartPageElements.checkoutBtn).should('be.visible')
})

Cypress.Commands.add('goToCheckout', () => {
    cy.get(cartPageElements.checkoutBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Your Information')
    cy.get(checkoutPageElements.checkoutCancelBtn).should('be.visible')
    cy.get(checkoutPageElements.checkoutContinueBtn).should('be.visible')
})

Cypress.Commands.add('fillCheckoutInfo', (firstName, lastName, zipCode) => {
    cy.get(checkoutPageElements.checkoutFirstName).type(firstName)
    cy.get(checkoutPageElements.checkoutLastName).type(lastName)
    cy.get(checkoutPageElements.checkoutZipCode).type(zipCode)
    cy.get(checkoutPageElements.checkoutContinueBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Overview')
    cy.get(checkoutPageElements.checkoutItemName).should('be.visible')
})

Cypress.Commands.add('finishShopping', () => {
    cy.get(checkoutPageElements.checkoutFinishBtn).click()
    cy.get(checkoutPageElements.checkoutTitle).should('have.text', 'Checkout: Complete!')
    cy.get(checkoutPageElements.checkoutFinishedMsg).should('have.text', 'Thank you for your order!')
    cy.get(checkoutPageElements.checkoutFinishedImg).should('be.visible')
    cy.get(checkoutPageElements.checkoutBackHomeBtn).should('be.visible')
})



