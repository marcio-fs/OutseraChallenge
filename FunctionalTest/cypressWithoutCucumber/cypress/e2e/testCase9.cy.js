describe('Test Case 9: Search Product', () => {
    beforeEach(() => {
      cy.visit('https://automationexercise.com')
    })
  
    it('should search for products and verify results', () => {
      // Click on 'Products' button
      cy.get('a[href="/products"]').click()
  
      // Verify user is navigated to ALL PRODUCTS page
      cy.url().should('include', '/products')
      cy.contains('All Products').should('be.visible')
  
      // Enter product name in search input and click search button
      const searchTerm = 'Blue'
      cy.get('#search_product').type(searchTerm)
      cy.get('#submit_search').click()
  
      // Verify 'SEARCHED PRODUCTS' is visible
      cy.contains('Searched Products').should('be.visible')
  
      // Verify all the products related to search are visible
      cy.get('.features_items .productinfo').each(($el) => {
        cy.wrap($el)
        .find('p')
        .then(($p) => {
          const text = $p.text().toLowerCase();
          expect(text).to.include(searchTerm.toLowerCase());
        });
      })
    })
  })