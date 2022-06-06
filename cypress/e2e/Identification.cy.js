/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("identification", () => {
  beforeEach(() => {
    cy.visit("/identification");
  });
  it("user cant go to the next page if info is not valid", () => {
    cy.get("#nextButton").click();
    cy.contains("სახელის მითითება სავალდებულოა").should("be.visible");
    cy.contains("გვარის მითითება სავალდებულოა").should("be.visible");
    cy.contains("მეილი სავალდებულოა").should("be.visible");
    cy.url().should("include", "identification");
  });
  it("user can go to next page", () => {
    cy.get("#firstName").type("Kosta");
    cy.get("#lastName").type("Miqautadze");
    cy.get("#email").type("kosta@redberry.ge");
    cy.get("#nextButton").click();
    cy.url().should("not.include", "identification");
  });
});
