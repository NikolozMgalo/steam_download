Feature: Steam test

    Scenario: Download Steam
        Given I am on steam main page
        Then Steam home page is open
        When I click on about
        Then About page is open
        When I click install steam
        Then The file 'steam.dmg' was downloaded