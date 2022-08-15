const blogLink = 'header [href="/resources"]';
const page2Link = 'li:nth-Child(2) [href="/resources/page/2"]';
const page3Link = 'li:nth-Child(4) [href="/resources/page/3"]';
const videoLink = '[href="/resources/webrtc-video"]';

class VideoPage{
    get BlogLink() {
        return cy.get(blogLink);
    };
    get Page2Link() {
        return cy.get(page2Link);
    };
    get Page3Link () {
        return cy.get(page3Link);
    };
    get VideoLink () {
        return cy.get(videoLink);
    };
};
module.exports = new VideoPage();