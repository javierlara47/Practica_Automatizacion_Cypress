import Login from "../../pages/Login";

describe("Login", () =>{

    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
        cy.wait(1000)
        cy.fixture('user').as('userData')
    })

    it('Introducir Login OK', function() {
        Login.introducirUsername(this.userData.validUser.username)
        cy.wait(1000)
        Login.introducirPassword(this.userData.validUser.password)
        cy.wait(1000)
        Login.loginClick()
        cy.get('.title').should('have.text','Products') //Verificar que está en el catálogo
    })

    it('Introducir username incorrecto', function(){
        Login.introducirUsername(this.userData.invalidUser.username)
        cy.wait(1000)
        Login.introducirPassword(this.userData.validUser.password)
        cy.wait(1000)
        Login.loginClick()
        cy.get(Login.elements.errorMessage).should('have.text','Epic sadface: Username and password do not match any user in this servi')
    })

    it('Introducir contraseña incorrecta', function(){
        Login.introducirUsername(this.userData.validUser.username)
        cy.wait(1000)
        Login.introducirPassword(this.userData.invalidUser.password)
        cy.wait(1000)
        Login.loginClick()
        cy.get(Login.elements.errorMessage).should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Dejar campos vacíos', function(){
        Login.loginClick()
        cy.get(Login.elements.errorMessage).should('have.text','Epic sadface: Username is required')
    })

    it('Dejar username vacio', function(){
        Login.introducirPassword(this.userData.validUser.password)
        cy.wait(1000)
        Login.loginClick()
        cy.get(Login.elements.errorMessage).should('have.text','Epic sadface: Username is required')
    })

    it('Dejar contraseña vacia', function(){
        Login.introducirUsername(this.userData.invalidUser.username)
        cy.wait(1000)
        Login.loginClick()
        cy.get(Login.elements.errorMessage).should('have.text','Epic sadface: Password is required')
    })
}) 