/// <reference types="cypress" />

describe("identification", () => {
  beforeEach(() => {
    cy.visit("/identification");
  });
  it("user cant go to next page if inputs are empty", () => {
    cy.get("#nextButton").click();
    cy.contains("სახელის მითითება სავალდებულოა").should("be.visible");
    cy.contains("გვარის მითითება სავალდებულოა").should("be.visible");
    cy.contains("მეილი სავალდებულოა").should("be.visible");
    cy.url().should("include", "identification");
  });

  it("user can't go to next page with invalid data", () => {
    /* First Name */
    cy.get("#firstName").type("a");
    cy.get("#nextButton").click();
    cy.contains("სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან.").should(
      "be.visible"
    );
    cy.get("#firstName").type("aasdasdasdadasdasdasdas");
    cy.get("#nextButton").click();
    cy.contains("სახელი არ უნდა აღემატებოდეს 20 სიმბოლოს.").should(
      "be.visible"
    );
    cy.get("#firstName").clear().type("1");
    cy.get("#nextButton").click();
    cy.contains("სახელი არ უნდა შეიცავდეს ციფრებს.").should("be.visible");

    /* Last Name */
    cy.get("#lastName").type("a");
    cy.get("#nextButton").click();
    cy.contains("გვარი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან.").should(
      "be.visible"
    );
    cy.get("#lastName").type("aasdasdasdadasdasdasdas");
    cy.get("#nextButton").click();
    cy.contains("გვარი არ უნდა აღემატებოდეს 20 სიმბოლოს.").should("be.visible");
    cy.get("#lastName").clear().type("1");
    cy.get("#nextButton").click();
    cy.contains("გვარი არ უნდა შეიცავდეს ციფრებს.").should("be.visible");

    /* Email */
    cy.get("#email").type("kosta.gmail.com");
    cy.get("#nextButton").click();
    cy.contains("გთხოვთ მიუთითოთ სწორი ფორმატით @redberry.ge").should(
      "be.visible"
    );
    cy.get("#email").clear().type("kosta@gmail.com");
    cy.get("#nextButton").click();
    cy.contains("გთხოვთ მიუთითოთ სწორი ფორმატით @redberry.ge").should(
      "be.visible"
    );
  });
  it("user can go to next page with valid data", () => {
    cy.get("#firstName").type("Kosta");
    cy.get("#lastName").type("Miqautadze");
    cy.get("#email").type("kosta@redberry.ge");
    cy.get("#nextButton").click();
    cy.url().should("include", "covid");
  });
});
