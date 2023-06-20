//Test adding 3 random items to cart to www.saucedemo.com 
describe('Add to cart', () => {
    it('Add 3 items to cart', () => {
     cy.visit("https://www.saucedemo.com/")
     cy.get('[data-test="username"]').type("standard_user")
     cy.get('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
     for (let i=0; i < 3; i++){
        cy.get('div#inventory_container').find('.btn').eq(i).click()
     }
    });
});