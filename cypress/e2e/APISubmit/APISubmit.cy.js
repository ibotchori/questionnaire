/// <reference types="cypress" />

it("user can submit with valid data", () => {
  cy.visit("/");
  cy.get("#logo").should("be.visible");
  cy.get("#welcome-text").click();
  cy.url().should("include", "identification");
  cy.fill_identification();
  cy.fill_covid();
  cy.fill_injection();
  cy.fill_advice();
});

it("user can't submit with invalid data", () => {
  cy.visit("/advice");
  cy.get("#twice_a_week").click();
  cy.get("#2").click();
  cy.get("#assembly").type("test");
  cy.get("#environment").type("test");
  cy.get("#submit").click();
  cy.get("#loader").should("be.visible");
  cy.url().should("include", "error");
  cy.contains("დაფიქსირდა შეცდომა").should("be.visible");
  cy.contains("მთავარი გვერდი").should("be.visible");
  cy.url().should("not.be", "error");
});
