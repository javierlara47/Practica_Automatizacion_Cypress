class LoginPage {
  visit() {
    cy.visit('/')
    cy.wait(1500)
  }

  typeUsername(username) {
    cy.get('#user-name').type(username)
    cy.wait(1500)
  }

  typePassword(password) {
    cy.get('#password').type(password)
    cy.wait(1500)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }

  login(username, password) {
    this.visit()
    this.typeUsername(username)
    this.typePassword(password)
    this.clickLogin()
  }
}

export default new LoginPage()