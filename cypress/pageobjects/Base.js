class Base{
    get CookiesButton() {
        return cy.get('#__next footer+div div div button');
    };
    navigate(){
         cy.visit('https://telnyx.com/');
    };
    scrollandclick(Element){
         Element.scrollIntoView();
         Element.click({force: true});
    }
};
export default Base;