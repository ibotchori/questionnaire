// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fill_identification", () => {
  cy.get("#firstName").type("Kosta");
  cy.get("#lastName").type("Miqautadze");
  cy.get("#email").type("kosta@redberry.ge");
  cy.get("#nextButton").click();
  cy.url().should("include", "covid");
});
Cypress.Commands.add("fill_covid", () => {
  cy.get("#covidNo").click();
  cy.get("#nextButton").click();
  cy.url().should("include", "injection");
});
Cypress.Commands.add("fill_injection", () => {
  cy.contains("უკვე აცრილი ხარ?*").should("be.visible");
  cy.get("#vaccineYes").click();
  cy.contains("აირჩიე რა ეტაპზე ხარ*").should("be.visible");
  cy.get("#registered").click();
  cy.get("#nextButton").click();
  cy.url().should("include", "advice");
});
Cypress.Commands.add("fill_advice", () => {
  cy.get("#twice_a_week").click();
  cy.get("#2").click();
  cy.get("#assembly").type("test");
  cy.get("#environment").type("test");
  /* avoid API call */
  cy.intercept("POST", "https://covid19.devtest.ge/api/*", {
    statusCode: 201,
  });
  cy.get("#submit").click();
  /* without API call loader not shown */
  // cy.get("#loader").should("be.visible");
  cy.url().should("include", "thanks");
  cy.contains("მადლობა").should("be.visible");
  cy.url({ timeout: 3000 }).should("not.include", "thanks");
});
