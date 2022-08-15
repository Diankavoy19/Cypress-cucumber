const customerStories = '[href="/customer-stories"]';
const readAboutPointBlankLink = '[href*="pointblank"]';
const tollFreeNumbersLink = '[href$="toll-free-numbers"]';
const refreshNumbersButton = 'section>div[role="button"] span';
const addToCartButton = 'div[role="button"]:first-Child div:nth-Child(3)>button';

class TollFreeNumbers{
    get CustomerStories() {
        return cy.get(customerStories);
    };
    get ReadAboutPointBlankLink() {
        return cy.get(readAboutPointBlankLink);
    };
    get TollFreeNumbersLink() {
        return cy.get(tollFreeNumbersLink);
    };
    get RefreshNumbersButton() {
        return cy.get(refreshNumbersButton);
    };
    get AddToCartButton() {
        return cy.get(addToCartButton);
    };
};
module.exports = new TollFreeNumbers();