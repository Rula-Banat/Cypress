//testing 3 steps https://automationteststore.com : go to shipping then to contact us then to site map and write to each step console 

describe('Shipping > contact us > site map', () => {
    it('Shipping > contact us > site map', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/content&content_id=4"]').click()
        .then(() => {
            console.log('Shipping has been clicked')
            cy.log('Shipping has been clicked')
        })

        cy.go('back')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        .then(() => {
            console.log('Contact us has been clicked')
            cy.log('Contact us has been clicked')
        })

        cy.go('back')
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/sitemap"]').click()
        .then(() => {
            console.log('Site map has been clicked')
            cy.log('Site map has been clicked')
        })
    });
});