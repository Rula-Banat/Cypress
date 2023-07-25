
describe('Sign up test with random email', () => {
    it('Sign up test', () => {
        let EmailtosignIn
        function generateEmail() {
           
        let domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com']
        let randomDomain = domains[Math.floor(Math.random() * domains.length)]
        let chacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let usernameLength = Math.floor(Math.random() * 10) + 5 // username length between 5 and 15
        let username = ''
        for (let i = 0; i < usernameLength; i++) {
            username += chacters.charAt(Math.floor(Math.random() * chacters.length))
        }
        return username + '@' + randomDomain
        }

        const randomEmail = generateEmail()

        const FirstNameList = ["ahmad", "muna", "ali", "ruba"]
        const LastNameList = ["albasha", "qudah", "majali "]
        let randomFirstNameIndex = Math.floor(Math.random() * FirstNameList.length)
        let randomLastNameIndex = Math.floor(Math.random() * LastNameList.length)
        
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('#firstname').type(FirstNameList[randomFirstNameIndex])
        cy.get('#lastname').type(LastNameList[randomLastNameIndex])
        cy.get('#email_address').type(randomEmail)
        cy.get('#password').type("ASDasd!@#")
        cy.get('#password-confirmation').type("ASDasd!@#")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        // Sign out
        EmailtosignIn = randomEmail
        cy.get('a[href="#contentarea"]').click({force: true})
        cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]').contains('Sign Out').click({force: true})
        // Sign in with the created account
        cy.get('a').contains('Sign In').click()
        cy.get('#email').type(EmailtosignIn)
        cy.get('#pass').type('ASDasd!@#')
        cy.get('#send2').click()
    });
});