/* eslint-disable no-undef */
/* eslint-disable no-console */
/// <reference types="cypress" />

context('Play quiz', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Testes isolados', () => {
    it('Testando digitação do input', () => {
      cy.getBySel('name')
        .type('Fulano')
        .type('{del}{selectall}{backspace}')
        .type('Ciclano');
    });

    it('Testando click no botão Jogar', () => {
      cy.getBySel('submit')
        .click({ force: true });
    });

    it('Testando click no botão GitHubCorner', () => {
      cy.getBySel('gitHubCorner')
        .click({ force: true });
    });
  });

  describe('Testes E2E', () => {
    it('Testando submit do formulário', () => {
      cy.inputForm('Guilherme');
    });

    it('Testando rota /quiz', () => {
      cy.inputForm('Guilherme');
      cy.url().should('include', '/quiz?name=Guilherme');
    });
  });
});
