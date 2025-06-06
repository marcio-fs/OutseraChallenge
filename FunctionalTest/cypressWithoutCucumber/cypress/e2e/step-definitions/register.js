import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'

Given('Eu estou na página de login', () => {
  cy.visit('https://automationexercise.com/login')
})

When('Eu preencho os detalhes de registro com nome e email válidos', () => {
  const timestamp = Date.now()
  cy.get('input[data-qa="signup-name"]').type('Test User')
  cy.get('input[data-qa="signup-email"]').type(`test${timestamp}@example.com`)
  cy.get('button[data-qa="signup-button"]').click()
})

When('Eu preencho todas as informações obrigatórias', () => {
  cy.get('#id_gender1').check()
  cy.get('#password').type('Test1234')
  cy.get('#days').select('10')
  cy.get('#months').select('April')
  cy.get('#years').select('1990')
  cy.get('#first_name').type('Test')
  cy.get('#last_name').type('User')
  cy.get('#address1').type('123 Test Street')
  cy.get('#country').select('United States')
  cy.get('#state').type('New York')
  cy.get('#city').type('New York')
  cy.get('#zipcode').type('10001')
  cy.get('#mobile_number').type('1234567890')
})

When('Eu clico em {string}', (buttonText) => {
  cy.contains('button', buttonText).click()
})

Then('Eu vejo a mensagem {string}', (message) => {
  cy.contains(message).should('be.visible')
})

Then('Eu sou redirecionado para a página inicial logado', () => {
  cy.url().should('eq', 'https://automationexercise.com/')
})

And('Eu vejo {string} no menu', (text) => {
  cy.get('ul.nav li').contains(text).should('be.visible')
})