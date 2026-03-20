/// <reference types='Cypress' />
import LoginPage from "../../../pages/LoginPage";
import AddProducto from "../../../pages/AddProducto";
describe("Catálogo", () =>{
    it("Añadir producto al carrito desde el catálogo", () =>{
        LoginPage.login('standard_user', 'secret_sauce')
        cy.wait(1500)
        AddProducto.pulsarBoton()
        cy.wait(1500)
        AddProducto.irAlCarrito()
        cy.wait(1500)
        AddProducto.volverInicio()

    })
    


})