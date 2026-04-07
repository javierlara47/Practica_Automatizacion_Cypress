import Login from "../../pages/Login";
import Catalogo from "../../pages/Catalogo";
import Carrito from "../../pages/Carrito";

describe("Carrito", () =>{
    beforeEach( () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(1000)
        cy.fixture('user').then((userData) => {
            Login.introducirUsername(userData.validUser.username)
            Login.introducirPassword(userData.validUser.password)
            Login.loginClick()
            Catalogo.addproductToCartByName("Sauce Labs Bike Light")
            Catalogo.addproductToCartByName("Sauce Labs Fleece Jacket")
            Catalogo.openCart()
        })
    })

    it("Continuar comprando", () =>{
        cy.wait(1500)
        Carrito.continueShopping()
        cy.wait(1000)
    })

    it("Eliminar producto del carrito", () =>{
        cy.wait(1500)
        Carrito.removeProducts()
    })

    it("Eliminar producto por nombre", () =>{
        cy.wait(1500)
        Carrito.removeProductByName("Sauce Labs Fleece Jacket")
    })

    it("Continuar (Checkout)", () =>{
        Carrito.checkout()
    })
})