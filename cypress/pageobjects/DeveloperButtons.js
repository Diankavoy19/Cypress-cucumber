class DeveloperButtons{
    get DeveloperDocsLink() {
        return cy.get('header [href*="developers"]');
    };
    get SearchNumberButton () {
        return cy.get('li:nth-Child(2) button[role="tab"]');
    };
    get OrdenNumberButton () {
        return cy.get('li:nth-Child(3) button[role="tab"]');
    };
    get SendMessageButton () {
        return cy.get('li:nth-Child(4) button[role="tab"]');
    };
};
export default DeveloperButtons;