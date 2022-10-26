/// <reference types = "cypress"/>

describe("Criando cenário de teste para o site globalsqa", () => {
  it.skip("Case de teste: Registando um usuário no site com sucesso", () => {

    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get('.btn-link').click();
    cy.get('#firstName').type("inatel");
    cy.get('#Text1').type("inatel");
    cy.get('#username').type("inatel");
    cy.get('#password').type("inatel");
    cy.get('.btn-primary').click();
    cy.get('.ng-binding').should("contain.text", "Registration successful");
  });

  it.skip("Case de teste: Registrando um usuario com falha (faltando senha)", () => {

    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/register");
    cy.get('#firstName').type("inatel");
    cy.get('#Text1').type("inatel");
    cy.get('#username').type("inatel");
    cy.get('#password').type("inatel");
    cy.get('#password').clear();
    cy.get('.has-error > .help-block').should("have.text", "Password is required")
    cy.get('.btn-primary').should("be.disabled");

  });

  it("Case de teste: Realizando login com sucesso", () => {

    const info = criarUsuario();

    cy.get('#username').type(info[0]);
    cy.get('#password').type(info[1]);

    cy.get('.btn-primary').click();

    cy.get('h1.ng-binding').should("contain.text",info[0]);

  });


});

function criarUsuario() {

  const horas = new Date().getHours().toString();
  const minutos = new Date().getMinutes().toString();
  const seg = new Date().getSeconds().toString();

  const user = horas + minutos + seg + "id";
  const senha = horas + minutos + seg + "senha";

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
  cy.get('.btn-link').click();
  cy.get('#firstName').type(user);
  cy.get('#Text1').type(user);
  cy.get('#username').type(user);
  cy.get('#password').type(senha);
  cy.get('.btn-primary').click();
  cy.get('.ng-binding').should("contain.text", "Registration successful");

  return [user, senha];
}