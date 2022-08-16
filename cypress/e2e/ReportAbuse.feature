Feature: Verify “Report Abuse” page of Telnyx
   Background: 
     Given I am on the Telnyx page and click the cookies

   Scenario: Verify the “Report Abuse” form.
     When I scroll and click into “Report Abuse” link
     Then I fill the fields of the form
     Then I click on the Submit button
     Then I take a screenshot of the form    