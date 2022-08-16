Feature: Verify “Toll-Free Numbers” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Take a screenshot of the “Toll-Free Numbers” page.
     When I click on the “Customer Stories” link 
     Then I scroll and click on the “Read about Point Blank” link
     Then I scroll and click on the “Toll-Free Numbers” link
     Then I click on the “Refresh Numbers” button
     Then I click on the “Add to cart” button
     Then I take a screenshot of the “Toll-Free Numbers” page    