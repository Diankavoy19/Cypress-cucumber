const developerDocsLink = 'header [href*="developers"]';
const docsButton = '#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg';
const verifyLink = '#docs-mobile-sidebar [href="/docs/v2/verify"]';
const seeTheSpecs = '[href="/docs/api/v2/verify"]';
const wireGuardInterfacesLink = '[href="/docs/api/v2/networking/WireGuard-Interfaces"]';
const nETButton = 'main>div:first-Child div[role="tablist"]>button:nth-Child(7)';
const text = 'main>div:nth-Child(2) div[role="tabpanel"] code div';

class NetButton{
    get DeveloperDocsLink() {
        return cy.get(developerDocsLink);
    };
    get DocsButton() {
        return cy.get(docsButton);
    };
    get VerifyLink() {
        return cy.get(verifyLink);
    };
    get SeeTheSpecs() {
        return cy.get(seeTheSpecs);
    };
    get WireGuardInterfacesLink () {
        return cy.get(wireGuardInterfacesLink);
    };
    get NETButton () {
        return cy.get(nETButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new NetButton();