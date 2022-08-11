class Postman{
    get SeeAllSolutionLink() {
        return cy.get('[href="/solutions"]');
    };
    get ExploreUCaaSSolutionsLink() {
        return cy.get('[href$="ucaas"]');
    };
    get PurchaseNumbersWithOurAPILink() {
        return cy.get('[href$="/numbers"]');
    };
    get RunInPostmanButton() {
        return cy.get('[href*=".postman"]');
    };
    get Text() {
        return cy.get('blockquote p');
    };
};
export default Postman;