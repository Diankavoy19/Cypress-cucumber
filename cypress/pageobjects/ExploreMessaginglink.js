const networkLink = 'span [href$="network"]';
const competitorNetworkButton = '#tab-4azmFSNfuMMzXK062TEcHx';
const exploreMessagingLink = 'main [href$="sms-api"]';
const sendText = 'main div:nth-Child(2)>div>div:nth-Child(2)>h2';
const text = 'main div:nth-Child(2)>div>div:nth-Child(2) p';

class Explore{
    get NetworkLink() {
        return cy.get(networkLink);
    };
    get CompetitorNetworkButton() {
        return cy.get(competitorNetworkButton);
    };
    get ExploreMessagingLink() {
        return cy.get(exploreMessagingLink);
    };
    get SendText() {
        return cy.get(sendText);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Explore();