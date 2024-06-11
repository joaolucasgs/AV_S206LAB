/// <reference = cypress>

describe('Teste logando no site', () => {
  it('Testando login com falha', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('visual_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Testando login com sucesso', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('visual_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain.text', 'Products')
  })
})

describe('Teste adicionando produtos no carrinho', () => {
  it('Testando adicionar produtos no carrinho com sucesso', () => {
    criaUser()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.prop', 'tagName', 'BUTTON')
  })
})

describe('Teste finalizando a compra', () => {
  it('Testando finalizar uma compra com sucesso', () => {
    criaUser()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
  })
})

function criaUser(){
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('visual_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="title"]').should('contain.text', 'Products')
}