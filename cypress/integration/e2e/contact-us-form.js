//
describe('Contact Us', () => {
    it('Fill contact us and check confirmation message', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type('Rula')
        cy.get('#ContactUsFrm_email').type('rola@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello, this is a test')
        cy.get('button[title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    });
});