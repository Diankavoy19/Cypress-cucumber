class Calculator{
    get SavingsCalculatorLink() {
        return cy.get('[href$="calculator"]');
    };
    get MessagingAPIButton() {
        return cy.get('div>div:nth-Child(2) div:nth-Child(3)>div:first-Child>div:first-Child');
    };
    get ContinueButton() {
        return cy.get('div:nth-Child(4) div>button');
    };
    get PlusButton() {
        return cy.get('div:first-Child>div:first-Child button:nth-Child(3)');
    };
    get SecondPlusButton() {
        return cy.get('div:nth-Child(2)>div>div>button:nth-Child(3)');
    };
    get Text() {
        return cy.get('div:nth-Child(3)>div:nth-Child(2)>p:nth-Child(2)>span:first-Child');
    };
};
export default Calculator;