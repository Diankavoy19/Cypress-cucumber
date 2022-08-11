class Compliance{
    get PrivacyLink() {
        return cy.get('[href$="privacy"]');
    };
    get ComplianceLink() {
        return cy.get('[href="#compliance"]');
    };
    get TransferButton() {
        return cy.get('#faq div:first-Child>dt button');
    };
    get Text() {
        return cy.get('#faq #faq1_description p:first-Child');
    };
};
export default Compliance;