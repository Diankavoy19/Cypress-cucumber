Feature: Verify “Developer Docs” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Take a screenshot of the buttons on “Developer Docs” page.
     When I click on the “Developer Docs” link of Deploy 
     Then I click on the “Search Number” button
     Then I click on the “Order Number” button
     Then I click on the “Send Message” button
     Then I take a screenshot of the buttons on “Developer Docs” page    