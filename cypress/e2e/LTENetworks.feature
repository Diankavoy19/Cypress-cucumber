Feature: Verify “private LTE networks” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Take a screenshot of the “private LTE networks” page.
     When I click on the “See all Use Cases” link
     Then I scroll and click into the “Explore Healthcare” link
     Then I scroll and click into the “private LTE networks” link
     Then I take a screenshot of the “private LTE networks” page   