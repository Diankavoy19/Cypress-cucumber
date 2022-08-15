const integrationsLink = '[href="/integrations"]';
const integrationMarketplaceLink = 'span [href*="marketplace"]';
const searchInput = 'div.search-input-container input ';
const searchQueryLink = '[href="/integrations/volt"]';
const text = 'h1.title';

class Integration{
    get IntegrationsLink() {
        return cy.get(integrationsLink);
    };
    get IntegrationMarketplaceLink() {
        return cy.get(integrationMarketplaceLink);
    };
    get SearchInput() {
        return cy.get(searchInput);
    };
    get SearchQueryLink() {
        return cy.get(searchQueryLink);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Integration();