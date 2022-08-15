const privaceLink = '[href$="privacy"]';
const complianceLink = '[href="#compliance"]';
const transferButton = '#faq div:first-Child>dt button';
const text = '#faq #faq1_description p:first-Child';

class Compliance{
    get PrivacyLink() {
        return cy.get(privaceLink);
    };
    get ComplianceLink() {
        return cy.get(complianceLink);
    };
    get TransferButton() {
        return cy.get(transferButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Compliance();