Feature: Verify “Guide” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the text on the “Guide” page.
     When I click on the “See all Products” link
     Then I scroll and click on the “WebRTC” link
     Then I scroll and click on the “Guide: Make a WebRTC Call in Seconds” link
     Then I scroll into the “webrtc” link
     Then I verify the text on the “Guide” page    