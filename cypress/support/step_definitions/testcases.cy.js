import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/Base");
const calculator = require("../../pageobjects/Calculator");
const compliance = require("../../pageobjects/Compliance");
const developerbuttons = require("../../pageobjects/DeveloperButtons");
const development = require("../../pageobjects/Development");
const explore = require("../../pageobjects/ExploreMessaginglink");
const integrations = require("../../pageobjects/Integration");
const ltenetworks = require("../../pageobjects/LTENetworks");
const postman = require("../../pageobjects/Postman");
const releasenotes = require("../../pageobjects/ReleaseNotes");
const reportabuseform = require("../../pageobjects/ReportAbuseForm");
const videopage = require("../../pageobjects/VideoPage");
const webrtc = require("../../pageobjects/Webrtc");
const helpfulInput = require("../../pageobjects/WhatWasMostHelpfulInput");
const net = require("../../pageobjects/NetButton");
const tollfreenumbers = require("../../pageobjects/TollFreeNumbers");

Given('I am on the Telnyx page', () => {
  base.navigate();
});
//Scenario#1
When('I click the Cookies', async() => {
  base.CookiesButton.click();
});
Then('I click on the “Network” link', async() => {
  explore.NetworkLink.click({force: true});
});
Then('I scroll and click into “Competitor Networks” Button', async () => {
  base.scrollandclick(explore.CompetitorNetworkButton);
});
Then('I scroll and click into “Explore Messaging” link', async () => {
  base.scrollandclick(explore.ExploreMessagingLink);
});
Then('I scroll into “Send mission-critical messages with confidence” text', async () => {
  explore.SendText.scrollIntoView();
});
Then('I verify the text on the page', async () => {
  explore.Text.should('include.text', 'Reach users at scale wherever they are in the world' );
});
//Scenario#2
When('I click on the “See all Solution” link', async() => {
  postman.SeeAllSolutionLink.click({force: true});
});
Then('I scroll and click into “Explore UCaaS Solutions” link', async () => {
  base.scrollandclick(postman.ExploreUCaaSSolutionsLink);
});
Then('I scroll and click into “Purchase Numbers with our API” link', async () => {
  base.scrollandclick(postman.PurchaseNumbersWithOurAPILink);
});
Then('I scroll into “Run in Postman” button', async () => {
  postman.RunInPostmanButton.scrollIntoView();
});
Then('I verify the text on the page of “Purchase Numbers with our API“ page', async () => {
  postman.Text.should('include.text', 'Prior to the import' );
});
//Scenario#3
When('I click on the “Savings Calculator” link', async() => {
  calculator.SavingsCalculatorLink.click({force: true});
});
Then('I scroll and click into “Messaging API” button', async () => {
  base.scrollandclick(calculator.MessagingAPIButton);
  cy.wait(2000);
});
Then('I click on the “Continue” button', async () => {
  calculator.ContinueButton.click({force: true});
});
Then('I click on the “+” buttons', async () => {
  calculator.PlusButton.click({force: true});
  calculator.SecondPlusButton.click({force: true});
});
Then('I click again on the “Continue” button', async () => {
  calculator.ContinueButton.click({force: true});
});
Then('I verify the text on the “Calculator” page', async () => {
  calculator.Text.should('include.text', '$' );
});
//Scenario#4
When('I click on the “Integrations” link', async() => {
  integrations.IntegrationsLink.click({force: true});
});
Then('I scroll and click on the “Integration Marketplace” link', async () => {
  base.scrollandclick(integrations.IntegrationMarketplaceLink);
});
Then('I click on the Search input and fill the text', async () => {
  integrations.SearchInput.click();
  integrations.SearchInput.type("Volt");
});
Then('I click on search query', async () => {
  integrations.SearchQueryLink.click({force: true});
  cy.wait(2000);
});
Then('I verify the text on the “Integration Marketplace” page', async () => {
  integrations.Text.should('include.text', 'Volt Integration' );
});
//Scenario#5
When('I click on the “Developer Docs” link', async() => {
  helpfulInput.DeveloperDocsLink.click({force: true});
});
Then('I click on the “Docs” button', async () => {
  helpfulInput.DocsButton.click({force: true});
});
Then('I click on the “Media” link', async () => {
  helpfulInput.MediaLink.click({force: true});
  helpfulInput.DocsButton.click({force: true});
});
Then('I click on the “Setup Media Storage” button', async () => {
  helpfulInput.SetupMediaStorageButton.click({force: true});
});
Then('I take a screenshot of the “Setup Media Storage” page', async () => {
  cy.screenshot('Testcase5');
});
//Scenario#6
When('I click on the “Developer Docs” link on the developer docs', async() => {
  development.DeveloperDocsLink.click({force: true});
});
Then('I click on the “Docs” button on the developer docs', async () => {
  development.DocsButton.click({force: true});
});
Then('I scroll and click into “Development” link', async () => {
  base.scrollandclick(development.DevelopmentLink);
  cy.wait(2000);
  development.DocsButton.click({force: true});
});
Then('I click on the “SDK Setup” button', async () => {
  development.SDKSetupButton.click({force: true});
});
Then('I click on the “PHP” button', async () => {
  development.PHPButton.click({force: true});
});
Then('I verify the text on the “Development” page', async () => {
  development.Text.should('include.text', 'Obtain your API keys' );
});
//Scenario#7
When('I scroll and click into “Report Abuse” link', async() => {
  base.scrollandclick(reportabuseform.ReportAbuseLink);
});
Then('I fill the fields of the form', async () => {
  reportabuseform.SubjectInput.type("Subject is filled");
  reportabuseform.PhoneNumberInput.type("380666666666");
  reportabuseform.AbusedPhoneNumberInput.type("380999999999");
  reportabuseform.Checkbox.click();
  reportabuseform.FullNameInput.type("FullName is filled");
  reportabuseform.EmailInput.type("Email@gmail.com");
  reportabuseform.DetailsInput.type("Details is filled");
});
Then('I click on the Submit button', async () => {
  reportabuseform.SubmitButton.click();
});
Then('I take a screenshot of the form', async () => {
  cy.screenshot('Testcase7');
});
//Scenario#8
When('I scroll and click into “Data & Privacy” link', async() => {
  base.scrollandclick(compliance.PrivacyLink);
});
Then('I click on the “Compliance” link', async () => {
  compliance.ComplianceLink.click();
});
Then('I scroll and click into “Step 1: Know your transfer” button', async () => {
  base.scrollandclick(compliance.TransferButton);
});
Then('I verify the text on the “Compliance” page', async () => {
  compliance.Text.should('include.text', 'GDPR stands for the General Data Protection Regulation');
});
//Scenario#9
When('I scroll and click into “Release Notes” link', async() => {
  base.scrollandclick(releasenotes.ReleaseNotesLink);
});
Then('I scroll and click into “Telnyx adds AnchorSite™ Point of Presence in Miami” link', async () => {
  base.scrollandclick(releasenotes.AnchorSiteLink);
});
Then('I verify the link of the “Telnyx adds AnchorSite™ Point of Presence in Miami” page', async () => {
  cy.url().should('include', 'anchorsite-point-of-presence');
});
//Scenario#10
When('I click on the “See all Use Cases” link', async() => {
  ltenetworks.SeeAllUseCasesLink.click({force: true});
});
Then('I scroll and click into the “Explore Healthcare” link', async () => {
  base.scrollandclick(ltenetworks.ExploreHealthcareLink);
});
Then('I scroll and click into the “private LTE networks” link', async () => {
  base.scrollandclick(ltenetworks.PrivateLTENetworksLink);
});
Then('I take a screenshot of the “private LTE networks” page', async () => {
  cy.screenshot('Testcase10');
});
//Scenario#11
When('I click on the “Blog” link', async() => {
  videopage.BlogLink.click({force: true});
});
Then('I scroll and click on the “Page 2” link', async () => {
  base.scrollandclick(videopage.Page2Link);
});
Then('I scroll and click on the “Page 3” link', async () => {
  base.scrollandclick(videopage.Page3Link);
});
Then('I scroll and click on the “WebRTC Video Chat and Streaming Explained” link', async () => {
  base.scrollandclick(videopage.VideoLink);
  cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('JSON');
    return false
  });
});
Then('I take a screenshot of the “VIDEO” page', async () => {
  cy.screenshot('Testcase11');
});
//Scenario#12
When('I click on the “See all Products” link', async() => {
  webrtc.SeeAllProductsLink.click({force: true});
});
Then('I scroll and click on the “WebRTC” link', async () => {
  base.scrollandclick(webrtc.WebRTCLink);
});
Then('I scroll and click on the “Guide: Make a WebRTC Call in Seconds” link', async () => {
  base.scrollandclick(webrtc.GuideLink);
});
Then('I scroll into the “webrtc” link', async () => {
  webrtc.webrtcLink.scrollIntoView();
});
Then('I verify the text on the “Guide” page', async () => {
  webrtc.Text.should('include.text', 'Follow-ups');
});
//Scenario#13
When('I click on the “Developer Docs” link of Deploy', async() => {
  developerbuttons.DeveloperDocsLink.click({force: true});
});
Then('I click on the “Search Number” button', async () => {
  developerbuttons.SearchNumberButton.click({force: true});
});
Then('I click on the “Order Number” button', async () => {
  developerbuttons.OrdenNumberButton.click({force: true});
});
Then('I click on the “Send Message” button', async () => {
  developerbuttons.SendMessageButton.click({force: true});
});
Then('I take a screenshot of the buttons on “Developer Docs” page', async () => {
  cy.screenshot('Testcase13');
});
//Scenario#14
When('I click on the “Developer Docs” link of Net', async() => {
  net.DeveloperDocsLink.click({force: true});
});
Then('I click on the “Docs” button of Net', async () => {
  net.DocsButton.click({force: true});
});
Then('I click on the “Verify” link', async () => {
  net.VerifyLink.click({force: true});
  cy.wait(2000);
  net.DocsButton.click({force: true});
});
Then('I click on the “See the Specs” button', async () => {
  net.SeeTheSpecs.click({force: true});
});
Then('I scroll and click on the “WireGuard Interfaces” link', async () => {
  base.scrollandclick(net.WireGuardInterfacesLink);
});
Then('I click on the “.NET” button', async () => {
  net.NETButton.click({force: true});
});
Then('I verify the text on the Net button', async () => {
  net.Text.should('include.text', 'TelnyxConfiguration.SetApiKey');
});
//Scenario#15
When('I click on the “Customer Stories” link', async() => {
  tollfreenumbers.CustomerStories.click({force: true});
});
Then('I scroll and click on the “Read about Point Blank” link', async () => {
  base.scrollandclick(tollfreenumbers.ReadAboutPointBlankLink);
});
Then('I scroll and click on the “Toll-Free Numbers” link', async () => {
  base.scrollandclick(tollfreenumbers.TollFreeNumbersLink);
});
Then('I click on the “Refresh Numbers” button', async () => {
  tollfreenumbers.RefreshNumbersButton.click({force: true});
  cy.wait(3000);
});
Then('I click on the “Add to cart” button', async () => {
  tollfreenumbers.AddToCartButton.click({force: true});
});
Then('I take a screenshot of the “Toll-Free Numbers” page', async () => {
  cy.screenshot('Testcase15');
});