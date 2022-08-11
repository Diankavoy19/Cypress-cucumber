class ReleaseNotes{
    get ReleaseNotesLink() {
        return cy.get('[href="/release-notes"]');
    };
    get AnchorSiteLink() {
        return cy.get('[href*="miami"]');
    };
};
export default ReleaseNotes;