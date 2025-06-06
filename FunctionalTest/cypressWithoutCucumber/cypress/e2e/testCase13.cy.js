describe('Adição de Produto no Carrinho com Quantidade Ajustada', () => {
  beforeEach(() => {
    // Passo 1: Launch browser (implícito no Cypress)
    // Passo 2: Navigate to url
    cy.visit('http://automationexercise.com')
  })

  it('Deve adicionar produto ao carrinho com quantidade 4', () => {
    // Passo 3: Verify home page is visible
    cy.get('img[alt="Website for automation practice"]').should('be.visible')
    cy.url().should('eq', 'https://automationexercise.com/')

    cy.contains('a', 'Products').click()
    cy.contains('a', 'View Product').click()

    // // Passo 4: Click 'View Product' for any product
    // cy.get(`a[href*="/product_details/1"]`).click();
      
    // // Passo 5: Verify product detail is opened
    // cy.url({ timeout: 10000 }).should('include', 'product_details/1')
    // cy.get('.product-information h2').should('be.visible')

    // // Passo 6: Increase quantity to 4
    cy.get('#quantity').clear().type('4')

    // // Passo 7: Click 'Add to cart' button
    cy.get('button.cart').click()

    // // Verifica se o modal de confirmação aparece
    cy.contains('h4', 'Added!').should('be.visible')
    cy.contains('Your product has been added to cart.').should('be.visible')
  })
})