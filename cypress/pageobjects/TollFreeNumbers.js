class TollFreeNumbers{
    get CustomerStories() {
        return cy.get('[href="/customer-stories"]');
    };
    get ReadAboutPointBlankLink() {
        return cy.get('[href*="pointblank"]');
    };
    get TollFreeNumbersLink() {
        return cy.get('[href$="toll-free-numbers"]');
    };
    get RefreshNumbersButton() {
        return cy.get('section>div[role="button"] span');
    };
    get AddToCartButton() {
        return cy.get('div[role="button"]:first-Child div:nth-Child(3)>button');
    };
};
export default TollFreeNumbers;