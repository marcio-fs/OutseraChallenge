Feature: Checkout

  Background: With product on cart
    Given Im logged with "bike" on cart

  Scenario: Checkout one product
    When i fill with "valid_receiver" receiver step one
    And validate checkout step two with "bike"
    And validate payment information "bike"
    Then I see order confirmed

  Scenario: Checkout error receiver
    When i fill with "<errorType>" receiver step one
    Then I alert error "<errorType>"

    Examples:
      | errorType         |
      | empty_first_name  |
      | empty_last_name   |
      | empty_postal_code |
      | empty_all_fields  |