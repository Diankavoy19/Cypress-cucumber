const reportAbuseLink = '[href="/report-abuse"]';
const subjectInput = 'input[name="shortDescription"]';
const phoneNumberInput = 'input[name="abusivePhoneNumber"]';
const abusedPhoneNumberInput = 'input[name="abusedPhoneNumber"]';
const checkbox = 'label[for="serviceAbusedSms"]';
const fullNameInput = 'input[name="reporterName"]';
const emailInput = 'input[name="reporterEmail"]';
const detailsInput = 'input[name="longDescription"]';
const submitButton = 'button[type="submit"]';
const text = 'div[role="alert"] span';

class ReportAbuseForm{
    get ReportAbuseLink() {
        return cy.get(reportAbuseLink);
    };
    get SubjectInput() {
        return cy.get(subjectInput);
    };
    get PhoneNumberInput() {
        return cy.get(phoneNumberInput);
    };
    get AbusedPhoneNumberInput() {
        return cy.get(abusedPhoneNumberInput);
    };
    get Checkbox() {
        return cy.get(checkbox);
    };
    get FullNameInput() {
        return cy.get(fullNameInput);
    };
    get EmailInput() {
        return cy.get(emailInput);
    };
    get DetailsInput() {
        return cy.get(detailsInput);
    };
    get SubmitButton() {
        return cy.get(submitButton);
    };
    get Text() {
        return cy.get(text);
    };
};
module.exports = new ReportAbuseForm();