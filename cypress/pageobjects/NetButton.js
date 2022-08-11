class NetButton{
    get DeveloperDocsLink() {
        return cy.get('header [href*="developers"]');
    };
    get DocsButton() {
        return cy.get('#docs-mobile-sidebar div:nth-Child(2) label[for*="mobile"]>svg');
    };
    get VerifyLink() {
        return cy.get('#docs-mobile-sidebar [href="/docs/v2/verify"]');
    };
    get SeeTheSpecs() {
        return cy.get('[href="/docs/api/v2/verify"]');
    };
    get WireGuardInterfacesLink () {
        return cy.get('[href="/docs/api/v2/networking/WireGuard-Interfaces"]');
    };
    get NETButton () {
        return cy.get('main>div:first-Child div[role="tablist"]>button:nth-Child(7)');
    };
    get GitHubLink () {
        return cy.get('[href*="github"]');
    };
    get Text() {
        return cy.get('main>div:nth-Child(2) div[role="tabpanel"] code div');
    };
};
export default NetButton;