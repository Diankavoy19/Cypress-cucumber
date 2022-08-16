Feature: Verify “Compliance” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the “Compliance” link.
     When I scroll and click into “Data & Privacy” link
     Then I click on the “Compliance” link
     Then I scroll and click into “Step 1: Know your transfer” button
     Then I verify the text on the “Compliance” page    