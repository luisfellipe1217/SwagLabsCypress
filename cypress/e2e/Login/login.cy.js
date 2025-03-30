///<reference types='cypress'/>

describe('SwagLabs Login Validation', { tags: ['login'] }, () => {

  let loginData

  beforeEach("loading and accessing fixtures", function () {
    cy.fixture('loginData').then((loginJson) => {
      loginData = loginJson
      })
    })

  it('Successfull Login', { tags: ['success'] }, () => {
    cy.openWebPage()
    cy.login(loginData.username, loginData.password)
  })
})