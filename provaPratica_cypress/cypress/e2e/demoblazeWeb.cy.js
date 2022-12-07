describe('Cenario de Teste de Interface com site da demoblaze', () => {

  it('Caso de Teste negativo: login retornando mensagem de erro', () => {
    acessarPaginaDeTeste();
    cy.get('#login2').click();
    cy.get('#loginusername').type("usuarioTeste");
    cy.get('#loginpassword').type("usuarioTeste");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('Wrong password.');
    });
  });

  it("Caso de Teste: Depois de selecionar um produto ir para pagina descricao do produto", () => {
    acessarPaginaDeTeste();
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').
      invoke("text").then(text => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.wait(2000);
        cy.get('.name').should("contain.text", text);
      });
  });

  it("Caso de Teste: Depois de selecionar o produto e clicar em adicionar o carrinho retorna msg de successo", () => {
    acessarPaginaDeTeste();
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.wait(3000);
    cy.get('.col-sm-12 > .btn').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('Product added');
    });
  }
  );
});

function acessarPaginaDeTeste() {
  cy.visit("https://www.demoblaze.com/index.html");
  cy.wait(2000);
}