class Integration{
    get IntegrationsLink() {
        return cy.get('[href="/integrations"]');
    };
    get IntegrationMarketplaceLink() {
        return cy.get('span [href*="marketplace"]');
    };
    get SearchInput () {
        return cy.get('div.search-input-container input ');
    };
    get SearchQueryLink () {
        return cy.get('[href="/integrations/volt"]');
    };
    get Text() {
        return cy.get('h1.title');
    };
};
export default Integration;