//Count and calculate total prices for a list of items in a page


describe('Count and calculate total of item prices under men hoodies and sweatchers', () => {
    it('Count and calculate total of item prices under men hoodies and sweatchers', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        //Go to men > hoodies and sweatchers
        cy.get('a[href="https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"]').click({ force: true })
        //Show 36 items in the page 
        cy.get(':nth-child(5) > .field > .control > #limiter').select('36')
        //Get all items in the page
        cy.get('.product-item').as('items')
        //Assertion: items count should be 13
        cy.get('@items').should('have.length',13)
        //Get item prices and calculate their total
        cy.get('@items').find('.price').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then((priceText) => {
            let priceList = priceText.split('$')
            let total = 0
            for (let i = 0; i < priceList.length; i++) {
                total += Number(priceList[i])
            }
            cy.log(total)
        })
    });
});

describe('Count and calculate total of item prices under gears bags', () => {
    it('Count and calculate total of item prices under gears bags', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        //Go to Gears > Bags
        cy.get('a[href*="bags.html"]').click({ force: true })
        //Show 36 items in the page 
        cy.get(':nth-child(5) > .field > .control > #limiter').select('36')
        //Get all items in the page
        cy.get('.product-item').as('items')
        //Assertion: items count should be 14
        cy.get('@items').should('have.length',14)
        //Get item final prices and calculate their total
        cy.get('@items').find('span[data-price-type="finalPrice"] .price').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then((priceText) => {
            let priceList = priceText.split('$')
            let total = 0
            for (let i = 0; i < priceList.length; i++) {
                total += Number(priceList[i])
            }
            cy.log(total)
        })
    });
});