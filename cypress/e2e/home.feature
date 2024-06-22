Feature: Home page functionality

  Scenario: Verify that user click make appointment
    Given I visit the home page
    When I click make appointment button
    Then I should see the login page