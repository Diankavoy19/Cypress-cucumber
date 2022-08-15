const developerDocsLink = 'header [href*="developers"]';
const docsButton = '#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg';
const developmentLink = '#docs-mobile-sidebar [href="/docs/v2/development"]';
const sdkSetupButton = 'main div>a[href*="setup"]';
const phpButton = 'li:nth-Child(3) button[role="tab"]';
const text = '#tabpanel-PHP h2#step-1-obtain-your-api-keys span:first-Child';

class Development{
    get DeveloperDocsLink() {
        return cy.get(developerDocsLink);
    };
    get DocsButton() {
        return cy.get(docsButton);
    };
    get DevelopmentLink() {
        return cy.get(developmentLink);
    };
    get SDKSetupButton() {
        return cy.get(sdkSetupButton);
    };
    get PHPButton() {
        return cy.get(phpButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Development();