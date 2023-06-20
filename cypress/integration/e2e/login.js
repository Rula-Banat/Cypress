
//Test login to www.saucedemo.com with standard user 
describe("THIS IS TO TEST THE LOGIN",()=>{
    it("FIRST TEST TO THE LOGIN",()=>{
     cy.visit("https://www.saucedemo.com/")
     cy.get('[data-test="username"]').type("standard_user")
     cy.get('[data-test="password"]').type("secret_sauce")
     cy.get('[data-test="login-button"]').click()
     
     })
    })