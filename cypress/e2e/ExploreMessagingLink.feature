Feature: Verify Explore Messaging page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the Explore Messaging link.
     When I click on the “Network” link
     Then I scroll and click into “Competitor Networks” Button 
     Then I scroll and click into “Explore Messaging” link
     Then I scroll into “Send mission-critical messages with confidence” text
     Then I verify the text on the page