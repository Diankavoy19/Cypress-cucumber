const seeAllProductsLink = 'header [href="/products"]';
const webRTCLink = '[href="/products/webrtc"]';
const guideLink = '[href$="webrtc/quickstart"]';
const webrtclink = '[href$="@telnyx/webrtc"]';
const text = '#follow-ups span:first-Child';

class Webrtc{
    get SeeAllProductsLink() {
        return cy.get(seeAllProductsLink);
    };
    get WebRTCLink() {
        return cy.get(webRTCLink);
    };
    get GuideLink() {
        return cy.get(guideLink);
    };
    get webrtcLink() {
        return cy.get(webrtclink);
    };
    get Text () {
        return cy.get(text);
    };
};
module.exports = new Webrtc();