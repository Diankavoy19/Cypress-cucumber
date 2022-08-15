const seeAllSolutionLink = '[href="/solutions"]';
const exploreUCaaSSolutionsLink = '[href$="ucaas"]';
const purchaseNumbersWithOurAPILink = '[href$="/numbers"]';
const runInPostmanButton = '[href*=".postman"]';
const text = 'blockquote p';

class Postman{
    get SeeAllSolutionLink() {
        return cy.get(seeAllSolutionLink);
    };
    get ExploreUCaaSSolutionsLink() {
        return cy.get(exploreUCaaSSolutionsLink);
    };
    get PurchaseNumbersWithOurAPILink() {
        return cy.get(purchaseNumbersWithOurAPILink);
    };
    get RunInPostmanButton() {
        return cy.get(runInPostmanButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Postman();