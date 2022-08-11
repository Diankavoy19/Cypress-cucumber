class VideoPage{
    get BlogLink() {
        return cy.get('header [href="/resources"]');
    };
    get VerifyAPIButton() {
        return cy.get('div:first-Child[role="radiogroup"] li:nth-Child(2)');
    };
    get GuidesButton () {
        return cy.get('div:nth-Child(2)[role="radiogroup"] li:nth-Child(2)');
    };
    get VideoLink () {
        return cy.get('[href^="/resources/video"]');
    };
};
export default VideoPage;