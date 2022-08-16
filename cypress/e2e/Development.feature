Feature: Verify “Development” page of Telnyx 
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the “Development” page.
     When I click on the “Developer Docs” link on the developer docs
     Then I click on the “Docs” button on the developer docs
     Then I scroll and click into “Development” link
     Then I click on the “SDK Setup” button
     Then I click on the “PHP” button
     Then I verify the text on the “Development” page    