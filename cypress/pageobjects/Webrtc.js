class Webrtc{
    get SeeAllProductsLink() {
        return cy.get('header [href="/products"]');
    };
    get WebRTCLink() {
        return cy.get('[href="/products/webrtc"]');
    };
    get GuideLink () {
        return cy.get('[href$="webrtc/quickstart"]');
    };
    get webrtcLink () {
        return cy.get('[href$="@telnyx/webrtc"]');
    };
    get Text () {
        return cy.get('#follow-ups span:first-Child');
    };
};
export default Webrtc;