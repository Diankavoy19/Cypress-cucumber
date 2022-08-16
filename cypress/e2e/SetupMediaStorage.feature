Feature: Verify “Setup Media Storage” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Take a screenshot of the “Setup Media Storage” page.
     When I click on the “Developer Docs” link
     Then I click on the “Docs” button
     Then I click on the “Media” link
     Then I click on the “Setup Media Storage” button
     Then I take a screenshot of the “Setup Media Storage” page    