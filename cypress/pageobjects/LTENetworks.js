const seeAllUseCasesLink = '[href="/integrations"]';
const exploreHealthcareLink = 'span [href*="marketplace"]';
const privateLTENetworksLink = 'div.search-input-container input ';

class LTENetworks{
    get SeeAllUseCasesLink() {
        return cy.get(seeAllUseCasesLink);
    };
    get ExploreHealthcareLink() {
        return cy.get(exploreHealthcareLink);
    };
    get PrivateLTENetworksLink() {
        return cy.get(privateLTENetworksLink);
    };
};
module.exports = new LTENetworks();