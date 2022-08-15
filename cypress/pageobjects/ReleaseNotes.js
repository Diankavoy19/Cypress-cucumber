const releaseNotesLink = '[href="/release-notes"]';
const anchorSiteLink = '[href*="miami"]';

class ReleaseNotes{
    get ReleaseNotesLink() {
        return cy.get(releaseNotesLink);
    };
    get AnchorSiteLink() {
        return cy.get(anchorSiteLink);
    };
};
module.exports = new ReleaseNotes();