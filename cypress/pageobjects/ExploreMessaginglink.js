class Explore{
    get NetworkLink() {
        return cy.get('span [href$="network"]');
    };
    get CompetitorNetworkButton() {
        return cy.get('#tab-4azmFSNfuMMzXK062TEcHx');
    };
    get ExploreMessagingLink() {
        return cy.get('main [href$="sms-api"]');
    };
    get SendText() {
        return cy.get('main div:nth-Child(2)>div>div:nth-Child(2)>h2');
    };
    get Text() {
        return cy.get('main div:nth-Child(2)>div>div:nth-Child(2) p');
    };
};
export default Explore;