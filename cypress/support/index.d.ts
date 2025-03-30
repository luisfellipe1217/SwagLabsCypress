// cypress/support/index.d.ts
// Type definitions for custom Cypress commands

/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Opens the web application and verifies the login page is loaded
       * @example cy.openWebPage()
       */
      openWebPage(): Chainable<void>;
  
      /**
       * Logs in with provided credentials
       * @param username - Login username
       * @param password - Login password
       * @example cy.login('standard_user', 'secret_sauce')
       */
      login(username: string, password: string): Chainable<void>;
  
      /**
       * Adds a product to cart from the products page
       * @param product - Product identifier (default: 'backpack')
       * @example 
       * cy.addProductToCart()
       * cy.addProductToCart('backpack')
       */
      addProductToCart(product?: 'backpack'): Chainable<void>;
  
      /**
       * Opens the detailed view for an item
       * @example cy.openItemDescriptionPage()
       */
      openItemDescriptionPage(): Chainable<void>;
  
      /**
       * Adds product to cart from single item view
       * @example cy.addProductToCartFromSingleItem()
       */
      addProductToCartFromSingleItem(): Chainable<void>;
  
      /**
       * Opens the shopping cart
       * @example cy.openCart()
       */
      openCart(): Chainable<void>;
  
      /**
       * Proceeds to checkout from cart page
       * @example cy.goToCheckout()
       */
      goToCheckout(): Chainable<void>;
  
      /**
       * Fills checkout information
       * @param firstName - First name
       * @param lastName - Last name
       * @param zipCode - ZIP/Postal code
       * @example cy.fillCheckoutInfo('John', 'Doe', '90210')
       */
      fillCheckoutInfo(firstName: string, lastName: string, zipCode: string): Chainable<void>;
  
      /**
       * Completes the checkout process
       * @example cy.finishShopping()
       */
      finishShopping(): Chainable<void>;
    }
  }