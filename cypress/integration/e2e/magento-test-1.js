describe('Log list of prices and apply 10% discount', () => {
    
    it('Print to log the first 3 letters of each item, its price and price after 10% discount', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        //Go to men > hoodies and sweatchers
        cy.get('a[href="https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"]').click({ force: true })
        //Show 36 items in the page 
        cy.get(':nth-child(5) > .field > .control > #limiter').select('36')
        //Get all items in the page
        cy.get('.product-item').as('items')
        //Find items names
        cy.get('@items').find('.product-item-link').as('itemsNames')
        //Find items prices and invoke as a text
        cy.get('@items').find('.price').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then((priceText) => {
            let priceList = priceText.split('$')
            priceList.shift() //Remove the first empty array element
        cy.get('@itemsNames').each((element,index,list) => {
            let itemName = element.text()
            let itemLetters = itemName.split('')
            itemLetters = itemLetters.filter(a => a !== '\n') //Remove line breaks
            let itemFirstLetters = itemLetters.slice(0,3) //Get the first 3 letters only
            let itemInitials = itemFirstLetters.join('')
            if (priceList[index]){
            cy.log(itemInitials)
            cy.log('Price before discount is ' + priceList[index])
            let finalPrice = (Number(priceList[index]) * 0.9).toFixed(2)
            cy.log('After 10% discount ' + finalPrice)
            }
        })
        //Calculate total
            let total = 0
            let finalTotal = 0
        for (let i = 0; i < priceList.length; i++) {
            total += Number(priceList[i])
            let finalPrice = (Number(priceList[i]) * 0.9).toFixed(2)
            finalTotal += Number(finalPrice)
        }
        //Print total
        cy.log('Total before discount = ' + total)
        cy.log('Total after 10% discount = ' + finalTotal)
    })
    });
});