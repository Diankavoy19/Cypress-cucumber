const cookiesButton = '#__next footer+div div div button';
const mainUrl = 'https://telnyx.com/';
class Base{
    get CookiesButton() {
        return cy.get(cookiesButton);
    };
    navigate(){
         cy.visit(mainUrl);
    };
    scrollandclick(Element){
         Element.scrollIntoView();
         Element.click({force: true});
    }
};
module.exports = new Base();