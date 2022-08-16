Feature: Verify “Telnyx adds AnchorSite™ Point of Presence in Miami” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the link of the “Telnyx adds AnchorSite™ Point of Presence in Miami” page.
     When I scroll and click into “Release Notes” link
     Then I scroll and click into “Telnyx adds AnchorSite™ Point of Presence in Miami” link
     Then I verify the link of the “Telnyx adds AnchorSite™ Point of Presence in Miami” page    