/// <reference types='Cypress' />
import LoginPage from "../../../pages/LoginPage";
describe('Login', () =>{
    let tiempo=1500
    it('Iniciar sesión correctamente', () =>{
        LoginPage.visit()
        cy.title("eq","Swag Labs")

        LoginPage.login('standard_user', 'secret_sauce')
        
    })
})