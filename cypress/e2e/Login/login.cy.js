describe('SwagLabs Login Validation', { tags: ['login'] }, () => {

  let loginData

  beforeEach("loading and accessing fixtures", function () {
    cy.fixture('loginData').then((loginJson) => {
      loginData = loginJson
      })
    })

  it('Successfull Login', { tags: ['success'] }, () => {
    cy.open_web_page()
    cy.login(loginData.username, loginData.password)
  })
})