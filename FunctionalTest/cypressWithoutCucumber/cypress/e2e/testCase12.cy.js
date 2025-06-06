describe('Test Case 12: Add Products in Cart', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com')
    })
  
    it('should add products to cart successfully', () => {
      // Click 'Products' button
      cy.get('a[href="/products"]').click()
  
      // Hover over first product and click 'Add to cart'
      cy.get('.features_items .productinfo').first().trigger('mouseover')
      cy.get('.features_items .productinfo').first().contains('Add to cart').click()
  
      // Click 'Continue Shopping' button
      cy.get('button').contains('Continue Shopping').click()
  
      // Hover over second product and click 'Add to cart'
      cy.get('.features_items .productinfo').eq(1).trigger('mouseover')
      cy.get('.features_items .productinfo').eq(1).contains('Add to cart').click()
  
      // Click 'View Cart' button
      cy.contains('View Cart').click()
  
      // Verify both products are added to Cart
      cy.get('#cart_info_table tbody tr').should('have.length.at.least', 2)
  
      // Verify their prices, quantity and total price
      cy.get('#cart_info_table tbody tr').each(($row) => {
        cy.wrap($row).within(() => {
          cy.get('.cart_price').should('not.be.empty')
          cy.get('.cart_quantity').should('contain', '1')
          cy.get('.cart_total').should('not.be.empty')
        })
      })
    })
  })