class Carrito{
    elements = {
        continueShoppingButton: () => cy.get("#continue-shopping"),
        checkoutButton: () => cy.get('#checkout'),
        removeButton: () => cy.get('#remove-sauce-labs-bike-light'),
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
}
module.exports = new Carrito()