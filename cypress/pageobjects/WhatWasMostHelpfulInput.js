class HelpfulInput{
    get DeveloperDocsLink() {
        return cy.get('header [href*="developers"]');
    };
    get DocsButton() {
        return cy.get('#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg');
    };
    get MediaLink () {
        return cy.get('#docs-mobile-sidebar [href="/docs/v2/media"]');
    };
    get SetupMediaStorageButton () {
        return cy.get('main [href*="quickstart"]');
    };
    get YesButton() {
        return cy.get('main>div:nth-Child(3) button:nth-Child(2)');
    };
    get HelpfulInput() {
        return cy.get('textarea[name="feedback"]');
    };
    get SendButton() {
        return cy.get('main form button');
    }
};
export default HelpfulInput;