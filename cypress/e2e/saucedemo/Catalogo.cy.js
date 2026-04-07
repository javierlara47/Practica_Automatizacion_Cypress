import Catalogo from "../../pages/Catalogo";
import Login from "../../pages/Login";

describe("Catalogo", () =>{
    beforeEach( () =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(1000)
        cy.fixture('user').then((userData) => {
            Login.introducirUsername(userData.validUser.username)
            Login.introducirPassword(userData.validUser.password)
            Login.loginClick()
        })
    })

    it("Añadir/Eliminar producto al carrito", () =>{
        cy.wait(1000)
        Catalogo.clickAddToCartProduct()
        cy.wait(1500)
        Catalogo.removeProduct()
    })

    it("Acceder al carrito", () =>{
        Catalogo.clickAddToCartProduct()
        cy.wait(1000)
        Catalogo.openCart()
    })

    it("Aplicar filtro", () =>{
        cy.wait(1500)
        Catalogo.clickFilter("Price (low to high)")
    })

    it("Añadir producto al carrito por nombre", () => {
        cy.wait(1000)
        Catalogo.addproductToCartByName("Sauce Labs Onesie")
    })

    it("Acceder al detalle del producto", () =>{
        cy.wait(1000)
        Catalogo.openProducDetail()
    })

    it("Acceder al detalle del producto (por nombre)", () =>{
        cy.wait(1000)
        Catalogo.openProducDetailByName("Sauce Labs Onesie")
        cy.wait(2000)
    })

    
})