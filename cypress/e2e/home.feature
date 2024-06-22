Feature: Home page functionality

    Background: 
        Given I visit the home page

    Scenario: Verify that user click make appointment
        When I click make appointment button
        Then I should see the login page

    Scenario: Verify that user access the social media
        When I click make appointment button
        Then I should see the login page
