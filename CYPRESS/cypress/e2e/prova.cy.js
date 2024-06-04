/// <reference = cypress>


describe('Teste logando no site', () => {
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


function criaUser(){
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('visual_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="title"]').should('contain.text', 'Products')
}