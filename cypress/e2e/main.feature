Feature: Verify Telnyx page 
   Background: 
     Given I am on the Telnyx page

   Scenario: Verify the text on the Explore Messaging link.
     When I click the Cookies
     Then I click on the “Network” link
     Then I scroll and click into “Competitor Networks” Button 
     Then I scroll and click into “Explore Messaging” link
     Then I scroll into “Send mission-critical messages with confidence” text
     Then I verify the text on the page

   Scenario: Verify the text on the “Purchase Numbers with our API” page.
     When I click on the “See all Solution” link
     Then I scroll and click into “Explore UCaaS Solutions” link
     Then I scroll and click into “Purchase Numbers with our API” link
     Then I scroll into “Run in Postman” button
     Then I verify the text on the page of “Purchase Numbers with our API“ page

   Scenario: Verify the text on the “Calculator” page.
     When I click on the “Savings Calculator” link
     Then I scroll and click into “Messaging API” button
     Then I click on the “Continue” button
     Then I click on the “+” buttons
     Then I click again on the “Continue” button
     Then I verify the text on the “Calculator” page

   Scenario: “Integration Marketplace” link and Search input.
     When I click on the “Integrations” link
     Then I scroll and click on the “Integration Marketplace” link
     Then I click on the Search input and fill the text
     Then I click on search query
     Then I verify the text on the “Integration Marketplace” page

   Scenario: Take a screenshot of the “Setup Media Storage” page.
     When I click on the “Developer Docs” link
     Then I click on the “Docs” button
     Then I click on the “Media” link
     Then I click on the “Setup Media Storage” button
     Then I take a screenshot of the “Setup Media Storage” page

   Scenario: Verify the text on the “Development” page.
     When I click on the “Developer Docs” link on the developer docs
     Then I click on the “Docs” button on the developer docs
     Then I scroll and click into “Development” link
     Then I click on the “SDK Setup” button
     Then I click on the “PHP” button
     Then I verify the text on the “Development” page

   Scenario: Verify the “Report Abuse” form.
     When I scroll and click into “Report Abuse” link
     Then I fill the fields of the form
     Then I click on the Submit button
     Then I take a screenshot of the form

   Scenario: Verify the text on the “Compliance” link.
     When I scroll and click into “Data & Privacy” link
     Then I click on the “Compliance” link
     Then I scroll and click into “Step 1: Know your transfer” button
     Then I verify the text on the “Compliance” page

   Scenario: Verify the link of the “Telnyx adds AnchorSite™ Point of Presence in Miami” page.
     When I scroll and click into “Release Notes” link
     Then I scroll and click into “Telnyx adds AnchorSite™ Point of Presence in Miami” link
     Then I verify the link of the “Telnyx adds AnchorSite™ Point of Presence in Miami” page

   Scenario: Take a screenshot of the “private LTE networks” page.
     When I click on the “See all Use Cases” link
     Then I scroll and click into the “Explore Healthcare” link
     Then I scroll and click into the “private LTE networks” link
     Then I take a screenshot of the “private LTE networks” page

   Scenario: Take a screenshot of the “VIDEO: How to Build a Call Center with Python and TeXML” page.
     When I click on the “Blog” link
     Then I click on the “Verify API” button of the filter
     Then I click on the “Guides & Tutorials” button of the filter
     Then I scroll and click on the “VIDEO: How to Build a Call Center with Python and TeXML” link
     Then I take a screenshot of the “VIDEO” page

   Scenario: Verify the text on the “Guide” page.
     When I click on the “See all Products” link
     Then I scroll and click on the “WebRTC” link
     Then I scroll and click on the “Guide: Make a WebRTC Call in Seconds” link
     Then I scroll into the “webrtc” link
     Then I verify the text on the “Guide” page

   Scenario: Take a screenshot of the buttons on “Developer Docs” page.
     When I click on the “Developer Docs” link of Deploy 
     Then I click on the “Search Number” button
     Then I click on the “Order Number” button
     Then I click on the “Send Message” button
     Then I take a screenshot of the buttons on “Developer Docs” page

   Scenario: Verify the text on the Net button.
     When I click on the “Developer Docs” link of Net 
     Then I click on the “Docs” button of Net
     Then I click on the “Verify” link
     Then I click on the “See the Specs” button
     Then I scroll and click on the “WireGuard Interfaces” link
     Then I click on the “.NET” button
     Then I verify the text on the Net button

   Scenario: Take a screenshot of the “Toll-Free Numbers” page.
     When I click on the “Customer Stories” link 
     Then I scroll and click on the “Read about Point Blank” link
     Then I scroll and click on the “Toll-Free Numbers” link
     Then I click on the “Refresh Numbers” button
     Then I click on the “Add to cart” button
     Then I take a screenshot of the “Toll-Free Numbers” page