/// <reference types="cypress" />

describe("covid", () => {
  beforeEach(() => {
    cy.visit("/covid");
  });
  it("user can't go to the next page if inputs are empty", () => {
    cy.get("#nextButton").click();
    cy.contains("არჩევა სავალდებულოა.").should("be.visible");
    cy.get("#covidYes").click();
    cy.contains("ანტისხეულების ტესტი გაქვს გაკეთებული?*").should("be.visible");
    cy.get("#testNo").click();
    cy.get("#nextButton").click();
    cy.contains("გთხოვთ მიუთითოთ პერიოდი.").should("be.visible");
  });
  it("user can't go to next page with invalid data", () => {
    cy.get("#covidYes").click();
    cy.get("#testNo").click();
    cy.get("#covidPeriod").type("12.22.22");
    cy.get("#nextButton").click();
    cy.contains("გთხოვთ მიუთითოთ დდ/თთ/წწ ფორმატით").should("be.visible");
  });
  it("user can go to next page with valid data", () => {
    cy.get("#covidNo").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
    cy.get("#prevButton").click();
    cy.get("#covidNow").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
    cy.get("#prevButton").click();
    cy.get("#covidYes").click();
    cy.get("#testYes").click();
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
    cy.get("#prevButton").click();
    cy.get("#testDate").invoke("removeAttr", "type").type("2022-12-12{enter}");
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
    cy.get("#prevButton").click();
    cy.get("#testQuantity").type("50");
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
    cy.get("#prevButton").click();
    cy.get("#testNo").click();
    cy.get("#covidPeriod").type("12/05/22");
    cy.get("#nextButton").click();
    cy.url().should("include", "injection");
  });
});
