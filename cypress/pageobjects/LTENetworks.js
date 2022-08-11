class LTENetworks{
    get SeeAllUseCasesLink() {
        return cy.get('[href="/integrations"]');
    };
    get ExploreHealthcareLink() {
        return cy.get('span [href*="marketplace"]');
    };
    get PrivateLTENetworksLink () {
        return cy.get('div.search-input-container input ');
    };
};
export default LTENetworks;