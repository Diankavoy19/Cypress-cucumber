const savingCalculatorLink = '[href$="calculator"]';
const messagingAPIButton = 'div>div:nth-Child(2) div:nth-Child(3)>div:first-Child>div:first-Child';
const continueButton = 'div:nth-Child(4) div>button';
const plusButton = 'div:first-Child>div:first-Child button:nth-Child(3)';
const secondPlusButton = 'div:nth-Child(2)>div>div>button:nth-Child(3)';
const text = 'div:nth-Child(3)>div:nth-Child(2)>p:nth-Child(2)>span:first-Child';

class Calculator{
    get SavingsCalculatorLink() {
        return cy.get(savingCalculatorLink);
    };
    get MessagingAPIButton() {
        return cy.get(messagingAPIButton);
    };
    get ContinueButton() {
        return cy.get(continueButton);
    };
    get PlusButton() {
        return cy.get(plusButton);
    };
    get SecondPlusButton() {
        return cy.get(secondPlusButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new Calculator();