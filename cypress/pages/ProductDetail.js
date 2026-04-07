class ProductDetail{

    elements = {
        addToCartButton: () => cy.get('#add-to-cart'),
        backButton: () => cy.get('#back-to-products'),
        removeButton: () => cy.get('#remove')

    }

    addToCart(){
        this.elements.addToCartButton().click()
    }

    backToProducts(){
        this.elements.backButton().click()
    }

    removeProduct(){
        this.elements.removeButton().should('be.visible').click()
    }


}

module.exports = new ProductDetail()