describe('Test Case 1: Register User', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  })

  it('should complete user registration successfully', () => {
    // Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()

    // Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible')

    // Enter name and email address
    const timestamp = Date.now()
    const email = `testuser${timestamp}@example.com`
    cy.get('input[data-qa="signup-name"]').type('Test User')
    cy.get('input[data-qa="signup-email"]').type(email)

    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').click()

    // Verify 'ENTER ACCOUNT INFORMATION' is visible
    // Verify with increased timeout and visibility check
    cy.contains('Enter Account Information', { timeout: 10000 })
    .should('be.visible')
    .then(() => {
      cy.screenshot('account-information-visible')
    })

    // Fill account details
    cy.get('#id_gender1').check()
    cy.get('#password').type('Test1234')
    cy.get('#days').select('10')
    cy.get('#months').select('April')
    cy.get('#years').select('1990')
    cy.get('#newsletter').check()
    cy.get('#optin').check()

    // Fill address information
    cy.get('#first_name').type('Test')
    cy.get('#last_name').type('User')
    cy.get('#company').type('Test Company')
    cy.get('#address1').type('123 Test Street')
    cy.get('#address2').type('Apt 4B')
    cy.get('#country').select('United States')
    cy.get('#state').type('New York')
    cy.get('#city').type('New York')
    cy.get('#zipcode').type('10001')
    cy.get('#mobile_number').type('1234567890')

    // Click 'Create Account' button
    cy.get('button[data-qa="create-account"]').click()

    // Verify 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible')

    // Click 'Continue' button
    cy.get('a[data-qa="continue-button"]').click()

    // Verify 'Logged in as username' is visible
    cy.contains('Logged in as Test User').should('be.visible')

    // Delete account
    cy.contains(' Delete Account').click()

    // Verify 'ACCOUNT DELETED!' is visible
    cy.contains('Account Deleted!').should('be.visible')
  })
})