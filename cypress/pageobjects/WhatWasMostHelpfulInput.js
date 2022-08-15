const developerDocsLink = 'header [href*="developers"]';
const docsButton = '#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg';
const mediaLink = '#docs-mobile-sidebar [href="/docs/v2/media"]';
const setupMediaStorageButton = 'main [href*="quickstart"]';
const yesButton = 'main>div:nth-Child(3) button:nth-Child(2)';
const helpfulInput = 'textarea[name="feedback"]';
const sendButton = 'main form button';

class HelpfulInput{
    get DeveloperDocsLink() {
        return cy.get(developerDocsLink);
    };
    get DocsButton() {
        return cy.get(docsButton);
    };
    get MediaLink () {
        return cy.get(mediaLink);
    };
    get SetupMediaStorageButton() {
        return cy.get(setupMediaStorageButton);
    };
    get YesButton() {
        return cy.get(yesButton);
    };
    get HelpfulInput() {
        return cy.get(helpfulInput);
    };
    get SendButton() {
        return cy.get(sendButton);
    }
};
module.exports = new HelpfulInput();