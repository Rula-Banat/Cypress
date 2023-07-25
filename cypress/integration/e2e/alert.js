describe('This is to test alert, prompt and confirm windows', () => {
    it('Alert test', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.on('uncaught:exception', (err,runnable) =>{
            return false
        })
        cy.get('#alertbtn').click()
        cy.on('window:alert',(message)=>{
            expect(message).to.eql('Hello , share this practice page with who love to learn automation');
        })
    });

    it.only('Confirm test', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.on('uncaught:exception', (err,runnable) =>{
            return false
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.contain('Are you sure')
        })
    });
});