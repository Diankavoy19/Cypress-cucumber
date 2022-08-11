class Development{
    get DeveloperDocsLink() {
        return cy.get('header [href*="developers"]');
    };
    get DocsButton() {
        return cy.get('#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg');
    };
    get DevelopmentLink() {
        return cy.get('#docs-mobile-sidebar [href="/docs/v2/development"]');
    };
    get SDKSetupButton() {
        return cy.get(' main div>a[href*="setup"]');
    };
    get PHPButton() {
        return cy.get('li:nth-Child(3) button[role="tab"]');
    };
    get Text() {
        return cy.get('#tabpanel-PHP h2#step-1-obtain-your-api-keys span:first-Child');
    };
};
export default Development;