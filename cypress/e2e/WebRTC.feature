Feature: Verify “WebRTC Video Chat and Streaming Explained” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Take a screenshot of the “WebRTC Video Chat and Streaming Explained” page.
     When I click on the “Blog” link
     Then I scroll and click on the “Page 2” link 
     Then I scroll and click on the “Page 3” link
     Then I scroll and click on the “WebRTC Video Chat and Streaming Explained” link
     Then I take a screenshot of the “VIDEO” page   