/// <reference types="cypress" />

describe("advice", () => {
  beforeEach(() => {
    cy.visit("/advice");
  });
  it("user can't go to the next page if inputs are empty", () => {
    cy.get("#submit").click();
    cy.contains("არჩევა სავალდებულოა.").should("be.visible");
    cy.contains("გთხოვთ აირჩიოთ ერთ-ერთი.").should("be.visible");
  });

  it("user can go to next page with valid data", () => {
    cy.contains("რედბერის მთავარი ღირებულება").should("be.visible");
    cy.contains("რა სიხშირით შეიძლება გვქონდეს").should("be.visible");
    cy.contains("კვირაში რამდენი დღე ისურვედი").should("be.visible");
    cy.contains("რას ფიქრობ ფიზიკურ შეკრებაზე?").should("be.visible");
    cy.contains("რედბერის მთავარი ღირებულება").should("be.visible");
    cy.contains("რას ფიქრობ არსებულ გარემოზე").should("be.visible");
    cy.contains("დასრულება").should("be.visible");
    cy.get("#twice_a_week").click();
    cy.get("#2").click();
    cy.get("#submit").click();
    cy.get("#loader").should("be.visible");
    cy.url().should("include", "error");
    cy.visit("/advice");
    cy.get("#twice_a_week").click();
    cy.get("#2").click();
    cy.get("#assembly").type("test");
    cy.get("#environment").type("test");
    cy.get("#submit").click();
    cy.get("#loader").should("be.visible");
    cy.url().should("include", "error");
  });
});
