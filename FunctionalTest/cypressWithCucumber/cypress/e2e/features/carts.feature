Feature: Cart

  Background: Logged user
    Given Im on the home page logged

  Scenario: Add product to cart on product page
    When I go to "bike" detail
    And add a on cart
    Then valid cart icon to "1" products

  Scenario: Add product to cart on home page
    When in home page, add a "bike" on cart
    Then valid cart icon to "1" products

  Scenario: Add 2 products to cart on home page
    When in home page, add a "bike" on cart
    And in home page, add a "jacket" on cart
    Then valid cart icon to "2" products

  Scenario: Validate cart Page with 1 product
    When in home page, add a "bike" on cart
    And i go to cart page
    Then valid the product "bike" on cart

  Scenario: Validate cart Page with 2 products
    When in home page, add a "bike" on cart
    And in home page, add a "jacket" on cart
    And i go to cart page
    Then valid the product "bike" on cart
    And valid the product "jacket" on cart