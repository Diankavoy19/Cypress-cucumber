Feature: Verify “WireGuard Interfaces” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the Net button.
     When I click on the “Developer Docs” link of Net 
     Then I click on the “Docs” button of Net
     Then I click on the “Verify” link
     Then I click on the “See the Specs” button
     Then I scroll and click on the “WireGuard Interfaces” link
     Then I click on the “.NET” button
     Then I verify the text on the Net button  