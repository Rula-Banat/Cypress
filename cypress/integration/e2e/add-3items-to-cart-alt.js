describe('Add to cart alternatively', () => {
    it('Add 3 items to cart alternatively', () => {
     cy.visit("https://www.saucedemo.com/")
     cy.get('[data-test="username"]').type("standard_user")
     cy.get('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
     //Add item and skip the following one
     for (let i = 0; i < 6; i++){
        if (i % 2 == 0){
        cy.get('div#inventory_container').find('.btn').eq(i).click()
        }
     }
    });
});