Feature: Verify “Integration Marketplace” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: “Integration Marketplace” link and Search input.
     When I click on the “Integrations” link
     Then I scroll and click on the “Integration Marketplace” link
     Then I click on the Search input and fill the text
     Then I click on search query
     Then I verify the text on the “Integration Marketplace” page    