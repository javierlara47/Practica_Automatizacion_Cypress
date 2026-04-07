import Login from "../../pages/Login";
import Catalogo from "../../pages/Catalogo";
import ProductDetail from "../../pages/ProductDetail";

describe("Detalle del Producto", () =>{
    beforeEach( () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(1000)
        cy.fixture('user').then((userData) => {
            Login.introducirUsername(userData.validUser.username)
            Login.introducirPassword(userData.validUser.password)
            Login.loginClick()
            Catalogo.openProducDetail()
        })
    })
    

    it("Añadir producto al carrito", () =>{
        cy.wait(1500)
        ProductDetail.addToCart()
        cy.wait(1500)
    })

    it("Eliminar producto", () =>{
        ProductDetail.addToCart()
        cy.wait(1500)
        ProductDetail.removeProduct()
        cy.wait(1500)
    })

    it("Volver al catálogo de productos", () =>{
        cy.wait(1500)
        ProductDetail.backToProducts()
    })
})