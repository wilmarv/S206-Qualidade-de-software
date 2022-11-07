/// <reference types = "cypress"/>

describe("Criando cenário de teste para o site Youtbe", () => {

  it("Case de teste: Selecionando linguagem em ingles ", () => {
    cy.visit("https://www.youtube.com/feed/subscriptions");
    cy.wait(5000);
    selectLanguage();
    cy.document().its("documentElement.lang").should('eq', 'en');
  });

  it("Case de teste: Voltando pagina inicial clicando icone YT superior da tela ", () => {
    cy.visit("https://www.youtube.com/feed/subscriptions");
    cy.wait(5000);
    cy.get('#start').click();
    cy.wait(5000);
    cy.url().should('eq', 'https://www.youtube.com/');
  });

  it("Case de teste: Canal do Ei Nerd esta visivel na primeira pagina de busca 'ei nerd' ", () => {
    cy.visit("https://www.youtube.com/feed/subscriptions");
    cy.wait(10000);
    cy.get('#search-input > #search').type("ei nerd");
    cy.get('#search-icon-legacy').click();
    cy.wait(5000);
    cy.get('#channel-title > #container > #text-container > #text').should("have.text", "Ei Nerd");

  });
  
  it("Case de teste: Direcionar para o canal do Ei Nerd depois da busca ", () => {
    cy.visit("https://www.youtube.com/results?search_query=ei+nerd");
    cy.wait(10000);
    cy.get('#content-section').click();
    cy.url().should('eq', 'https://www.youtube.com/c/einerdtv');
  });

  it("Case de teste negativo: Requisita usuario a logar caso va aba de biblioteca caso não esteja conectado ", () => {
    cy.visit("https://www.youtube.com/feed/subscriptions");
    cy.wait(5000);
    selectLanguage();
    cy.get('[aria-label="Library"] > #endpoint').click();
    cy.get('.promo-body-text').should("contain.text", "Sign in to access videos that you’ve liked or saved");
  });

  it("Case de teste negativo: Requisita usuario a logar caso va na aba de inscrições e não esteja conectado a uma conta", () => {
    cy.visit("https://www.youtube.com");
    cy.wait(30000);
    selectLanguage();
    cy.get('[aria-label="Subscriptions"] > #endpoint').click();
    cy.get('.promo-body-text').should("contain.text", "Sign in to see updates");
  });
  
});

function selectLanguage() {
  cy.get('div.ytd-topbar-menu-button-renderer').click();
  cy.get(':nth-child(2) > #items > :nth-child(2) > #endpoint').click();
  cy.get(':nth-child(13) > #endpoint').click();
  cy.wait(10000);
}