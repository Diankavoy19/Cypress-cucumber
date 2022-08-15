const developerDocsLink = 'header [href*="developers"]';
const searchNumberButton = 'li:nth-Child(2) button[role="tab"]';
const ordenNumberButton = 'li:nth-Child(3) button[role="tab"]';
const sendMessageButton = 'li:nth-Child(4) button[role="tab"]';

class DeveloperButtons{
    get DeveloperDocsLink() {
        return cy.get(developerDocsLink);
    };
    get SearchNumberButton () {
        return cy.get(searchNumberButton);
    };
    get OrdenNumberButton () {
        return cy.get(ordenNumberButton);
    };
    get SendMessageButton () {
        return cy.get(sendMessageButton);
    };
};
module.exports = new DeveloperButtons();