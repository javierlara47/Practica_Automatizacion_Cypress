class AddProducto{

    pulsarBoton() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .should("be.visible").click({force:true})
    }

    irAlCarrito() {
        cy.get('[data-test="shopping-cart-link"]').should("be.visible").click({force:true})
    }

    volverInicio() {
        cy.get('[data-test="continue-shopping"]').should("be.visible").click({force:true})
    }
}

export default new AddProducto()