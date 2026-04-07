class Catalogo{
    elements = {
        buttonAddToCart: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        buttonShoppingCart: () => cy.get('.shopping_cart_link'),
        buttonFilter: () => cy.get('.product_sort_container'),
        productName: () => cy.get('#item_1_img_link'),
        buttonRemoveProduct: () => cy.get('#remove-sauce-labs-backpack')
    }

    clickAddToCartProduct(){
        this.elements.buttonAddToCart().click({force:true})
    }

    addproductToCartByName(productName){
        cy.contains('.inventory_item', productName).find('button').click()
    }

    removeProduct(){
        this.elements.buttonRemoveProduct().should('be.visible').click({force:true})
    }

    clickFilter(OptionValue){
        this.elements.buttonFilter().select(OptionValue)
    }

    openCart(){
        this.elements.buttonShoppingCart().click({force:true})
    }

    openProducDetail(){
        this.elements.productName().click({force:true})
    }

    openProducDetailByName(name){
        cy.contains('.inventory_item',name).find(".inventory_item_img").first().click()
    }

    
    clickAddToCartProductDetail(name1){
        cy.contains('.inventory_item',name1).find(".inventory_item_img").first().click().find('button').click()
    }
    
}

module.exports = new Catalogo()