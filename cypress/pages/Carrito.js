class Carrito{
    elements = {
        continueShoppingButton: () => cy.get("#continue-shopping"),
        checkoutButton: () => cy.get('#checkout'),
        removeButton: () => cy.get('#remove-sauce-labs-bike-light'),
        classProduct: () => cy.get('.inventory_item_name'),
        usernameData: () => cy.get('#first-name'),
        lastNameData: () => cy.get('#last-name'),
        postalCode: () => cy.get('#postal-code'),
        continueButton: () => cy.get('#continue'),
        cancelButton: () => cy.get('#cancel'),
        finishButton: () => cy.get('#finish'),
        backHomeButton: () => cy.get('#back-to-products') 
    }

    continueShopping(){
        this.elements.continueShoppingButton().click()
    }

    checkout(){
        this.elements.checkoutButton().click()
    }

    removeProducts(){
        this.elements.removeButton().first().click()
    }

    removeProductByName(name){
        cy.contains('.cart_item',name).find('button').click()
    }

    detailProduct(){
        this.elements.classProduct().first().click()
    }

    checkoutData(firstName,lastName,postalCode){
        this.elements.usernameData().type(firstName)
        this.elements.lastNameData().type(lastName)
        this.elements.postalCode().type(postalCode)
    }

    continueButton(){
        this.elements.continueButton().click()
    }

    finishButton(){
        this.elements.finishButton().click()
    }

    cancelButton(){
        this.elements.cancelButton().click()
    }

    backHomeButton(){
        this.elements.backHomeButton().should('be.visible').click()
    }

    completeCheckout(firstName,lastName,postalCode){
        this.checkout()
        cy.wait(2000)
        this.checkoutData(firstName,lastName,postalCode)
        cy.wait(2000)
        this.continueButton()
        cy.wait(2000)
        this.finishButton()
        cy.wait(2000)
        this.backHomeButton()
    }


}
module.exports = new Carrito()