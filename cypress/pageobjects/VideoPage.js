class VideoPage{
    get BlogLink() {
        return cy.get('header [href="/resources"]');
    };
    get Page2Link() {
        return cy.get('li:nth-Child(2) [href="/resources/page/2"]');
    };
    get Page3Link () {
        return cy.get('li:nth-Child(4) [href="/resources/page/3"]');
    };
    get VideoLink () {
        return cy.get('[href="/resources/webrtc-video"]');
    };
};
export default VideoPage;