Feature: Verify “Purchase Numbers with our API” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies
     
   Scenario: Verify the text on the “Purchase Numbers with our API” page.
     When I click on the “See all Solution” link
     Then I scroll and click into “Explore UCaaS Solutions” link
     Then I scroll and click into “Purchase Numbers with our API” link
     Then I scroll into “Run in Postman” button
     Then I verify the text on the page of “Purchase Numbers with our API“ page    