class ReportAbuseForm{
    get ReportAbuseLink() {
        return cy.get('[href="/report-abuse"]');
    };
    get SubjectInput() {
        return cy.get('input[name="shortDescription"]');
    };
    get PhoneNumberInput() {
        return cy.get('input[name="abusivePhoneNumber"]');
    };
    get AbusedPhoneNumberInput() {
        return cy.get('input[name="abusedPhoneNumber"]');
    };
    get Checkbox() {
        return cy.get('label[for="serviceAbusedSms"]');
    };
    get FullNameInput() {
        return cy.get('input[name="reporterName"]');
    };
    get EmailInput() {
        return cy.get('input[name="reporterEmail"]');
    };
    get DetailsInput() {
        return cy.get('input[name="longDescription"]');
    };
    get SubmitButton() {
        return cy.get('button[type="submit"]');
    };
    get Text() {
        return cy.get('div[role="alert"] span');
    };
};
export default ReportAbuseForm;