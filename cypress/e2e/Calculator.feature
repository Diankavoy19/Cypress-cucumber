Feature: Verify “Calculator” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the “Calculator” page.
     When I click on the “Savings Calculator” link
     Then I scroll and click into “Messaging API” button
     Then I click on the “Continue” button
     Then I click on the “+” buttons
     Then I click again on the “Continue” button
     Then I verify the text on the “Calculator” page
   